export default function CommandDeckIllustration() {
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
