import type { Metadata } from "next";
import SiteHeader from "../_components/site-header";
import SiteFooter from "../_components/site-footer";
import SectionEyebrow from "../_components/section-eyebrow";
import CTAButton from "../_components/cta-button";
import CommandDeckIllustration from "../_components/illustrations/command-deck-illustration";
import BlueprintIllustration from "../_components/illustrations/blueprint-illustration";
import PillarIcon from "../_components/illustrations/pillar-icon";

export const metadata: Metadata = {
  title: "Capacidades técnicas | Tenzor Labs",
  description:
    "Arquitectura de producto, agentes de IA y automatización para equipos que necesitan más que un sitio web: plataformas B2B y modernización de sistemas.",
};

const pillars = [
  {
    icon: "agents",
    eyebrow: "Autonomía aplicada",
    title: "Agentes de IA con criterio operacional",
    text: "Diseño agentes especializados que razonan sobre datos, ejecutan tareas y se integran con CRM, ERP, soporte o backoffice sin romper tu ecosistema actual.",
    highlight: "Menos trabajo manual, más decisiones trazables.",
  },
  {
    icon: "product",
    eyebrow: "Producto B2B",
    title: "Plataformas web listas para escalar",
    text: "Construyo portales, dashboards y SaaS con arquitectura limpia, interfaces precisas y performance pensada para flujos críticos de negocio.",
    highlight: "Experiencia premium, base técnica sobria.",
  },
  {
    icon: "systems",
    eyebrow: "Arquitectura",
    title: "Modernización de sistemas legacy",
    text: "Convierto procesos dispersos en sistemas conectados con APIs, automatizaciones y capas de observabilidad que permiten operar con control.",
    highlight: "Infraestructura adaptable, no parches eternos.",
  },
];

const capabilities = [
  "Agentes multi-step",
  "SaaS B2B",
  "Dashboards ejecutivos",
  "Integraciones API",
  "Automatización backoffice",
  "Portales de clientes",
  "Observabilidad",
  "Modernización legacy",
];

const systemModules = [
  {
    label: "Mecanismo 01",
    title: "Captura operativa",
    text: "Convierto formularios, solicitudes, tickets, documentos y eventos del negocio en datos ordenados desde el primer contacto.",
  },
  {
    label: "Mecanismo 02",
    title: "Decisión asistida",
    text: "Diseño reglas, scoring y agentes que priorizan casos, recomiendan acciones y reducen decisiones repetitivas.",
  },
  {
    label: "Mecanismo 03",
    title: "Ejecución automática",
    text: "Conecto APIs, bases de datos y herramientas internas para que el sistema haga avanzar el trabajo sin persecución manual.",
  },
  {
    label: "Mecanismo 04",
    title: "Aprendizaje medible",
    text: "Cada flujo deja trazas y evidencia para saber qué mejora, qué se atasca y dónde invertir la siguiente iteración.",
  },
];

export default function Capacidades() {
  return (
    <main className="landing-canvas min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-field" />

      <SiteHeader />

      <section className="relative z-10 px-5 pb-16 pt-16 sm:px-6 sm:pb-24 lg:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="reveal max-w-3xl">
            <SectionEyebrow>Capacidades técnicas</SectionEyebrow>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
              Para equipos que necesitan más que un sitio web.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Esta página reúne la arquitectura, los agentes de IA y la
              automatización que construyo cuando el proyecto lo requiere:
              plataformas B2B, portales y modernización de sistemas legacy.
            </p>
          </div>

          <div className="reveal relative">
            <CommandDeckIllustration />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-5">
          {pillars.map((pillar) => (
            <article className="reveal signal-card group" key={pillar.title}>
              <div className="flex flex-col gap-6 sm:flex-row">
                <PillarIcon type={pillar.icon} />
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-aqua">
                    {pillar.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted">
                    {pillar.text}
                  </p>
                  <p className="mt-5 inline-flex rounded-full border border-amber/30 bg-amber/10 px-4 py-2 text-sm font-semibold text-amber">
                    {pillar.highlight}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <SectionEyebrow>Sistema operativo de crecimiento</SectionEyebrow>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
              No entrego páginas. Entrego mecanismos.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              La capa visual, la lógica de negocio y las automatizaciones se
              diseñan juntas para que el producto no solo se vea avanzado:
              opere con inteligencia.
            </p>
          </div>

          <div className="reveal mx-auto mt-14 max-w-4xl">
            <div className="flex flex-wrap justify-center gap-2">
              {capabilities.map((capability) => (
                <span
                  className="capability-chip capability-chip-sm"
                  key={capability}
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>

          <div className="blueprint-panel reveal mt-6 overflow-hidden rounded-[2rem] border border-line/80 bg-panel/70 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="space-y-4">
                  {systemModules.map((module, index) => (
                    <div className="system-module-card group" key={module.label}>
                      <div className="flex items-start gap-4">
                        <span className="system-module-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.24em] text-aqua">
                            {module.label}
                          </p>
                          <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-ink">
                            {module.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-muted">
                            {module.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[440px] overflow-hidden border-t border-line/80 bg-shell-soft/70 p-4 sm:p-8 lg:border-l lg:border-t-0">
                <BlueprintIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
        <div className="cta-stage reveal mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-aqua/20 bg-panel/80 p-8 text-center shadow-2xl shadow-aqua/5 backdrop-blur-xl sm:p-14">
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <SectionEyebrow>Hablemos de tu proyecto</SectionEyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-[-0.05em] text-ink sm:text-5xl">
              Si tu operación necesita esta arquitectura, conversemos.
            </h2>
            <div className="mt-10">
              <CTAButton large>Agenda un diagnóstico gratuito</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
