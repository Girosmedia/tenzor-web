"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "rounded-xl border border-line/80 bg-panel/60 px-4 py-3 text-sm text-ink placeholder:text-dim focus:border-aqua/60 focus:outline-none";

export default function ContactForm() {
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message"),
      consent,
      company: data.get("company"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "No pudimos enviar tu mensaje.");
      }

      setStatus("success");
      form.reset();
      setConsent(false);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No pudimos enviar tu mensaje.",
      );
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-2xl border border-aqua/30 bg-aqua/10 p-5 text-center text-base text-ink">
        Gracias — recibí tu mensaje y te voy a responder a la brevedad.
      </p>
    );
  }

  return (
    <form className="grid gap-4 text-left" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          name="name"
          type="text"
          placeholder="Nombre"
          className={inputClass}
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Correo"
          className={inputClass}
        />
      </div>
      <input
        name="phone"
        type="tel"
        placeholder="Teléfono (opcional)"
        className={inputClass}
      />
      <textarea
        required
        name="message"
        rows={4}
        placeholder="Cuéntame en qué estás pensando"
        className={inputClass}
      />

      <input
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <label className="flex items-start gap-3 text-sm leading-6 text-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 size-4 shrink-0 accent-aqua"
        />
        <span>
          He leído y acepto la{" "}
          <a
            href="/privacidad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aqua underline underline-offset-4"
          >
            Política de Privacidad
          </a>
          . Entiendo que mis datos (nombre, correo, teléfono y mensaje) se
          usarán únicamente para responder mi consulta.
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-rust">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={!consent || status === "loading"}
        className="cta-primary inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold tracking-[-0.01em] transition duration-300 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
