import CTAButton from "./_components/cta-button";
import SiteHeader from "./_components/site-header";
import SiteFooter from "./_components/site-footer";
import SectionEyebrow from "./_components/section-eyebrow";
import CommandDeckIllustration from "./_components/illustrations/command-deck-illustration";
import BlueprintIllustration from "./_components/illustrations/blueprint-illustration";
import PillarIcon from "./_components/illustrations/pillar-icon";

const proofPoints = [
  {
    value: "3x",
    label: "líneas de impacto",
    text: "Producto, IA y automatización operando como una sola unidad.",
  },
  {
    value: "24/7",
    label: "operación aumentada",
    text: "Agentes y sistemas que siguen ejecutando cuando el equipo duerme.",
  },
  {
    value: "0",
    label: "código decorativo",
    text: "Cada interfaz, endpoint y workflow existe para mover una métrica.",
  },
];

const pillars = [
  {
    icon: "agents",
    eyebrow: "Autonomía aplicada",
    title: "Agentes de IA con criterio operacional",
    text: "Diseñamos agentes especializados que razonan sobre datos, ejecutan tareas y se integran con CRM, ERP, soporte o backoffice sin romper tu ecosistema actual.",
    highlight: "Menos trabajo manual, más decisiones trazables.",
  },
  {
    icon: "product",
    eyebrow: "Producto B2B",
    title: "Plataformas web listas para escalar",
    text: "Construimos portales, dashboards y SaaS con arquitectura limpia, interfaces precisas y performance pensada para flujos críticos de negocio.",
    highlight: "Experiencia premium, base técnica sobria.",
  },
  {
    icon: "systems",
    eyebrow: "Arquitectura",
    title: "Modernización de sistemas legacy",
    text: "Convertimos procesos dispersos en sistemas conectados con APIs, automatizaciones y capas de observabilidad que permiten operar con control.",
    highlight: "Infraestructura adaptable, no parches eternos.",
  },
];

const layers = [
  {
    label: "01",
    title: "Discovery quirúrgico",
    text: "Mapeamos fricción, riesgo y valor antes de proponer tecnología.",
  },
  {
    label: "02",
    title: "Arquitectura de solución",
    text: "Definimos datos, interfaces, agentes y contratos de integración.",
  },
  {
    label: "03",
    title: "Construcción iterativa",
    text: "Entregas cortas, demos reales y decisiones visibles cada semana.",
  },
  {
    label: "04",
    title: "Operación y mejora",
    text: "Monitoreo, documentación y evolución posterior al lanzamiento.",
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
    text: "Convertimos formularios, solicitudes, tickets, documentos y eventos del negocio en datos ordenados desde el primer contacto.",
  },
  {
    label: "Mecanismo 02",
    title: "Decisión asistida",
    text: "Diseñamos reglas, scoring y agentes que priorizan casos, recomiendan acciones y reducen decisiones repetitivas.",
  },
  {
    label: "Mecanismo 03",
    title: "Ejecución automática",
    text: "Conectamos APIs, bases de datos y herramientas internas para que el sistema haga avanzar el trabajo sin persecución manual.",
  },
  {
    label: "Mecanismo 04",
    title: "Aprendizaje medible",
    text: "Cada flujo deja trazas, métricas y evidencia para saber qué mejora, qué se atasca y dónde invertir la siguiente iteración.",
  },
];

