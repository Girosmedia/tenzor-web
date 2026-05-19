import CTAButton from "./_components/cta-button";

const navItems = [
  { label: "Arquitectura", href: "#arquitectura" },
  { label: "Sistema", href: "#sistema" },
  { label: "Método", href: "#metodo" },
];

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

const footerNav = [
  { label: "Arquitectura", href: "#arquitectura" },
  { label: "Sistema", href: "#sistema" },
  { label: "Método", href: "#metodo" },
];

const footerServices = [
  "Producto B2B",
  "Agentes de IA",
  "Automatización",
  "Modernización legacy",
];

export default function Home() {
  return (
    <main className="landing-canvas min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-field" />

      <Header />

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
              <CTAButton large>Diseñar mi sistema</CTAButton>
              <a
                className="group inline-flex items-center justify-center rounded-full border border-line/80 bg-panel/50 px-7 py-4 text-base font-semibold text-ink transition duration-300 hover:border-aqua/70 hover:text-aqua"
                href="#arquitectura"
              >
                Ver arquitectura
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
                Escribir a Tenzor Labs
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-line/80 bg-shell/70 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
        <a className="group flex items-center gap-3" href="#" aria-label="Tenzor Labs">
          <LogoMark />
          <div className="leading-none">
            <p className="text-sm font-semibold tracking-[-0.02em] text-ink">
              Tenzor Labs
            </p>
            <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-dim">
              autonomous software
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition duration-300 hover:bg-panel-soft hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <CTAButton className="hidden sm:inline-flex">Hablemos</CTAButton>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <span className="relative grid size-11 place-items-center rounded-full border border-aqua/30 bg-aqua/10 text-aqua shadow-[0_0_30px_rgba(34,241,209,0.16)]">
      <svg aria-hidden="true" className="size-6" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 8h20L15.5 24M26 8 16.5 24H6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-aqua">
      {children}
    </p>
  );
}

