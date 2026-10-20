import Reveal from "@/components/Reveal";
import { getReviews } from "@/lib/reviews";
import { AVATAR_COUNT, type Review } from "@/data/reviews";

function avatarFor(name: string) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return `/images/avatars/avatar-${(h % AVATAR_COUNT) + 1}.svg`;
}

function Stars({ value }: { value: number }) {
  return (
    <span className="stars" role="img" aria-label={`${value} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          viewBox="0 0 20 20"
          width="18"
          height="18"
          className={n <= Math.round(value) ? "star is-on" : "star"}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
        </svg>
      ))}
    </span>
  );
}

function Card({ r }: { r: Review }) {
  return (
    <figure className="review">
      <figcaption className="review__who">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={r.photo || avatarFor(r.author)}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <span>
          <strong>{r.author}</strong>
          {r.when && <small>{r.when}</small>}
        </span>
      </figcaption>
      <Stars value={r.rating} />
      <blockquote>{r.text}</blockquote>
    </figure>
  );
}

export default async function Reviews() {
  const { reviews, rating, total, placeId } = await getReviews();
  if (!reviews.length) return null;

  const base = "https://search.google.com/local";
  const seeAll = placeId ? `${base}/reviews?placeid=${placeId}` : null;
  const write = placeId ? `${base}/writereview?placeid=${placeId}` : null;

  return (
    <section className="section section--mist" id="avaliacoes">
      <div className="container">
        <Reveal className="section__head">
          <h2>O que dizem nossos pacientes</h2>
          {rating ? (
            <p className="reviews__sum">
              <strong>{rating.toFixed(1).replace(".", ",")}</strong>
              <Stars value={rating} />
              <span>
                {total ? `${total} avaliações` : "avaliações"} no Google
              </span>
            </p>
          ) : (
            <p>Avaliações de quem já passou pela Fisiohaus, direto do Google.</p>
          )}
        </Reveal>
        <Reveal className="reviews" stagger>
          {reviews.map((r, i) => (
            <Card key={`${r.author}-${i}`} r={r} />
          ))}
        </Reveal>
        {(seeAll || write) && (
          <div className="reviews__actions">
            {seeAll && (
              <a
                className="btn btn--ghost"
                href={seeAll}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver todas no Google
              </a>
            )}
            {write && (
              <a
                className="btn btn--primary"
                href={write}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deixar avaliação
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
