import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteHeader from "../_components/site-header";
import SiteFooter from "../_components/site-footer";
import SectionEyebrow from "../_components/section-eyebrow";
import { CONTACT_EMAILS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de privacidad | Tenzor Labs",
  description:
    "Cómo Tenzor Labs recolecta, usa y protege tus datos personales, en línea con la Ley 21.719.",
};

// Secciones marcadas "activo" describen lo que el Sitio hace hoy. Las
// marcadas "preparacion" están redactadas y listas, pero no representan
// una función vigente todavía — declarar lo contrario sería el mismo
// error que las métricas inventadas del sitio, en sentido inverso.
function StatusBadge({ status }: { status: "activo" | "preparacion" }) {
  const isActive = status === "activo";
  return (
    <span
      className={
        isActive
          ? "inline-flex items-center rounded-full border border-aqua/30 bg-aqua/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-aqua"
          : "inline-flex items-center rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber"
      }
    >
      {isActive ? "Activo" : "En preparación"}
    </span>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink">
      {children}
    </h2>
  );
}

function SubHeading({
  children,
  status,
}: {
  children: ReactNode;
  status?: "activo" | "preparacion";
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
        {children}
      </h3>
      {status && <StatusBadge status={status} />}
    </div>
  );
}

const recipients = [
  {
    provider: "Resend",
    function: "Envío del formulario de contacto",
    data: "Nombre, correo, teléfono, mensaje",
    status: "activo" as const,
  },
  {
    provider: "Hetzner",
    function: "Alojamiento del Sitio y de Umami",
    data: "Datos técnicos de conexión",
    status: "activo" as const,
  },
  {
    provider: "LiveHost / Haulmer (cPanel)",
    function:
      "Gestión de DNS y correo empresarial — aquí se reciben los mensajes del formulario de contacto",
    data: "Contenido de los correos recibidos (nombre, correo, teléfono, mensaje)",
    status: "activo" as const,
  },
  {
    provider: "Umami (autohospedado)",
    function: "Analítica del Sitio",
    data: "Datos de navegación agregados y anónimos",
    status: "activo" as const,
  },
  {
    provider: "Meta Platforms Inc. (WhatsApp Business Platform)",
    function: "Gestión de conversaciones por WhatsApp",
    data: "Contenido de conversaciones",
    status: "preparacion" as const,
  },
];

