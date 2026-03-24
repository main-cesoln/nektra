"use client";

import { useReducedMotion } from "framer-motion";

// Battery position (mid-left)
const BX = 150;
const BY = 400;

// Destination endpoints (all mid-right, spread vertically)
const ENDPOINTS = [
  {
    name: "Factory",
    x: 1050,
    y: 130,
    curve: `M ${BX} ${BY} C 400 380, 750 180, 1050 130`,
    delay: "0s",
    icon: "M -10 10 L -10 -4 L -6 -4 L -6 -10 L -2 -10 L -2 -4 L 2 -4 L 2 -10 L 6 -10 L 6 -4 L 10 -4 L 10 10 Z",
  },
  {
    name: "Warehouse",
    x: 1050,
    y: 260,
    curve: `M ${BX} ${BY} C 400 390, 750 280, 1050 260`,
    delay: "0.8s",
    icon: "M -10 10 L -10 -2 L 0 -10 L 10 -2 L 10 10 L 4 10 L 4 2 L -4 2 L -4 10 Z",
  },
  {
    name: "Truck",
    x: 1050,
    y: 390,
    curve: `M ${BX} ${BY} C 400 400, 750 395, 1050 390`,
    delay: "1.6s",
    icon: "M -10 6 L -10 -6 L 4 -6 L 4 -2 L 10 -2 L 10 6 Z M -7 8 A 2 2 0 1 0 -3 8 A 2 2 0 1 0 -7 8 M 5 8 A 2 2 0 1 0 9 8 A 2 2 0 1 0 5 8",
  },
  {
    name: "Building",
    x: 1050,
    y: 520,
    curve: `M ${BX} ${BY} C 400 410, 750 500, 1050 520`,
    delay: "2.4s",
    icon: "M -8 10 L -8 -10 L 8 -10 L 8 10 Z M -5 -7 L -2 -7 L -2 -4 L -5 -4 Z M 2 -7 L 5 -7 L 5 -4 L 2 -4 Z M -5 -1 L -2 -1 L -2 2 L -5 2 Z M 2 -1 L 5 -1 L 5 2 L 2 2 Z M -2 5 L 2 5 L 2 10 L -2 10 Z",
  },
  {
    name: "Lightbulb",
    x: 1050,
    y: 650,
    curve: `M ${BX} ${BY} C 400 420, 750 600, 1050 650`,
    delay: "3.2s",
    icon: "M 0 -10 A 7 7 0 0 1 5 0 C 5 3 3 5 3 7 L -3 7 C -3 5 -5 3 -5 0 A 7 7 0 0 1 0 -10 Z M -3 8 L 3 8 M -3 10 L 3 10",
  },
  {
    name: "Zap",
    x: 1050,
    y: 760,
    curve: `M ${BX} ${BY} C 400 430, 750 710, 1050 760`,
    delay: "4s",
    icon: "M 2 -10 L -4 2 L 0 2 L -2 10 L 6 -2 L 2 -2 Z",
  },
];

export default function EnergyLines() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="absolute inset-0 pointer-events-none hidden md:block"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 800"
        fill="none"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter
            id="energy-glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="3"
              result="blur"
            />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Battery icon (mid-left) */}
        <g
          filter="url(#energy-glow)"
          style={{ opacity: "var(--energy-line-opacity)" }}
        >
          {/* Battery body */}
          <rect
            x={BX - 40}
            y={BY - 60}
            width={80}
            height={120}
            rx={8}
            stroke="rgb(var(--primary-rgb))"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Battery cap (positive terminal) */}
          <rect
            x={BX - 15}
            y={BY - 72}
            width={30}
            height={12}
            rx={4}
            stroke="rgb(var(--primary-rgb))"
            strokeWidth="2.5"
            fill="none"
          />
          {/* + symbol inside */}
          <line
            x1={BX - 15}
            y1={BY}
            x2={BX + 15}
            y2={BY}
            stroke="rgb(var(--primary-rgb))"
            strokeWidth="2"
          />
          <line
            x1={BX}
            y1={BY - 15}
            x2={BX}
            y2={BY + 15}
            stroke="rgb(var(--primary-rgb))"
            strokeWidth="2"
          />
        </g>

        {/* Energy flow paths + destination icons */}
        <g
          filter="url(#energy-glow)"
          style={{ opacity: "var(--energy-line-opacity)" }}
        >
          {ENDPOINTS.map((ep) => (
            <g key={ep.name}>
              {/* Energy flow line */}
              <path
                d={ep.curve}
                stroke="rgb(var(--primary-rgb))"
                strokeWidth="2"
                strokeDasharray="10 14"
                style={{
                  animation: reducedMotion
                    ? "none"
                    : `energy-flow 6s linear ${ep.delay} infinite`,
                  strokeDashoffset: reducedMotion ? 0 : undefined,
                }}
              />

              {/* Pulsing endpoint dot */}
              <circle
                cx={ep.x}
                cy={ep.y}
                r={6}
                fill="rgb(var(--primary-rgb))"
                style={{
                  transformBox: "fill-box" as React.CSSProperties["transformBox"],
                  transformOrigin: "center",
                  animation: reducedMotion
                    ? "none"
                    : `endpoint-pulse 3s ease-in-out ${ep.delay} infinite`,
                }}
              />

              {/* Destination icon */}
              <g transform={`translate(${ep.x}, ${ep.y}) scale(2.2)`}>
                <path
                  d={ep.icon}
                  stroke="rgb(var(--primary-rgb))"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
