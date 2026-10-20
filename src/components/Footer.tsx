import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Footer() {
  const a = site.address;
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="footer-brand">{site.name}</p>
          <p className="footer-muted">
            Centro de Saúde em Estância Velha desde {site.since}.
          </p>
          <ul className="footer-social">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-h">Fale conosco</h2>
          <ul>
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href}>{p.label}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-h">Onde estamos</h2>
          <address>
            {a.street}
            <br />
            {a.district} · {a.city}/{a.state}
            <br />
            CEP {a.zip}
          </address>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Abrir no mapa
          </a>
        </div>

        <div>
          <h2 className="footer-h">Páginas</h2>
          <ul className="footer-nav">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {site.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
