const stars: [number, number, number][] = [
  [18, 14, 1.5],
  [51, 42, 1.2],
  [83, 16, 2],
  [114, 74, 1.2],
  [145, 28, 1.8],
  [193, 50, 1],
  [232, 19, 1.3],
  [270, 86, 1.3],
  [312, 29, 2],
  [350, 62, 1],
  [387, 14, 1.5],
  [418, 89, 1.2],
  [458, 21, 1.2],
  [490, 67, 1.8],
  [528, 28, 1],
  [35, 134, 1.2],
  [75, 191, 1.5],
  [114, 148, 1],
  [157, 210, 1.7],
  [199, 160, 1],
  [239, 237, 1.5],
  [278, 169, 1.3],
  [320, 230, 1],
  [363, 161, 1.5],
  [410, 207, 1.7],
  [449, 145, 1.2],
  [493, 228, 1.5],
  [524, 174, 1],
  [33, 282, 1.2],
  [90, 309, 1],
  [135, 277, 1.8],
  [188, 333, 1.2],
  [231, 291, 1.2],
  [278, 346, 1.5],
  [329, 297, 1],
  [371, 352, 1.2],
  [418, 303, 1],
  [473, 346, 1.8],
  [516, 287, 1.4],
];
export default function StarChart({
  id = "chart",
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <svg
      className={`star-chart ${className}`}
      viewBox="0 0 550 370"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity=".12" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="278" cy="178" rx="245" ry="155" fill={`url(#${id}-glow)`} />
      <circle cx="278" cy="178" r="110" className="orbital orbital-first" />
      <circle cx="278" cy="178" r="164" className="orbital orbital-second" />
      <ellipse
        cx="278"
        cy="178"
        rx="221"
        ry="84"
        transform="rotate(-27 278 178)"
        className="orbital orbital-tilt"
      />
      <path
        d="M83 16 L145 28 L193 50 L270 86 L312 29 L387 14"
        className="star-line"
      />
      <path
        d="M75 191 L157 210 L239 237 L320 230 L410 207 L493 228"
        className="star-line"
      />
      <path
        d="M188 333 L231 291 L329 297 L371 352 L473 346"
        className="star-line"
      />
      {stars.map(([x, y, r], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          className={i % 6 === 0 ? "star star-bright" : "star"}
        />
      ))}
      <circle cx="278" cy="178" r="7" className="orbital-core" />
      <circle cx="278" cy="178" r="24" className="orbital-core-ring" />
      <circle cx="403" cy="124" r="4" className="orbit-marker" />
      <circle cx="175" cy="209" r="3.5" className="orbit-marker" />
      <text x="360" y="265" className="chart-label">
        OBSERVE / QUESTION / DISCOVER
      </text>
      <text x="32" y="358" className="chart-label">
        FIG. 01 — ENDLESS CURIOSITY
      </text>
    </svg>
  );
}