function CommandDeckIllustration() {
  return (
    <div className="command-deck relative mx-auto max-w-[560px]">
      <div className="absolute -inset-8 rounded-full bg-aqua/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-line/80 bg-panel/75 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-6">
        <div className="flex items-center justify-between border-b border-line/70 pb-4">
          <div>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-aqua">
              tenzor operating room
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-ink">
              Señales que se convierten en sistemas
            </h2>
          </div>
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-rust" />
            <span className="size-2 rounded-full bg-amber" />
            <span className="size-2 rounded-full bg-aqua" />
          </div>
        </div>

        <div className="mt-5">
          <svg viewBox="0 0 480 380" fill="none" className="w-full" aria-label="Flujo de señales a sistemas">
            <defs>
              <linearGradient id="signalGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-aqua)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--color-lime)" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="coreGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-aqua)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="var(--color-aqua)" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="resultGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-lime)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--color-amber)" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowStrong">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background grid */}
            <pattern id="miniGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-line)" strokeWidth="0.3" opacity="0.3" />
            </pattern>
            <rect width="480" height="380" fill="url(#miniGrid)" opacity="0.5" />

            {/* SIGNAL 01 - Fricción operativa */}
            <g transform="translate(20, 16)">
              <rect width="200" height="72" rx="14" fill="var(--color-panel-soft)" stroke="var(--color-line)" strokeWidth="1" opacity="0.8" />
              <rect width="200" height="72" rx="14" fill="url(#coreGrad)" opacity="0.4" />
              <text x="16" y="24" fill="var(--color-aqua)" fontFamily="monospace" fontSize="9" fontWeight="800" letterSpacing="2">SEÑAL 01</text>
              <text x="16" y="44" fill="var(--color-ink)" fontSize="14" fontWeight="700" letterSpacing="-0.5">Fricción operativa</text>
              <text x="16" y="60" fill="var(--color-muted)" fontSize="9" fontWeight="600">Horas hundidas en aprobaciones</text>
              {/* Animated pulse dot */}
              <circle cx="180" cy="36" r="4" fill="var(--color-rust)" opacity="0.8">
                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* SIGNAL 02 - Contexto disperso */}
            <g transform="translate(260, 16)">
              <rect width="200" height="72" rx="14" fill="var(--color-panel-soft)" stroke="var(--color-line)" strokeWidth="1" opacity="0.8" />
              <rect width="200" height="72" rx="14" fill="url(#coreGrad)" opacity="0.4" />
              <text x="16" y="24" fill="var(--color-aqua)" fontFamily="monospace" fontSize="9" fontWeight="800" letterSpacing="2">SEÑAL 02</text>
              <text x="16" y="44" fill="var(--color-ink)" fontSize="14" fontWeight="700" letterSpacing="-0.5">Contexto disperso</text>
              <text x="16" y="60" fill="var(--color-muted)" fontSize="9" fontWeight="600">Tickets y reglas en lugares distintos</text>
              <circle cx="180" cy="36" r="4" fill="var(--color-amber)" opacity="0.8">
                <animate attributeName="r" values="3;5;3" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.4s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Flow arrow down */}
            <g transform="translate(230, 96)">
              <circle cx="10" cy="10" r="10" fill="var(--color-aqua)" opacity="0.15" stroke="var(--color-aqua)" strokeWidth="1">
                <animate attributeName="opacity" values="0.15;0.3;0.15" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <text x="10" y="14" textAnchor="middle" fill="var(--color-aqua)" fontSize="12" fontFamily="monospace">↓</text>
            </g>

            {/* TENZOR CORE - Central processing */}
            <g transform="translate(60, 120)">
              <rect width="360" height="100" rx="18" fill="var(--color-panel)" stroke="var(--color-aqua)" strokeWidth="1.5" opacity="0.9" filter="url(#glow)">
                <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
              </rect>
              <rect width="360" height="100" rx="18" fill="url(#coreGrad)" opacity="0.6" />

              {/* Core label */}
              <text x="24" y="28" fill="var(--color-aqua)" fontFamily="monospace" fontSize="10" fontWeight="800" letterSpacing="2.5">TENZOR CORE</text>
              <text x="24" y="50" fill="var(--color-ink)" fontSize="18" fontWeight="700" letterSpacing="-1">Arquitectura que transforma</text>
              <text x="24" y="72" fill="var(--color-muted)" fontSize="11" fontWeight="600">ruido en flujo ejecutable</text>

              {/* Animated processing bars */}
              <g transform="translate(240, 20)">
                <rect width="100" height="6" rx="3" fill="var(--color-line)" opacity="0.5" />
                <rect width="100" height="6" rx="3" fill="url(#signalGrad)" opacity="0.9">
                  <animate attributeName="width" values="30;100;30" dur="2.8s" repeatCount="indefinite" />
                </rect>
              </g>
              <g transform="translate(240, 36)">
                <rect width="80" height="6" rx="3" fill="var(--color-line)" opacity="0.5" />
                <rect width="80" height="6" rx="3" fill="var(--color-aqua)" opacity="0.8">
                  <animate attributeName="width" values="20;80;20" dur="2.2s" repeatCount="indefinite" />
                </rect>
              </g>
              <g transform="translate(240, 52)">
                <rect width="60" height="6" rx="3" fill="var(--color-line)" opacity="0.5" />
                <rect width="60" height="6" rx="3" fill="var(--color-lime)" opacity="0.7">
                  <animate attributeName="width" values="15;60;15" dur="1.8s" repeatCount="indefinite" />
                </rect>
              </g>
              <g transform="translate(240, 68)">
                <rect width="90" height="6" rx="3" fill="var(--color-line)" opacity="0.5" />
                <rect width="90" height="6" rx="3" fill="var(--color-amber)" opacity="0.75">
                  <animate attributeName="width" values="25;90;25" dur="3.2s" repeatCount="indefinite" />
                </rect>
              </g>

              {/* Orbiting dots */}
              <circle cx="180" cy="50" r="3" fill="var(--color-aqua)" filter="url(#glow)">
                <animateTransform attributeName="transform" type="rotate" values="0 180 50;360 180 50" dur="6s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Flow arrow down */}
            <g transform="translate(230, 228)">
              <circle cx="10" cy="10" r="10" fill="var(--color-lime)" opacity="0.15" stroke="var(--color-lime)" strokeWidth="1">
                <animate attributeName="opacity" values="0.15;0.3;0.15" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <text x="10" y="14" textAnchor="middle" fill="var(--color-lime)" fontSize="12" fontFamily="monospace">↓</text>
            </g>

            {/* SISTEMA 01 - Producto de trabajo */}
            <g transform="translate(20, 252)">
              <rect width="200" height="72" rx="14" fill="var(--color-panel-soft)" stroke="var(--color-lime)" strokeWidth="1" opacity="0.8" />
              <rect width="200" height="72" rx="14" fill="url(#resultGrad)" opacity="0.15" />
              <text x="16" y="24" fill="var(--color-lime)" fontFamily="monospace" fontSize="9" fontWeight="800" letterSpacing="2">SISTEMA 01</text>
              <text x="16" y="44" fill="var(--color-ink)" fontSize="14" fontWeight="700" letterSpacing="-0.5">Producto de trabajo</text>
              <text x="16" y="60" fill="var(--color-muted)" fontSize="9" fontWeight="600">Portal, dashboard o SaaS</text>
              <circle cx="180" cy="36" r="4" fill="var(--color-lime)" opacity="0.8">
                <animate attributeName="r" values="3;5;3" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.2s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* SISTEMA 02 - Agente operativo */}
            <g transform="translate(260, 252)">
              <rect width="200" height="72" rx="14" fill="var(--color-panel-soft)" stroke="var(--color-lime)" strokeWidth="1" opacity="0.8" />
              <rect width="200" height="72" rx="14" fill="url(#resultGrad)" opacity="0.15" />
              <text x="16" y="24" fill="var(--color-lime)" fontFamily="monospace" fontSize="9" fontWeight="800" letterSpacing="2">SISTEMA 02</text>
              <text x="16" y="44" fill="var(--color-ink)" fontSize="14" fontWeight="700" letterSpacing="-0.5">Agente operativo</text>
              <text x="16" y="60" fill="var(--color-muted)" fontSize="9" fontWeight="600">IA conectada a reglas y acciones</text>
              <circle cx="180" cy="36" r="4" fill="var(--color-amber)" opacity="0.8">
                <animate attributeName="r" values="3;5;3" dur="2.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.6s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Bottom progress bars */}
            <g transform="translate(20, 340)">
              <rect width="136" height="40" rx="12" fill="var(--color-shell)" stroke="var(--color-line)" strokeWidth="0.8" opacity="0.7" />
              <text x="12" y="16" fill="var(--color-dim)" fontFamily="monospace" fontSize="7" letterSpacing="1.5" opacity="0.7">CUELLO DE BOTELLA</text>
              <rect x="12" y="24" width="112" height="4" rx="2" fill="var(--color-line)" opacity="0.4" />
              <rect x="12" y="24" height="4" rx="2" fill="var(--color-aqua)" opacity="0.8">
                <animate attributeName="width" values="40;112;40" dur="4s" repeatCount="indefinite" />
              </rect>
            </g>
            <g transform="translate(172, 340)">
              <rect width="136" height="40" rx="12" fill="var(--color-shell)" stroke="var(--color-line)" strokeWidth="0.8" opacity="0.7" />
              <text x="12" y="16" fill="var(--color-dim)" fontFamily="monospace" fontSize="7" letterSpacing="1.5" opacity="0.7">PROTOTIPO VALIDADO</text>
              <rect x="12" y="24" width="112" height="4" rx="2" fill="var(--color-line)" opacity="0.4" />
              <rect x="12" y="24" height="4" rx="2" fill="var(--color-lime)" opacity="0.8">
                <animate attributeName="width" values="60;112;60" dur="3.5s" repeatCount="indefinite" />
              </rect>
            </g>
            <g transform="translate(324, 340)">
              <rect width="136" height="40" rx="12" fill="var(--color-shell)" stroke="var(--color-line)" strokeWidth="0.8" opacity="0.7" />
              <text x="12" y="16" fill="var(--color-dim)" fontFamily="monospace" fontSize="7" letterSpacing="1.5" opacity="0.7">SISTEMA EN PRODUCCIÓN</text>
              <rect x="12" y="24" width="112" height="4" rx="2" fill="var(--color-line)" opacity="0.4" />
              <rect x="12" y="24" height="4" rx="2" fill="var(--color-aqua)" opacity="0.9">
                <animate attributeName="width" values="80;112;80" dur="3s" repeatCount="indefinite" />
              </rect>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function PillarIcon({ type }: { type: string }) {
  const common = "var(--color-aqua)";

  return (
    <div className="grid size-16 shrink-0 place-items-center rounded-2xl border border-aqua/20 bg-aqua/10 text-aqua transition duration-300 group-hover:scale-105 group-hover:border-aqua/50">
      <svg aria-hidden="true" className="size-9" fill="none" viewBox="0 0 48 48">
        {type === "agents" && (
          <>
            <circle cx="24" cy="24" r="9" stroke={common} strokeWidth="2" />
            <path d="M24 5v10M24 33v10M5 24h10M33 24h10" stroke={common} strokeLinecap="round" strokeWidth="2" />
            <path d="m11 11 7 7M37 11l-7 7M11 37l7-7M37 37l-7-7" stroke={common} strokeLinecap="round" strokeWidth="2" />
            <circle cx="24" cy="24" r="3" fill={common} />
          </>
        )}
        {type === "product" && (
          <>
            <rect x="8" y="10" width="32" height="26" rx="6" stroke={common} strokeWidth="2" />
            <path d="M8 18h32M17 28h14M17 23h22" stroke={common} strokeLinecap="round" strokeWidth="2" />
            <circle cx="15" cy="14" r="1.5" fill={common} />
            <circle cx="20" cy="14" r="1.5" fill={common} />
          </>
        )}
        {type === "systems" && (
          <>
            <path d="M13 13h22v22H13z" stroke={common} strokeLinejoin="round" strokeWidth="2" />
            <path d="M19 5v8M29 5v8M19 35v8M29 35v8M5 19h8M5 29h8M35 19h8M35 29h8" stroke={common} strokeLinecap="round" strokeWidth="2" />
            <path d="M20 24h8m-4-4v8" stroke={common} strokeLinecap="round" strokeWidth="2" />
          </>
        )}
      </svg>
    </div>
  );
}

