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

          <div className="blueprint-panel reveal mt-14 overflow-hidden rounded-[2rem] border border-line/80 bg-panel/70 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap gap-3">
                  {capabilities.map((capability) => (
                    <span className="capability-chip" key={capability}>
                      {capability}
                    </span>
                  ))}
                </div>

                <div className="mt-10 space-y-4">
                  {layers.map((layer) => (
                    <div className="layer-row" key={layer.label}>
                      <span>{layer.label}</span>
                      <div>
                        <h3>{layer.title}</h3>
                        <p>{layer.text}</p>
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

      <footer className="relative z-10 border-t border-line/70 px-5 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>Tenzor Labs © 2026 | Santiago, Chile.</p>
          <p className="font-mono uppercase tracking-[0.22em]">
            Software · IA · Automatización
          </p>
        </div>
      </footer>
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
              live system map
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-ink">
              Autonomous Build Room
            </h2>
          </div>
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-rust" />
            <span className="size-2 rounded-full bg-amber" />
            <span className="size-2 rounded-full bg-aqua" />
          </div>
        </div>

        <svg
          aria-hidden="true"
          className="mt-5 h-[330px] w-full sm:h-[390px]"
          fill="none"
          viewBox="0 0 520 420"
        >
          <defs>
            <linearGradient id="deckGlow" x1="82" x2="438" y1="64" y2="356">
              <stop stopColor="var(--color-aqua)" stopOpacity="0.9" />
              <stop offset="0.5" stopColor="var(--color-amber)" stopOpacity="0.65" />
              <stop offset="1" stopColor="var(--color-lime)" stopOpacity="0.85" />
            </linearGradient>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop stopColor="var(--color-aqua)" stopOpacity="0.8" />
              <stop offset="1" stopColor="var(--color-aqua)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect
            width="430"
            height="300"
            x="45"
            y="60"
            rx="34"
            stroke="var(--color-line)"
            strokeOpacity="0.9"
          />
          <path
            className="signal-path"
            d="M96 300C130 218 178 258 214 178c33-74 86-54 120-30 44 32 57 105 100 72"
            stroke="url(#deckGlow)"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            className="signal-path signal-path-delayed"
            d="M92 126c54 36 79 18 124 85 35 52 89 63 133 24 42-37 56-8 82 27"
            stroke="var(--color-aqua)"
            strokeLinecap="round"
            strokeOpacity="0.42"
            strokeWidth="1.5"
          />

          <g className="orbit-slow">
            <ellipse
              cx="260"
              cy="210"
              rx="148"
              ry="78"
              stroke="var(--color-aqua)"
              strokeOpacity="0.28"
            />
            <circle cx="408" cy="210" r="5" fill="var(--color-aqua)" />
          </g>
          <g className="orbit-reverse">
            <ellipse
              cx="260"
              cy="210"
              rx="78"
              ry="148"
              stroke="var(--color-amber)"
              strokeOpacity="0.22"
            />
            <circle cx="260" cy="62" r="4" fill="var(--color-amber)" />
          </g>

          <circle cx="260" cy="210" r="54" fill="url(#nodeGlow)" opacity="0.9" />
          <circle
            className="pulse-node"
            cx="260"
            cy="210"
            r="38"
            fill="var(--color-shell)"
            stroke="url(#deckGlow)"
            strokeWidth="2"
          />
          <path
            d="M244 204h32m-26-16 26 16-26 16"
            stroke="var(--color-ink)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />

          {[
            [116, 126, "CRM"],
            [404, 132, "AI"],
            [116, 292, "API"],
            [398, 304, "OPS"],
          ].map(([cx, cy, label]) => (
            <g className="node-card" key={label}>
              <circle cx={cx} cy={cy} r="30" fill="var(--color-panel-soft)" />
              <circle cx={cx} cy={cy} r="29" stroke="var(--color-line)" />
              <text
                fill="var(--color-ink)"
                fontFamily="var(--font-jetbrains-mono)"
                fontSize="12"
                textAnchor="middle"
                x={cx}
                y={Number(cy) + 4}
              >
                {label}
              </text>
            </g>
          ))}
        </svg>

        <div className="grid gap-3 sm:grid-cols-3">
          {["scope locked", "agent online", "deploy ready"].map((label) => (
            <div className="rounded-2xl border border-line/70 bg-shell/60 p-3" key={label}>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-dim">
                {label}
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line/60">
                <span className="progress-sweep block h-full rounded-full bg-aqua" />
              </div>
            </div>
          ))}
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
    <div className="relative flex h-full min-h-[400px] items-center justify-center">
      <div className="blueprint-grid absolute inset-0" />
      <svg
        aria-hidden="true"
        className="relative z-10 h-full max-h-[420px] w-full"
        fill="none"
        viewBox="0 0 560 460"
      >
        <defs>
          <linearGradient id="blueprintGradient" x1="96" x2="456" y1="88" y2="370">
            <stop stopColor="var(--color-aqua)" />
            <stop offset="0.55" stopColor="var(--color-amber)" />
            <stop offset="1" stopColor="var(--color-lime)" />
          </linearGradient>
        </defs>
        <path
          className="signal-path"
          d="M76 232h82c38 0 44-82 90-82h64c46 0 52 82 90 82h82"
          stroke="url(#blueprintGradient)"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          className="signal-path signal-path-delayed"
          d="M76 294h104c44 0 52 48 96 48h32c44 0 52-48 96-48h80"
          stroke="var(--color-aqua)"
          strokeLinecap="round"
          strokeOpacity="0.46"
          strokeWidth="1.8"
        />
        {[
          [118, 230, "Input"],
          [280, 150, "Logic"],
          [442, 230, "Agent"],
          [280, 342, "Output"],
        ].map(([x, y, label]) => (
          <g className="blueprint-node" key={label}>
            <rect
              fill="var(--color-panel)"
              height="76"
              rx="20"
              stroke="var(--color-line)"
              width="124"
              x={Number(x) - 62}
              y={Number(y) - 38}
            />
            <circle cx={x} cy={Number(y) - 10} r="9" fill="var(--color-aqua)" opacity="0.85" />
            <text
              fill="var(--color-ink)"
              fontFamily="var(--font-bricolage)"
              fontSize="18"
              fontWeight="600"
              textAnchor="middle"
              x={x}
              y={Number(y) + 22}
            >
              {label}
            </text>
          </g>
        ))}
        <circle
          className="blueprint-core"
          cx="280"
          cy="232"
          r="58"
          fill="var(--color-shell)"
          stroke="url(#blueprintGradient)"
          strokeWidth="2"
        />
        <path
          d="M254 233h52m-18-19 18 19-18 19"
          stroke="var(--color-ink)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
        />
      </svg>
    </div>
  );
}
