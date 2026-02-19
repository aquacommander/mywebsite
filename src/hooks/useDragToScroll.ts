import { useRef, useEffect, useCallback } from 'react';

interface UseDragToScrollOptions {
  /**
   * Threshold in pixels to distinguish drag from click
   * If drag distance exceeds this, click events are prevented
   */
  dragThreshold?: number;
  /**
   * Enable smooth momentum/inertia scrolling
   */
  enableMomentum?: boolean;
  /**
   * Enable horizontal mouse wheel scrolling
   */
  enableWheelScroll?: boolean;
}

/**
 * Custom hook for drag-to-scroll functionality on horizontal containers
 * Provides smooth mouse drag scrolling with click prevention and optional momentum
 */
export function useDragToScroll<T extends HTMLElement = HTMLDivElement>(
  options: UseDragToScrollOptions = {}
) {
  const {
    dragThreshold = 5,
    enableMomentum = true,
    enableWheelScroll = true,
  } = options;

  const containerRef = useRef<T>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const dragDistanceRef = useRef(0);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    // Don't interfere with text selection or links
    if ((e.target as HTMLElement).tagName === 'A' || 
        (e.target as HTMLElement).tagName === 'BUTTON') {
      return;
    }

    isDraggingRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
    dragDistanceRef.current = 0;
    lastXRef.current = e.pageX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    container.style.cursor = 'grabbing';
    // Prevent text selection only during drag
    container.style.userSelect = 'none';

    // Prevent default to avoid text selection
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current) return;

    const container = containerRef.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Scroll speed multiplier
    container.scrollLeft = scrollLeftRef.current - walk;

    // Track drag distance for click prevention
    dragDistanceRef.current += Math.abs(e.movementX);

    // Calculate velocity for momentum
    if (enableMomentum) {
      const now = performance.now();
      const deltaTime = now - lastTimeRef.current;
      if (deltaTime > 0) {
        const deltaX = e.pageX - lastXRef.current;
        velocityRef.current = deltaX / deltaTime;
      }
      lastXRef.current = e.pageX;
      lastTimeRef.current = now;
    }
  }, [enableMomentum]);

  const handleMouseUp = useCallback(() => {
    if (!isDraggingRef.current) return;

    const container = containerRef.current;
    if (!container) return;

    isDraggingRef.current = false;
    container.style.cursor = 'grab';
    // Re-enable text selection after drag
    container.style.userSelect = '';

    // Apply momentum scrolling if enabled
    if (enableMomentum && Math.abs(velocityRef.current) > 0.1) {
      const applyMomentum = () => {
        if (!container) return;

        container.scrollLeft -= velocityRef.current * 16; // 16ms frame time
        velocityRef.current *= 0.92; // Friction

        if (Math.abs(velocityRef.current) > 0.1) {
          animationFrameRef.current = requestAnimationFrame(applyMomentum);
        } else {
          animationFrameRef.current = null;
        }
      };
      animationFrameRef.current = requestAnimationFrame(applyMomentum);
    }
  }, [enableMomentum]);

  const handleMouseLeave = useCallback(() => {
    if (isDraggingRef.current) {
      handleMouseUp();
    }
  }, [handleMouseUp]);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (!enableWheelScroll) return;

    const container = containerRef.current;
    if (!container) return;

    // Only handle horizontal scrolling
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      return; // Vertical scroll, let browser handle it
    }

    // Prevent default vertical scroll
    e.preventDefault();

    // Scroll horizontally based on vertical wheel delta (shift+wheel behavior)
    container.scrollBy({
      left: e.deltaY,
      behavior: 'smooth',
    });
  }, [enableWheelScroll]);

  // Prevent click events if drag distance exceeded threshold
  const handleClick = useCallback((e: MouseEvent) => {
    const wasDragging = dragDistanceRef.current > dragThreshold;
    if (wasDragging) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
    // Reset drag distance after checking
    dragDistanceRef.current = 0;
  }, [dragThreshold]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add event listeners
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('click', handleClick, true); // Capture phase

    // Set initial cursor
    container.style.cursor = 'grab';

    // Cleanup
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('click', handleClick, true);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave, handleWheel, handleClick]);

  return containerRef;
}
