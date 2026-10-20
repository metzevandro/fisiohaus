export default function BreathCircle() {
  return (
    <div className="motion-art" data-play>
      <svg
        viewBox="0 0 200 200"
        role="img"
        aria-label="Círculo que expande e contrai como a respiração"
      >
        <circle className="b-ring b-ring--3" cx="100" cy="100" r="78" />
        <circle className="b-ring b-ring--2" cx="100" cy="100" r="58" />
        <circle className="b-ring b-ring--1" cx="100" cy="100" r="38" />
      </svg>
      <p className="breath-label" aria-hidden="true">
        <span className="rest">Respire</span>
        <span className="in">Inspire</span>
        <span className="out">Expire</span>
      </p>
    </div>
  );
}
