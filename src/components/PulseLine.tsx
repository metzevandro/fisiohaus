const D =
  "M0 100 H64 L76 86 L88 100 H112 L122 114 L138 18 L154 170 L166 100 H196 L210 88 L224 100 H300";

export default function PulseLine() {
  return (
    <div className="motion-art" data-play>
      <svg
        viewBox="0 0 300 200"
        role="img"
        aria-label="Linha de batimento cardíaco em movimento"
      >
        <path className="pulse-base" d={D} pathLength={100} />
        <path className="pulse-live" d={D} pathLength={100} />
      </svg>
    </div>
  );
}
