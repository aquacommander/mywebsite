import { useState, useCallback, useEffect } from "react";
import Flex from "components/basic/flex";
import { Span } from "components/basic/text";
import { motion, AnimatePresence } from "framer-motion";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => (typeof window !== "undefined" ? window.matchMedia(query).matches : false)
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = () => setMatches(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

const TIMELINE_START = 2010;
const TIMELINE_END = 2026;
const TOTAL_MONTHS = (TIMELINE_END - TIMELINE_START) * 12;

function toPosition(year: number, month: number): number {
  const monthsFromStart = (year - TIMELINE_START) * 12 + (month - 1);
  return Math.min(1, Math.max(0, monthsFromStart / TOTAL_MONTHS));
}

function formatDateRange(
  startYear: number,
  startMonth: number,
  endYear: number,
  endMonth: number
): string {
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  return `${pad(startMonth)}/${startYear} – ${pad(endMonth)}/${endYear}`;
}

interface CareerEntry {
  id: string;
  type: "education" | "role";
  label: string;
  company?: string;
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  color: string;
  location: string;
  locationFlag: string;
  achievements: string[];
  techStack: string[];
}

interface CareerTimelineProps {
  data: CareerEntry[];
}

const YEAR_MARKERS = [2010, 2014, 2018, 2022, 2026];

export default function CareerTimeline({ data }: CareerTimelineProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleEnter = useCallback((id: string) => setHoveredId(id), []);
  const handleLeave = useCallback(() => setHoveredId(null), []);
  const handleToggle = useCallback(
    (id: string) =>
      setHoveredId((prev) => (prev === id ? null : id)),
    []
  );

  return (
    <Flex
      $style={{
        w: "100%",
        minW: "18rem",
        fDirection: "column",
        background: "#22272c",
        radius: "0.8rem",
        p: "1.5rem",
        gap: "1rem",
        position: "relative",
        minH: "12rem",
      }}
    >
      <Span $style={{ size: "1rem", weight: "600" }}>
        Career Experience Timeline
      </Span>

      {/* Year labels */}
      <Flex
        $style={{
          w: "100%",
          hAlign: "space-between",
          p: "0 0.5rem 0 2rem",
        }}
      >
        {YEAR_MARKERS.map((year) => (
          <Span key={year} $style={{ size: "0.7rem", color: "#9ca3af" }}>
            {year}
          </Span>
        ))}
      </Flex>

      {/* Timeline track - clean line, no overlay on hover */}
      <Flex
        $style={{
          w: "100%",
          position: "relative",
          h: "6rem",
          p: "0 1rem",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient id="hacobuGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="deliveryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="federatoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          {/* Subtle upward curve */}
          <path
            d="M 0 55 Q 50 35, 100 55"
            fill="none"
            stroke="#374151"
            strokeWidth="1.5"
          />
        </svg>

        {/* Bars and markers - no overlay bar, only segments */}
        <Flex
          $style={{
            position: "absolute",
            top: "0",
            left: "1rem",
            right: "1rem",
            bottom: "0",
            w: "calc(100% - 2rem)",
          }}
        >
          {data.map((entry) => {
            const startX = toPosition(entry.startYear, entry.startMonth);
            const endX = toPosition(entry.endYear, entry.endMonth);
            const widthPct = (endX - startX) * 100;
            const leftPct = startX * 100;
            const centerX = (startX + endX) / 2;

            if (entry.type === "education") {
              return (
                <Flex
                  key={entry.id}
                  onMouseEnter={() => handleEnter(entry.id)}
                  onMouseLeave={handleLeave}
                  onClick={() => handleToggle(entry.id)}
                  tabIndex={0}
                  onFocus={() => handleEnter(entry.id)}
                  onBlur={handleLeave}
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleToggle(entry.id);
                    }
                  }}
                  $style={{
                    position: "absolute",
                    left: `${centerX * 100}%`,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    cursor: "pointer",
                  }}
                >
                  <motion.div
                    animate={{
                      scale: hoveredId === entry.id ? 1.2 : 1,
                      boxShadow:
                        hoveredId === entry.id
                          ? `0 0 10px ${entry.color}44`
                          : "none",
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: entry.color,
                      outline: "none",
                    }}
                  />
                  <AnimatePresence>
                    {hoveredId === entry.id && (
                      <InfoCard
                        entry={entry}
                        compact={isSmallScreen}
                        leftOffset={0}
                      />
                    )}
                  </AnimatePresence>
                </Flex>
              );
            }

            return (
              <Flex
                key={entry.id}
                onMouseEnter={() => handleEnter(entry.id)}
                onMouseLeave={handleLeave}
                onClick={() => handleToggle(entry.id)}
                tabIndex={0}
                onFocus={() => handleEnter(entry.id)}
                onBlur={handleLeave}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleToggle(entry.id);
                  }
                }}
                $style={{
                  position: "absolute",
                  left: `${leftPct}%`,
                  top: "50%",
                  w: `${widthPct}%`,
                  h: "1.25rem",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                <motion.div
                  animate={{
                    boxShadow:
                      hoveredId === entry.id
                        ? `0 0 12px ${entry.color}44`
                        : "none",
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 4,
                    background:
                      entry.id === "hacobu"
                        ? "url(#hacobuGrad)"
                        : entry.id === "delivery-hero"
                        ? "url(#deliveryGrad)"
                        : entry.id === "federato"
                        ? "url(#federatoGrad)"
                        : entry.color,
                    outline: "none",
                  }}
                />
                <AnimatePresence>
                  {hoveredId === entry.id && (
                    <InfoCard
                      entry={entry}
                      leftOffset={!isSmallScreen && entry.id === "federato" ? -50 : 0}
                      compact={isSmallScreen || entry.id === "federato"}
                    />
                  )}
                </AnimatePresence>
              </Flex>
            );
          })}

          {/* Available for Hire marker */}
          <Flex
            $style={{
              position: "absolute",
              right: "0",
              top: "50%",
              transform: "translate(50%, -50%)",
              vAlign: "center",
              gap: "0.5rem",
            }}
          >
            <Span
              $style={{
                size: "0.75rem",
                weight: "600",
                color: "#14b8a6",
              }}
            >
              Available for Hire →
            </Span>
          </Flex>
        </Flex>
      </Flex>

      {/* Legend / labels row - also hoverable */}
      <Flex
        $style={{
          w: "100%",
          fWrap: "wrap",
          gap: "0.75rem",
          hAlign: "center",
        }}
      >
        {data.map((entry) => (
          <Flex
            key={entry.id}
            onMouseEnter={() => handleEnter(entry.id)}
            onMouseLeave={handleLeave}
            onClick={() => handleToggle(entry.id)}
            tabIndex={0}
            onFocus={() => handleEnter(entry.id)}
            onBlur={handleLeave}
            $style={{
              vAlign: "center",
              gap: "0.4rem",
              cursor: "pointer",
              p: "0.25rem 0.5rem",
              radius: "0.25rem",
            }}
          >
            <Flex
              $style={{
                w: entry.type === "education" ? "0.5rem" : "0.75rem",
                h: entry.type === "education" ? "0.5rem" : "0.5rem",
                radius: entry.type === "education" ? "100%" : "0.2rem",
                background: entry.color,
              }}
            />
            <Span $style={{ size: "0.75rem" }}>{entry.label}</Span>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

function InfoCard({
  entry,
  leftOffset = 0,
  compact = false,
}: {
  entry: CareerEntry;
  leftOffset?: number;
  compact?: boolean;
}) {
  const dates = formatDateRange(
    entry.startYear,
    entry.startMonth,
    entry.endYear,
    entry.endMonth
  );

  // Responsive: cap width at viewport to prevent overflow on small screens
  const maxWidth = compact ? 320 : 400;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      role="dialog"
      aria-label={`Career details: ${entry.label}`}
      style={{
        position: "absolute",
        left: "0",
        bottom: "100%",
        transform: `translate(${leftOffset}px, -16px)`,
        zIndex: 100,
        maxWidth: `min(${maxWidth}px, calc(100vw - 2rem))`,
        minWidth: compact ? 200 : 240,
        width: "max-content",
      }}
    >
      <div
        style={{
          background: "#111827",
          borderRadius: compact ? "0.4rem" : "0.5rem",
          padding: compact ? "0.6rem 0.75rem" : "1rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          border: `1px solid ${entry.color}44`,
          fontFamily: "Titillium Web, Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* Arrow pointing down to segment (left edge) */}
        <div
          style={{
            position: "absolute",
            bottom: -8,
            left: 24,
            width: 0,
            height: 0,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "8px solid #111827",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -9,
            left: 23,
            width: 0,
            height: 0,
            borderLeft: "9px solid transparent",
            borderRight: "9px solid transparent",
            borderTop: `9px solid ${entry.color}44`,
          }}
        />

        <div
          style={{
            fontWeight: 600,
            fontSize: compact ? 12 : 14,
            marginBottom: compact ? 2 : 4,
            color: "#fff",
          }}
        >
          {entry.label}
        </div>
        {entry.company && (
          <div
            style={{
              fontSize: compact ? 11 : 12,
              color: "#9ca3af",
              marginBottom: compact ? 4 : 6,
            }}
          >
            {entry.company}
          </div>
        )}
        <div
          style={{
            fontSize: compact ? 10 : 11,
            color: "#6b7280",
            marginBottom: compact ? 4 : 8,
          }}
        >
          {dates}
        </div>
        <div
          style={{
            fontSize: compact ? 10 : 11,
            color: "#9ca3af",
            marginBottom: compact ? 4 : 8,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span>{entry.locationFlag}</span>
          <span>{entry.location}</span>
        </div>
        <ul
          style={{
            margin: 0,
            paddingLeft: 14,
            fontSize: compact ? 11 : 12,
            color: "#d1d5db",
            lineHeight: compact ? 1.35 : 1.5,
          }}
        >
          {entry.achievements
            .slice(0, compact ? 2 : 3)
            .map((a, i) => (
              <li key={i}>{a}</li>
            ))}
        </ul>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: compact ? 3 : 4,
            marginTop: compact ? 4 : 8,
          }}
        >
          {entry.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: compact ? 9 : 10,
                padding: compact ? "1px 6px" : "2px 8px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: 4,
                color: "#9ca3af",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
