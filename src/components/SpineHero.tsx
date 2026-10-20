const N = 9;
const TOP = 56;
const STEP = 52;
const cy = (i: number) => TOP + i * STEP;
const width = (i: number) => 44 + i * 5;

const slouchX = (i: number) => Math.sin((i / (N - 1)) * Math.PI) * 58;
const slouchRot = (i: number) => -Math.cos((i / (N - 1)) * Math.PI) * 22;

export default function SpineHero() {
  return (
    <svg
      className="spine-svg"
      viewBox="0 0 300 540"
      role="img"
      aria-label="Ilustração de uma coluna vertebral se alinhando"
    >
      <line
        className="plumb"
        x1="150"
        y1="8"
        x2="150"
        y2="532"
        pathLength={1}
        strokeDasharray="1"
      />
      <g className="spine">
        {Array.from({ length: N }, (_, i) => {
          const w = width(i);
          const y = cy(i);
          return (
            <g
              className="vert"
              key={i}
              style={
                {
                  "--i": i,
                  "--cy": `${y}px`,
                  "--sx": slouchX(i).toFixed(2),
                  "--sr": slouchRot(i).toFixed(2),
                } as React.CSSProperties
              }
            >
              <rect
                x={150 - w / 2}
                y={y - 16}
                width={w}
                height={32}
                rx={14}
                className="vert-body"
                style={{ opacity: 0.45 + i * 0.07 }}
              />
              <rect
                x={150 + w / 2 - 6}
                y={y - 5}
                width={18}
                height={10}
                rx={5}
                className="vert-process"
              />
              <ellipse
                cx={150}
                cy={y + 26}
                rx={w / 2 - 10}
                ry={4}
                className="vert-disc"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
