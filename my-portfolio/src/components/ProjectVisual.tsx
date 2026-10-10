import type { ProjectVisual as VisualType } from "../data/portfolio";

export default function ProjectVisual({ type }: { type: VisualType }) {
  switch (type) {
    case "mobile-api":
      return (
        <div
          className="architecture architecture-mobile"
          aria-label="Conceptual diagram: mobile app, REST API, PostgreSQL"
        >
          <div className="architecture-eyebrow">01 / APPLICATION FLOW</div>
          <div className="architecture-row">
            <div className="arch-device">
              <span className="arch-device-speaker" />
              <span className="arch-symbol">✳︎</span>
              <span className="arch-device-title">MeMantra</span>
              <span className="arch-device-sub">one moment at a time</span>
              <span className="arch-device-button">keep going →</span>
            </div>
            <div className="arch-wire">→</div>
            <div className="arch-layer-stack">
              <span className="arch-layer">Express API</span>
              <span className="arch-arrow">↓︎</span>
              <span className="arch-layer">PostgreSQL</span>
            </div>
          </div>
          <span className="architecture-footnote">
            REACT NATIVE → API → DATABASE
          </span>
        </div>
      );
    case "web-services":
      return (
        <div
          className="architecture architecture-services"
          aria-label="Conceptual diagram: React, Go, MongoDB"
        >
          <div className="architecture-eyebrow">02 / FULL-STACK SYSTEM</div>
          <div className="arch-web">
            <div className="arch-window">
              <span />
              <span />
              <span />
            </div>
            <div className="arch-web-body">
              <span className="arch-web-line wide" />
              <span className="arch-web-line" />
              <span className="arch-web-bars">
                <i />
                <i />
                <i />
              </span>
            </div>
          </div>
          <div className="arch-flow">
            <span>React</span>
            <b>→</b>
            <span>Go</span>
            <b>→</b>
            <span>MongoDB</span>
          </div>
          <span className="architecture-footnote">CLIENT / SERVER / DATA</span>
        </div>
      );
    case "data-graph":
      return (
        <div
          className="architecture architecture-data"
          aria-label="Conceptual graph and relational database illustration"
        >
          <div className="architecture-eyebrow">03 / DATA SYSTEMS</div>
          <svg
            className="data-svg"
            viewBox="0 0 480 195"
            role="img"
            aria-label="Connected data points and relational rows"
          >
            <g
              className="data-edges"
              stroke="currentColor"
              strokeWidth="1.3"
              fill="none"
            >
              <path d="M70 105 L148 48 L230 95 L320 53 L401 105 L318 155 L230 95 L150 157 L70 105 M148 48 L150 157 M320 53 L318 155" />
            </g>
            {[
              [70, 105],
              [148, 48],
              [230, 95],
              [320, 53],
              [401, 105],
              [318, 155],
              [150, 157],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r={i === 2 ? 14 : 10}
                  className="data-node"
                />
                <circle cx={x} cy={y} r="3" className="data-node-core" />
              </g>
            ))}
          </svg>
          <div className="arch-flow">
            <span>External APIs</span>
            <b>→</b>
            <span>Python</span>
            <b>→</b>
            <span>SQL + Graph</span>
          </div>
          <span className="architecture-footnote">
            RELATIONAL & GRAPH ANALYTICS
          </span>
        </div>
      );
    case "ml-study":
      return (
        <div
          className="architecture architecture-ml"
          aria-label="Conceptual neural network evaluation illustration"
        >
          <div className="architecture-eyebrow">04 / MODEL ROBUSTNESS</div>
          <div className="model-grid">
            <div className="model-square normal">
              <span>ORIGINAL</span>
              <div />
            </div>
            <div className="model-square noise">
              <span>NOISE</span>
              <div />
            </div>
            <div className="model-square blur">
              <span>BLUR</span>
              <div />
            </div>
            <div className="model-square brightness">
              <span>BRIGHTNESS</span>
              <div />
            </div>
          </div>
          <div className="arch-flow">
            <span>MLP</span>
            <b>/</b>
            <span>CNN</span>
            <b>/</b>
            <span>ResNet</span>
          </div>
          <span className="architecture-footnote">
            FIVE LEVELS · PERFORMANCE DEGRADATION
          </span>
        </div>
      );
    case "location":
      return (
        <div
          className="architecture architecture-location"
          aria-label="Conceptual mobile mapping illustration"
        >
          <div className="architecture-eyebrow">05 / MOBILE & LOCATION</div>
          <div className="map-mock">
            <span className="map-road first" />
            <span className="map-road second" />
            <span className="map-road third" />
            <span className="map-marker">✳︎</span>
            <span className="map-coordinate">45.50° N / 73.57° W</span>
          </div>
          <div className="arch-flow">
            <span>React Native</span>
            <b>+</b>
            <span>Google Maps API</span>
          </div>
          <span className="architecture-footnote">GEOSPATIAL INTERFACE</span>
        </div>
      );
  }
}
