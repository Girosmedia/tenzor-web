import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAILS } from "@/lib/site-config";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: boolean;
  company?: string; // honeypot: solo un bot rellena este campo oculto
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();
  const phone = payload.phone?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Nombre, correo y mensaje son obligatorios." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "El correo no es válido." },
      { status: 400 },
    );
  }

  if (payload.consent !== true) {
    return NextResponse.json(
      {
        error:
          "Debes aceptar la Política de Privacidad para enviar el formulario.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error: `El formulario todavía no está conectado. Escríbenos directo a ${CONTACT_EMAILS.general}.`,
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const timestamp = new Date().toISOString();

  const { error: sendError } = await resend.emails
    .send({
      from: `Tenzor Labs <${CONTACT_EMAILS.general}>`,
      to: CONTACT_EMAILS.general,
      replyTo: email,
      subject: `Nuevo contacto de ${name}`,
      text: [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        phone ? `Teléfono: ${phone}` : null,
        "",
        "Mensaje:",
        message,
        "",
        "---",
        "Consentimiento de Política de Privacidad: aceptado",
        `Fecha/hora: ${timestamp}`,
      ]
        .filter(Boolean)
        .join("\n"),
    })
    // El SDK de Resend no siempre lanza excepción: en varios casos de
    // rechazo (ej. remitente no autorizado) devuelve { error } en vez de
    // hacer throw. Por eso se revisa explícitamente más abajo, además
    // de capturar fallas de red aquí.
    .catch((error) => ({ data: null, error }));

  if (sendError) {
    console.error("Error enviando correo de contacto", sendError);
    return NextResponse.json(
      {
        error:
          "No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos directo.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