export default function Home() {
  return (
    <main className="landing-canvas min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-field" />

      <SiteHeader />

      <section className="relative z-10 px-5 pb-20 pt-16 sm:px-6 sm:pb-28 lg:pb-36 lg:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="reveal max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-line/80 bg-panel/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
              <span className="size-2 rounded-full bg-aqua shadow-[0_0_22px_var(--color-aqua)]" />
              Laboratorio de producto autónomo
            </div>

            <h1 className="mt-8 max-w-5xl text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-ink sm:text-7xl lg:text-[6.8rem]">
              Software que se siente como{" "}
              <span className="font-serif font-normal italic tracking-[-0.045em] text-aqua">
                ventaja injusta
              </span>
              .
            </h1>

            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
              Tenzor Labs transforma operaciones lentas en productos digitales,
              agentes de IA y automatizaciones que reducen fricción, elevan la
              experiencia y preparan a tu empresa para escalar sin improvisar.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CTAButton large>Agendar Discovery Call</CTAButton>
              <a
                className="group inline-flex items-center justify-center rounded-full border border-line/80 bg-panel/50 px-7 py-4 text-base font-semibold text-ink transition duration-300 hover:border-aqua/70 hover:text-aqua"
                href="#arquitectura"
              >
                Ver Casos de Uso
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </a>
            </div>
          </div>

          <div
            className="reveal relative"
            style={{ animationDelay: "140ms" }}
          >
            <CommandDeckIllustration />
          </div>
        </div>

        <div
          className="reveal mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-3"
          style={{ animationDelay: "260ms" }}
        >
          {proofPoints.map((point) => (
            <article className="metric-tile" key={point.label}>
              <span className="font-mono text-sm uppercase tracking-[0.28em] text-dim">
                {point.label}
              </span>
              <strong className="mt-3 block text-4xl font-semibold tracking-[-0.06em] text-ink">
                {point.value}
              </strong>
              <p className="mt-3 text-sm leading-6 text-muted">{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="relative z-10 px-5 py-20 sm:px-6 sm:py-28"
        id="arquitectura"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal lg:sticky lg:top-28 lg:h-fit">
            <SectionEyebrow>Arquitectura de soluciones</SectionEyebrow>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
              Modernidad visible, ingeniería invisible.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Una landing de agencia de software debe demostrar lo mismo que
              promete: precisión, velocidad, criterio estético y dominio
              técnico. Por eso cada bloque muestra una capa del sistema que
              podemos construir.
            </p>
          </div>

          <div className="grid gap-5">
            {pillars.map((pillar, index) => (
              <article
                className="reveal signal-card group"
                key={pillar.title}
                style={{ animationDelay: `${index * 110}ms` }}
              >
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
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28" id="sistema">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <SectionEyebrow>Sistema operativo de crecimiento</SectionEyebrow>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
              No entregamos páginas. Entregamos mecanismos.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              La capa visual, la lógica de negocio y las automatizaciones se
              diseñan juntas para que el producto no solo se vea avanzado: opere
              con inteligencia.
            </p>
          </div>

          <div className="reveal mx-auto mt-14 max-w-4xl">
            <div className="flex flex-wrap justify-center gap-2">
              {capabilities.map((capability) => (
                <span className="capability-chip capability-chip-sm" key={capability}>
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
                    <div
                      className="system-module-card group"
                      key={module.label}
                    >
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

      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28" id="metodo">
        <div className="mx-auto max-w-7xl">
          <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionEyebrow>Método Tenzor</SectionEyebrow>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
                Una línea de montaje para ideas ambiciosas.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-muted">
              Reducimos incertidumbre con procesos visibles, prototipos
              tempranos y decisiones de producto respaldadas por datos.
            </p>
          </div>

          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {layers.map((step, index) => (
              <li
                className="process-card reveal"
                key={step.label}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="process-index">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-28">
        <div className="cta-stage reveal mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-aqua/20 bg-panel/80 p-8 text-center shadow-2xl shadow-aqua/5 backdrop-blur-xl sm:p-14 lg:p-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <SectionEyebrow>El siguiente movimiento</SectionEyebrow>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-6xl">
              Si tu operación ya tiene tensión, construyamos el sistema que la
              libere.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Cuéntanos tu cuello de botella y diseñamos una ruta técnica clara:
              que automatizar, que construir y que medir primero.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CTAButton large>Agendar diagnóstico</CTAButton>
              <CTAButton large variant="secondary">
                Hablar con un Arquitecto
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
