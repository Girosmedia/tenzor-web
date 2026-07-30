export default function BlueprintIllustration() {
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
