import { NextResponse } from "next/server";
import { site } from "@/data/site";

export const runtime = "nodejs";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // Honeypot: robôs preenchem; finge sucesso e descarta.
  if (clean(body.company, 100)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const message = clean(body.message, 3000);

  if (
    name.length < 2 ||
    message.length < 10 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? site.email;
  const from =
    process.env.CONTACT_FROM ?? `${site.name} <onboarding@resend.dev>`;

  if (!apiKey) {
    console.error("RESEND_API_KEY não configurada");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Contato pelo site: ${name}`,
        text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone || "-"}\n\n${message}`,
        html: `<p><b>Nome:</b> ${esc(name)}<br><b>E-mail:</b> ${esc(email)}<br><b>Telefone:</b> ${esc(phone || "-")}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });
    if (!res.ok) {
      console.error("Resend:", res.status, await res.text());
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Resend falhou", e);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
