import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container container--narrow not-found">
        <h1>Página não encontrada</h1>
        <p>O endereço que você abriu não existe ou foi movido.</p>
        <Link href="/" className="btn btn--primary">
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
