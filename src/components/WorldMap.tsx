"use client";

import { useId, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapPoint {
  lat: number;
  lng: number;
  label?: string;
}

export interface WorldMapConnection {
  start: MapPoint;
  end: MapPoint;
}

export interface WorldMapProps {
  dots?: WorldMapConnection[];
  lineColor?: string;
}

export function WorldMap({ dots = [], lineColor = "#0ea5e9" }: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);
  const gradientId = useId();

  const { theme, resolvedTheme } = useTheme();

  const currentTheme = useMemo(() => {
    if (resolvedTheme) {
      return resolvedTheme;
    }

    if (theme) {
      return theme;
    }

    if (typeof document !== "undefined" && document.documentElement.classList.contains("dark")) {
      return "dark";
    }

    return "light";
  }, [resolvedTheme, theme]);

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: currentTheme === "dark" ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: currentTheme === "dark" ? "#020817" : "#ffffff",
      }),
    [currentTheme, map],
  );

  const projectPoint = (lat: number, lng: number) => {
    const x = ((lng + 180) * 800) / 360;
    const y = ((90 - lat) * 400) / 180;
    return { x, y };
  };

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-white font-sans dark:bg-black">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
        alt="world map"
        draggable={false}
      />
      <svg ref={svgRef} viewBox="0 0 800 400" className="absolute inset-0 h-full w-full select-none">
        {dots.map((dot, index) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`path-group-${index}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth={1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.45 * index,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, index) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`points-group-${index}`}>
              <g key={`start-${index}`}>
                <circle cx={start.x} cy={start.y} r={2} fill={lineColor} />
                <circle cx={start.x} cy={start.y} r={2} fill={lineColor} opacity={0.5}>
                  <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                </circle>
              </g>
              <g key={`end-${index}`}>
                <circle cx={end.x} cy={end.y} r={2} fill={lineColor} />
                <circle cx={end.x} cy={end.y} r={2} fill={lineColor} opacity={0.5}>
                  <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                </circle>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default WorldMap;