export default function Privacidad() {
  return (
    <main className="landing-canvas min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-field" />
      <SiteHeader />

      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-5xl">
            Política de privacidad
          </h1>
          <p className="mt-4 text-sm text-dim">
            Última actualización: 31-07-2026
          </p>

          <div className="reveal mt-8 rounded-2xl border border-dashed border-line/80 p-4 text-sm leading-6 text-dim">
            Borrador estructural conforme a la Ley 21.719 sobre Protección de
            Datos Personales. No constituye asesoría legal — debe ser
            revisado por un abogado antes de considerarse vigente.
          </div>

          <div className="reveal mt-10 space-y-10 text-base leading-7 text-muted">
            <section>
              <Heading>1. Responsable del tratamiento</Heading>
              <p className="mt-3">
                <strong className="text-ink">Tenzor Labs SpA</strong> (en
                adelante, &ldquo;Tenzor Labs&rdquo;), RUT 78.428.179-5, con
                domicilio en General Sandino 3735, Conchalí, Santiago de
                Chile, es responsable del tratamiento de los datos
                personales recogidos a través de tenzorlabs.cl
                (&ldquo;el Sitio&rdquo;).
              </p>
              <p className="mt-3">
                Contacto para materias de privacidad: {CONTACT_EMAILS.general}
              </p>
            </section>

            <section>
              <Heading>2. Qué datos recolectamos</Heading>

              <div className="mt-5 space-y-6">
                <div>
                  <SubHeading status="activo">
                    2.1 Formulario de contacto
                  </SubHeading>
                  <p className="mt-2">
                    Al completar el formulario recolectamos: nombre, correo
                    electrónico, teléfono/WhatsApp (si lo proporciona) y el
                    contenido de su mensaje. Se envían vía{" "}
                    <strong className="text-ink">Resend</strong> directo a
                    nuestra casilla de correo. No se almacenan en base de
                    datos propia en esta etapa.
                  </p>
                </div>

                <div>
                  <SubHeading status="activo">
                    2.2 Botón de WhatsApp
                  </SubHeading>
                  <p className="mt-2">
                    El Sitio incluye un enlace directo a WhatsApp
                    (wa.me). Al usarlo, la conversación ocurre directamente
                    entre usted y Tenzor Labs dentro de la aplicación de
                    WhatsApp.{" "}
                    <strong className="text-ink">
                      En esta modalidad, Tenzor Labs no recibe, almacena ni
                      procesa esos datos en sus propios sistemas o
                      servidores
                    </strong>{" "}
                    — la app de WhatsApp en su teléfono es quien gestiona la
                    conversación, bajo los términos de WhatsApp/Meta.
                  </p>
                </div>

                <div>
                  <SubHeading status="activo">
                    2.3 Suscripción al blog
                  </SubHeading>
                  <p className="mt-2">
                    Si usted se suscribe para recibir novedades del blog,
                    recolectamos su correo electrónico, exclusivamente para
                    el envío de ese contenido. Esta es una finalidad
                    distinta a la del formulario de contacto y requiere su
                    consentimiento específico (ver sección 8.1).
                  </p>
                </div>

                <div>
                  <SubHeading status="activo">
                    2.4 Analítica del Sitio (Umami)
                  </SubHeading>
                  <p className="mt-2">
                    Usamos Umami, un software de analítica autohospedado en
                    nuestra propia infraestructura, para conocer visitas y
                    páginas más vistas. Umami no utiliza cookies para
                    identificar personas y no comparte datos con terceros —
                    toda la información permanece en nuestro servidor. No es
                    necesario su consentimiento previo para esta medición
                    básica y anónima.
                  </p>
                </div>

                <div>
                  <SubHeading status="preparacion">
                    2.5 Conversación por WhatsApp Business (webhook)
                  </SubHeading>
                  <p className="mt-2 text-sm italic text-dim">
                    Se activa solo cuando la integración vía API de WhatsApp
                    Business esté efectivamente en producción.
                  </p>
                  <p className="mt-2">
                    En una etapa futura, las conversaciones de WhatsApp
                    podrán gestionarse mediante la WhatsApp Business
                    Platform, operada por Meta Platforms Inc. A diferencia
                    del enlace simple (2.2), en esta modalidad Meta actúa
                    como encargado del tratamiento de esas conversaciones, y
                    los datos pueden procesarse fuera de Chile (ver sección
                    6).
                  </p>
                </div>

                <div>
                  <SubHeading status="preparacion">
                    2.6 Backoffice / CRM de gestión de leads
                  </SubHeading>
                  <p className="mt-2 text-sm italic text-dim">
                    Se activa cuando se defina la herramienta: Tendo propio
                    o un proveedor externo tipo CRM.
                  </p>
                  <p className="mt-2">
                    En una etapa posterior, los contactos recibidos por los
                    canales anteriores podrán centralizarse en un sistema de
                    gestión interno. [FALTA: completar esta sección con el
                    detalle del sistema elegido, y evaluar si introduce
                    nuevos encargados de tratamiento o transferencias
                    internacionales.]
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                    2.7 Datos técnicos del servidor
                  </h3>
                  <p className="mt-2">
                    Como todo sitio web, el proveedor de hosting registra
                    automáticamente datos técnicos de conexión (dirección
                    IP, tipo de navegador) con fines de seguridad y
                    funcionamiento del servicio.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <Heading>3. Para qué usamos sus datos (finalidad)</Heading>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Responder su consulta y coordinar una eventual reunión o
                  propuesta (formulario, WhatsApp).
                </li>
                <li>
                  Enviarle contenido del blog, si se suscribió
                  voluntariamente (2.3).
                </li>
                <li>
                  Medir el uso general y anónimo del Sitio para mejorarlo
                  (Umami).
                </li>
                <li>
                  Cumplir obligaciones legales o tributarias derivadas de
                  una eventual relación contractual.
                </li>
              </ul>
              <p className="mt-3">
                No usamos sus datos para fines distintos a los aquí
                declarados, ni los vendemos ni arrendamos a terceros.
              </p>
            </section>

            <section>
              <Heading>4. Base legal del tratamiento</Heading>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Consentimiento, otorgado al completar el formulario,
                  escribir por WhatsApp, o suscribirse al blog.
                </li>
                <li>
                  Ejecución de una relación contractual o precontractual, si
                  la consulta deriva en una propuesta o contrato.
                </li>
                <li>
                  Interés legítimo, para la analítica anónima y agregada
                  del Sitio (Umami), que no permite identificar personas.
                </li>
              </ul>
            </section>

            <section>
              <Heading>5. Destinatarios y encargados del tratamiento</Heading>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-line/80">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-line/80 bg-panel-soft/60 text-left">
                      <th className="p-4 font-semibold text-ink">
                        Proveedor
                      </th>
                      <th className="p-4 font-semibold text-ink">Función</th>
                      <th className="p-4 font-semibold text-ink">
                        Datos que procesa
                      </th>
                      <th className="p-4 font-semibold text-ink">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recipients.map((row) => (
                      <tr
                        className="border-b border-line/50 last:border-0"
                        key={row.provider}
                      >
                        <td className="p-4 align-top">{row.provider}</td>
                        <td className="p-4 align-top">{row.function}</td>
                        <td className="p-4 align-top">{row.data}</td>
                        <td className="p-4 align-top">
                          <StatusBadge status={row.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                No compartimos sus datos con ningún otro tercero salvo
                obligación legal.
              </p>
            </section>

            <section>
              <Heading>6. Transferencia internacional de datos</Heading>
              <p className="mt-3">
                <strong className="text-ink">Hoy:</strong> Resend, con sede
                en Estados Unidos y certificación bajo el EU-US Data
                Privacy Framework, procesa los datos del formulario
                mediante subprocesadores ubicados en Estados Unidos
                (incluyendo Amazon Web Services y Google, entre otros
                descritos en resend.com/legal/subprocessors). Al enviar el
                formulario, usted acepta esta transferencia internacional
                de datos a Estados Unidos. Umami, al estar autohospedado,
                no genera transferencia internacional.
              </p>
              <p className="mt-3">
                <strong className="text-ink">A futuro (sección 2.5):</strong>{" "}
                si se activa WhatsApp Business Platform, Meta procesará
                conversaciones con infraestructura en Estados Unidos, lo que
                constituye transferencia internacional. Esta sección deberá
                actualizarse con el detalle de garantías al momento de
                activar esa función.
              </p>
            </section>

            <section>
              <Heading>7. Plazo de conservación</Heading>

              <div className="mt-5 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                    7.1 Prospectos y consultas sin contrato vigente
                  </h3>
                  <p className="mt-2">
                    Si su consulta a través del formulario, WhatsApp o
                    correo no deriva en un contrato de servicios,
                    conservamos sus datos por un máximo de 12 meses desde
                    el último contacto, transcurrido el cual se eliminan
                    de nuestros sistemas.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                    7.2 Clientes con contrato vigente
                  </h3>
                  <p className="mt-2">
                    Si su consulta deriva en un contrato de servicios con
                    Tenzor Labs, sus datos se conservan durante toda la
                    vigencia de la relación contractual, y posteriormente
                    por el plazo que exija la normativa tributaria y
                    contable chilena aplicable a la documentación de
                    respaldo de servicios prestados [FALTA: confirmar
                    plazo exacto con contador — referencia orientativa: 6
                    años, plazo de prescripción extraordinaria del
                    Servicio de Impuestos Internos]. Los correos de
                    suscripción al blog (2.3) se conservan hasta que
                    usted se dé de baja, independiente de lo anterior.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <Heading>8. Cookies y consentimiento</Heading>

              <div className="mt-5 space-y-6">
                <div>
                  <SubHeading status="activo">
                    8.1 Cookies del Sitio
                  </SubHeading>
                  <p className="mt-2">
                    El Sitio no utiliza cookies de analítica ni de
                    publicidad de terceros. Umami no instala cookies para
                    identificar personas. Solo pueden existir cookies
                    estrictamente técnicas necesarias para el funcionamiento
                    básico del Sitio, si las hubiera.
                  </p>
                  <p className="mt-2">
                    Por esta razón, el Sitio no requiere un banner de
                    consentimiento de cookies en esta etapa. Sí requiere dos
                    casillas de consentimiento explícito, independientes
                    entre sí: al enviar el formulario de contacto, y al
                    suscribirse al blog.
                  </p>
                </div>

                <div>
                  <SubHeading status="preparacion">
                    8.2 Publicidad y remarketing (Meta Ads / Google Ads)
                  </SubHeading>
                  <p className="mt-2 text-sm italic text-dim">
                    Se activa únicamente si en el futuro se decide invertir
                    en campañas pagadas con píxeles de remarketing.
                  </p>
                  <p className="mt-2">
                    Si en el futuro se instalan herramientas de publicidad
                    con cookies de terceros, esta sección deberá reemplazar
                    a la 8.1, e incluir: categorías de cookies, banner de
                    consentimiento previo y granular (aceptar todo /
                    rechazar todo / elegir por categoría), y la cláusula de
                    transferencia internacional correspondiente a Meta/
                    Google.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <Heading>9. Sus derechos (Derechos ARCO y portabilidad)</Heading>
              <p className="mt-3">
                Conforme a la Ley 21.719, usted tiene derecho a acceso,
                rectificación, cancelación, oposición y portabilidad de sus
                datos.
              </p>
              <p className="mt-3">
                Para ejercerlos, escríbanos a {CONTACT_EMAILS.general}.
                Responderemos dentro de los plazos que establece la ley. No
                cobramos por el ejercicio de estos derechos, salvo los
                casos que la ley expresamente permite.
              </p>
            </section>

            <section>
              <Heading>10. Menores de edad</Heading>
              <p className="mt-3">
                El Sitio no está dirigido a menores de 18 años. No
                recolectamos intencionalmente sus datos. Si detecta que un
                menor a su cargo nos proporcionó datos, contáctenos para
                eliminarlos.
              </p>
            </section>

            <section>
              <Heading>11. Medidas de seguridad</Heading>
              <p className="mt-3">
                Adoptamos medidas técnicas y organizativas razonables,
                incluyendo: conexión cifrada mediante HTTPS en todo el
                Sitio, acceso restringido a la casilla de correo donde
                llegan los mensajes del formulario, y analítica
                autohospedada (Umami) sin exposición de datos a terceros.
                Ante cualquier incidente de seguridad, notificaremos
                conforme a lo que exige la Ley 21.719.
              </p>
            </section>

            <section>
              <Heading>12. Cambios a esta política</Heading>
              <p className="mt-3">
                Podemos actualizar esta política para reflejar cambios en
                el Sitio o en la normativa vigente. La fecha de
                &ldquo;Última actualización&rdquo; indica la versión
                vigente. Cambios sustanciales a las secciones marcadas
                &ldquo;En preparación&rdquo; se comunicarán antes de entrar
                en vigor.
              </p>
            </section>

            <section>
              <Heading>13. Contacto</Heading>
              <p className="mt-3">
                Tenzor Labs SpA — {CONTACT_EMAILS.general}
              </p>
              <p className="mt-3">
                [FALTA: agregar referencia a la Agencia de Protección de
                Datos Personales cuando esté operativa, como autoridad ante
                la cual el titular puede reclamar.]
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
