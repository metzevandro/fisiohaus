"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm({
  idPrefix = "cf",
}: {
  idPrefix?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form__row">
        <label htmlFor={`${idPrefix}-name`}>Nome</label>
        <input
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
        />
      </div>
      <div className="form__row form__row--2">
        <div>
          <label htmlFor={`${idPrefix}-email`}>E-mail</label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-phone`}>Telefone (opcional)</label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="form__row">
        <label htmlFor={`${idPrefix}-message`}>Mensagem</label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={5}
          required
          minLength={10}
        />
      </div>
      {/* Honeypot anti-spam: deve ficar vazio */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hp"
        aria-hidden="true"
      />

      <button
        className="btn btn--primary"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Enviar mensagem"}
      </button>

      <p className="form__status" role="status" aria-live="polite">
        {status === "ok" && "Mensagem recebida! Nossa equipe retorna em breve."}
        {status === "error" &&
          "Não foi possível enviar agora. Tente novamente ou ligue para a recepção."}
      </p>
    </form>
  );
}
