import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Flex from "components/basic/flex";
import { motion, AnimatePresence } from "framer-motion";
import {
  StaircaseContainer,
  StepWrapper,
  StepContent,
  StepInner,
  StepHeader,
  StepIcon,
  StepTitle,
  StepMeta,
  AvailableMarker,
  PopoverCard,
  PopoverTitle,
  PopoverPeriod,
  PopoverLocation,
  PopoverFocus,
  PopoverList,
  PopoverBadges,
  Badge,
  ComponentTitle,
  AvailableText,
} from "./career-staircase.style";

interface StaircaseEntry {
  id: string;
  period: string;
  label: string;
  company: string;
  color: string;
  location: string;
  locationFlag: string;
  icon: string;
  focus: string;
  impacts: string[];
  techStack: string[];
}

interface CareerStaircaseProps {
  data: StaircaseEntry[];
}

export default function CareerStaircase({ data }: CareerStaircaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const handleEnter = useCallback((id: string) => setHoveredId(id), []);
  const handleLeave = useCallback(() => setHoveredId(null), []);
  const handleClick = useCallback(
    (id: string, e: React.MouseEvent) => {
      e.stopPropagation();
      setHoveredId((prev) => {
        if (prev === id) {
          setAnchorRect(null);
          return null;
        }
        const stepEl = stepRefs.current.get(id);
        if (stepEl) setAnchorRect(stepEl.getBoundingClientRect());
        return id;
      });
    },
    []
  );

  // Close popover when clicking outside (works on all devices)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setHoveredId(null);
        setAnchorRect(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Update anchor rect on scroll/resize when popover is open
  useEffect(() => {
    if (!hoveredId) return;
    const stepEl = stepRefs.current.get(hoveredId);
    if (!stepEl) return;
    const update = () => setAnchorRect(stepEl.getBoundingClientRect());
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [hoveredId]);

  return (
    <Flex
      cRef={containerRef}
      $style={{
        w: "100%",
        fDirection: "column",
        background: "#22272c",
        radius: "0.8rem",
        queries: {
          768: { minW: "16rem" },
          480: { minW: "14rem" },
        },
      }}
    >
      <StaircaseContainer>
        {/* Faint Mt. Fuji silhouette in background */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 200,
            height: 80,
            opacity: 0.04,
            background: `linear-gradient(to top, #374151 0%, transparent 100%)`,
            clipPath:
              "polygon(50% 100%, 0% 40%, 20% 40%, 35% 60%, 50% 50%, 65% 60%, 80% 40%, 100% 40%)",
            pointerEvents: "none",
          }}
        />

        <ComponentTitle>Career Progression Ladder</ComponentTitle>

        <Flex
          $style={{
            fDirection: "column",
            gap: "0.5rem",
            position: "relative",
            p: "0.5rem 0",
            w: "100%",
          }}
        >
          {data.map((entry, index) => (
            <StepWrapper
              key={entry.id}
              ref={(el) => {
                if (el) stepRefs.current.set(entry.id, el);
              }}
              $index={index}
              $stepsCount={data.length}
              onMouseEnter={() => handleEnter(entry.id)}
              onMouseLeave={handleLeave}
              onClick={(e) => handleClick(entry.id, e)}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setHoveredId((prev) => {
                    if (prev === entry.id) {
                      setAnchorRect(null);
                      return null;
                    }
                    const stepEl = stepRefs.current.get(entry.id);
                    if (stepEl) setAnchorRect(stepEl.getBoundingClientRect());
                    return entry.id;
                  });
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={hoveredId === entry.id}
              aria-label={`${entry.label} at ${entry.company} - tap for details`}
            >
              <motion.div
                animate={{
                  boxShadow:
                    hoveredId === entry.id
                      ? `0 0 20px ${entry.color}44`
                      : "0 2px 8px rgba(0,0,0,0.3)",
                }}
                transition={{ duration: 0.2 }}
              >
                <StepContent $color={entry.color}>
                  <StepInner>
                    <StepHeader>
                      <StepIcon>{entry.icon}</StepIcon>
                      <Flex $style={{ fDirection: "column", gap: "0.15rem" }}>
                        <StepTitle>
                          {entry.label} – {entry.company}
                        </StepTitle>
                        <StepMeta>
                          {entry.period} · {entry.locationFlag} {entry.location}
                        </StepMeta>
                      </Flex>
                    </StepHeader>
                  </StepInner>
                </StepContent>
              </motion.div>

              <AnimatePresence>
                {hoveredId === entry.id && anchorRect && (
                  <StepPopoverPortal
                    entry={entry}
                    anchorRect={anchorRect}
                    onStopPropagation={(e) => e.stopPropagation()}
                  />
                )}
              </AnimatePresence>
            </StepWrapper>
          ))}

          {/* Available for Hire marker */}
          <AvailableMarker $stepsCount={data.length}>
            <AvailableText>Available for Hire ↗</AvailableText>
          </AvailableMarker>
        </Flex>
      </StaircaseContainer>
    </Flex>
  );
}

const POPOVER_GAP = 8;
const VIEWPORT_PADDING = 16;
const ESTIMATED_POPOVER_HEIGHT = 220;

function StepPopoverPortal({
  entry,
  anchorRect,
  onStopPropagation,
}: {
  entry: StaircaseEntry;
  anchorRect: DOMRect;
  onStopPropagation: (e: React.MouseEvent | React.TouchEvent) => void;
}) {
  const spaceAbove = anchorRect.top;
  const preferAbove = spaceAbove >= ESTIMATED_POPOVER_HEIGHT + POPOVER_GAP;
  const top = preferAbove
    ? Math.max(VIEWPORT_PADDING, anchorRect.top - ESTIMATED_POPOVER_HEIGHT - POPOVER_GAP)
    : Math.min(
        window.innerHeight - ESTIMATED_POPOVER_HEIGHT - VIEWPORT_PADDING,
        anchorRect.bottom + POPOVER_GAP
      );
  const left = Math.max(
    VIEWPORT_PADDING,
    Math.min(anchorRect.left, window.innerWidth - 280 - VIEWPORT_PADDING)
  );

  const popoverContent = (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      style={{
        position: "fixed",
        top,
        left,
        zIndex: 9999,
        maxWidth: "min(360px, calc(100vw - 2rem))",
        minWidth: "min(240px, calc(100vw - 2rem))",
      }}
      onClick={onStopPropagation}
      onTouchStart={onStopPropagation}
    >
      <PopoverCard $color={entry.color}>
        <PopoverTitle>
          {entry.label} – {entry.company}
        </PopoverTitle>
        <PopoverPeriod>{entry.period}</PopoverPeriod>
        <PopoverLocation>
          <span>{entry.locationFlag}</span>
          <span>{entry.location}</span>
        </PopoverLocation>
        <PopoverFocus>Focus: {entry.focus}</PopoverFocus>
        <PopoverList>
          {entry.impacts.slice(0, 2).map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </PopoverList>
        <PopoverBadges>
          {entry.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </PopoverBadges>
      </PopoverCard>
    </motion.div>
  );

  return createPortal(popoverContent, document.body);
}
