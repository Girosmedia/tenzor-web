"use client";

import { useState, type FormEvent } from "react";

// TODO(newsletter): falta definir el proveedor de suscripción (Resend
// Audiences u otro) y conectar el envío real. Por ahora la UI es
// completa pero el submit no llama a ningún backend.
export default function NewsletterSubscribe() {
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl border border-line/80 bg-panel/60 p-6 sm:p-8">
      <h3 className="text-lg font-semibold tracking-[-0.03em] text-ink">
        Recibe novedades sobre software y cumplimiento de datos
      </h3>

      {submitted ? (
        <p className="mt-4 text-sm leading-6 text-muted">
          Gracias por tu interés — esta función se activa muy pronto.
        </p>
      ) : (
        <form className="mt-4 grid gap-4" onSubmit={handleSubmit} noValidate>
          <input
            required
            type="email"
            name="email"
            placeholder="Tu correo"
            className="rounded-xl border border-line/80 bg-panel/60 px-4 py-3 text-sm text-ink placeholder:text-dim focus:border-aqua/60 focus:outline-none"
          />

          <label className="flex items-start gap-3 text-sm leading-6 text-muted">
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              className="mt-1 size-4 shrink-0 accent-aqua"
            />
            <span>
              Acepto recibir novedades sobre desarrollo web, automatización
              y cumplimiento de datos por correo. Puedo darme de baja cuando
              quiera.
            </span>
          </label>

          <button
            type="submit"
            disabled={!consent}
            className="cta-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[-0.01em] transition duration-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Suscribirme
          </button>
        </form>
      )}
    </div>
  );
}