function BlueprintIllustration() {
  return (
    <div className="relative flex h-full min-h-[400px] items-center justify-center p-2">
      <div className="blueprint-grid absolute inset-0" />
      <svg viewBox="0 0 480 400" fill="none" className="relative z-10 w-full" aria-label="Mecanismo en producción">
        <defs>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-aqua)" />
            <stop offset="100%" stopColor="var(--color-lime)" />
          </linearGradient>
          <linearGradient id="nodeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-aqua)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--color-aqua)" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="coreNodeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-aqua)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-aqua)" stopOpacity="0.05" />
          </linearGradient>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="railGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Top bar */}
        <g transform="translate(10, 8)">
          <rect width="460" height="44" rx="12" fill="var(--color-panel-soft)" stroke="var(--color-line)" strokeWidth="0.8" opacity="0.8" />
          <text x="16" y="20" fill="var(--color-aqua)" fontFamily="monospace" fontSize="8" fontWeight="800" letterSpacing="2">OPERATING MECHANISM</text>
          <text x="16" y="36" fill="var(--color-ink)" fontSize="13" fontWeight="700" letterSpacing="-0.5">Flujo en producción</text>
          <circle cx="428" cy="22" r="4" fill="var(--color-rust)" opacity="0.7" />
          <circle cx="444" cy="22" r="4" fill="var(--color-amber)" opacity="0.7" />
          <circle cx="460" cy="22" r="4" fill="var(--color-aqua)" opacity="0.7" />
        </g>

        {/* Metrics row */}
        <g transform="translate(10, 62)">
          <rect width="144" height="52" rx="10" fill="var(--color-panel-soft)" stroke="var(--color-line)" strokeWidth="0.6" opacity="0.7" />
          <text x="12" y="20" fill="var(--color-aqua)" fontFamily="monospace" fontSize="7" fontWeight="800" letterSpacing="1.5">LEAD TIME</text>
          <text x="12" y="40" fill="var(--color-ink)" fontSize="20" fontWeight="700" letterSpacing="-1">-42%</text>

          <rect x="158" width="144" height="52" rx="10" fill="var(--color-panel-soft)" stroke="var(--color-line)" strokeWidth="0.6" opacity="0.7" />
          <text x="170" y="20" fill="var(--color-aqua)" fontFamily="monospace" fontSize="7" fontWeight="800" letterSpacing="1.5">TAREAS AUTO</text>
          <text x="170" y="40" fill="var(--color-ink)" fontSize="20" fontWeight="700" letterSpacing="-1">68%</text>

          <rect x="316" width="144" height="52" rx="10" fill="var(--color-panel-soft)" stroke="var(--color-line)" strokeWidth="0.6" opacity="0.7" />
          <text x="328" y="20" fill="var(--color-aqua)" fontFamily="monospace" fontSize="7" fontWeight="800" letterSpacing="1.5">SLA</text>
          <text x="328" y="40" fill="var(--color-ink)" fontSize="20" fontWeight="700" letterSpacing="-1">99.2</text>
        </g>

        {/* Flow diagram - Entrada */}
        <g transform="translate(10, 128)">
          <rect width="130" height="105" rx="14" fill="var(--color-panel-soft)" stroke="var(--color-line)" strokeWidth="1" opacity="0.85" />
          <rect width="130" height="105" rx="14" fill="url(#nodeGrad)" opacity="0.5" />
          <text x="14" y="22" fill="var(--color-aqua)" fontFamily="monospace" fontSize="8" fontWeight="800" letterSpacing="1.5">ENTRADA</text>
          <text x="14" y="42" fill="var(--color-ink)" fontSize="13" fontWeight="700" letterSpacing="-0.5">Solicitud</text>
          <text x="14" y="56" fill="var(--color-ink)" fontSize="13" fontWeight="700" letterSpacing="-0.5">cliente</text>
          <text x="14" y="76" fill="var(--color-muted)" fontSize="9" fontWeight="600">Formulario, correo,</text>
          <text x="14" y="90" fill="var(--color-muted)" fontSize="9" fontWeight="600">ticket o evento.</text>
          <circle cx="110" cy="30" r="12" fill="var(--color-aqua)" opacity="0.1">
            <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
          </circle>
          <path d="M104 30 L110 24 L116 30 L110 36 Z" fill="var(--color-aqua)" opacity="0.6" />
        </g>

        {/* Rail 1 */}
        <g transform="translate(148, 175)">
          <rect width="36" height="3" rx="1.5" fill="var(--color-line)" opacity="0.4" />
          <rect height="3" rx="1.5" fill="url(#flowGrad)" filter="url(#railGlow)">
            <animate attributeName="width" values="8;36;8" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
          </rect>
          <circle r="4" fill="var(--color-aqua)" filter="url(#nodeGlow)">
            <animate attributeName="cx" values="0;36;0" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Flow diagram - Motor (Core) */}
        <g transform="translate(192, 128)">
          <rect width="130" height="105" rx="14" fill="var(--color-panel)" stroke="var(--color-aqua)" strokeWidth="1.5" opacity="0.9" filter="url(#nodeGlow)">
            <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
          </rect>
          <rect width="130" height="105" rx="14" fill="url(#coreNodeGrad)" opacity="0.6" />
          <text x="14" y="22" fill="var(--color-aqua)" fontFamily="monospace" fontSize="8" fontWeight="800" letterSpacing="1.5">MOTOR</text>
          <text x="14" y="42" fill="var(--color-ink)" fontSize="13" fontWeight="700" letterSpacing="-0.5">Reglas + IA</text>
          <text x="14" y="62" fill="var(--color-muted)" fontSize="9" fontWeight="600">Clasifica, prioriza</text>
          <text x="14" y="76" fill="var(--color-muted)" fontSize="9" fontWeight="600">y decide el paso.</text>
          <circle cx="110" cy="30" r="10" fill="none" stroke="var(--color-aqua)" strokeWidth="1.5" opacity="0.6">
            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="110" cy="30" r="4" fill="var(--color-aqua)" opacity="0.8" />
        </g>

        {/* Rail 2 */}
        <g transform="translate(330, 175)">
          <rect width="36" height="3" rx="1.5" fill="var(--color-line)" opacity="0.4" />
          <rect height="3" rx="1.5" fill="url(#flowGrad)" filter="url(#railGlow)">
            <animate attributeName="width" values="8;36;8" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          </rect>
          <circle r="4" fill="var(--color-lime)" filter="url(#nodeGlow)">
            <animate attributeName="cx" values="0;36;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>
        </g>

        {/* Flow diagram - Salida */}
        <g transform="translate(374, 128)">
          <rect width="100" height="105" rx="14" fill="var(--color-panel-soft)" stroke="var(--color-lime)" strokeWidth="1" opacity="0.85" />
          <rect width="100" height="105" rx="14" fill="url(#nodeGrad)" opacity="0.3" />
          <text x="14" y="22" fill="var(--color-lime)" fontFamily="monospace" fontSize="8" fontWeight="800" letterSpacing="1.5">SALIDA</text>
          <text x="14" y="42" fill="var(--color-ink)" fontSize="13" fontWeight="700" letterSpacing="-0.5">Acción</text>
          <text x="14" y="56" fill="var(--color-ink)" fontSize="13" fontWeight="700" letterSpacing="-0.5">ejecutada</text>
          <text x="14" y="76" fill="var(--color-muted)" fontSize="9" fontWeight="600">Respuesta, update,</text>
          <text x="14" y="90" fill="var(--color-muted)" fontSize="9" fontWeight="600">alerta o tarea.</text>
          <circle cx="80" cy="30" r="12" fill="var(--color-lime)" opacity="0.1">
            <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <path d="M76 30 L80 26 L84 30 L80 34 Z" fill="var(--color-lime)" opacity="0.6" />
        </g>

        {/* Log panel */}
        <g transform="translate(10, 248)">
          <rect width="460" height="130" rx="14" fill="var(--color-shell)" stroke="var(--color-line)" strokeWidth="0.8" opacity="0.8" />

          <line x1="0" y1="28" x2="460" y2="28" stroke="var(--color-line)" strokeWidth="0.6" opacity="0.5" />
          <circle cx="16" cy="14" r="3" fill="var(--color-dim)" opacity="0.5" />
          <text x="28" y="18" fill="var(--color-dim)" fontFamily="monospace" fontSize="7" letterSpacing="1">EVENT LOG</text>

          <g transform="translate(14, 42)">
            <rect width="432" height="24" rx="6" fill="var(--color-panel-soft)" opacity="0.5" />
            <text x="10" y="16" fill="var(--color-aqua)" fontFamily="monospace" fontSize="9" fontWeight="700">09:42</text>
            <text x="56" y="16" fill="var(--color-muted)" fontSize="9" fontWeight="600">Agente validó prioridad alta y creó seguimiento.</text>
            <circle cx="420" cy="12" r="3" fill="var(--color-lime)" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </g>

          <g transform="translate(14, 72)">
            <rect width="432" height="24" rx="6" fill="var(--color-panel-soft)" opacity="0.5" />
            <text x="10" y="16" fill="var(--color-aqua)" fontFamily="monospace" fontSize="9" fontWeight="700">09:43</text>
            <text x="56" y="16" fill="var(--color-muted)" fontSize="9" fontWeight="600">Portal actualizó estado visible para el cliente.</text>
            <circle cx="420" cy="12" r="3" fill="var(--color-amber)" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </g>

          <g transform="translate(14, 102)">
            <rect width="432" height="24" rx="6" fill="var(--color-panel-soft)" opacity="0.5" />
            <text x="10" y="16" fill="var(--color-aqua)" fontFamily="monospace" fontSize="9" fontWeight="700">09:44</text>
            <text x="56" y="16" fill="var(--color-muted)" fontSize="9" fontWeight="600">Métrica registrada para aprendizaje del flujo.</text>
            <circle cx="420" cy="12" r="3" fill="var(--color-aqua)" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.1s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-shell relative z-10 px-5 pb-8 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-line/80 bg-panel/70 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr] lg:p-12">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark />
              <div>
                <p className="text-lg font-semibold tracking-[-0.03em] text-ink">
                  Tenzor Labs
                </p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-dim">
                  software · IA · automatización
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-base leading-7 text-muted">
              Diseñamos sistemas digitales para empresas que necesitan operar
              más rápido, con menos fricción y una experiencia que se sienta
              inevitablemente moderna.
            </p>
          </div>

          <div>
            <h3 className="footer-title">Navegación</h3>
            <div className="mt-4 grid gap-3">
              {footerNav.map((item) => (
                <a className="footer-link" href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-title">Especialidades</h3>
            <div className="mt-4 grid gap-3">
              {footerServices.map((service) => (
                <span className="footer-link" key={service}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-aqua">
              Discovery directo
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink">
              Convirtamos tu operación en producto.
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Santiago, Chile. Trabajamos con equipos B2B que necesitan mover
              una métrica concreta.
            </p>
            <div className="mt-6">
              <CTAButton>hola@tenzorlabs.cl</CTAButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line/70 px-8 py-5 text-sm text-dim sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p>Tenzor Labs © 2026 | Santiago, Chile.</p>
          <p className="font-mono uppercase tracking-[0.22em]">
            Build the operating edge
          </p>
        </div>
      </div>
    </footer>
  );
}
