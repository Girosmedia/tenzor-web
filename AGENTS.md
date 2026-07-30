<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Tenzor Labs

Contrato de trabajo para agentes (Claude Code) en este repositorio. Define cómo comportarse en CUALQUIER tarea sobre este repo. La misión concreta del refactor actual está en `docs/refactor-brief.md`.

---

## Qué es este proyecto

Sitio web de **Tenzor Labs**, estudio de desarrollo de software en Chile operado por una persona: **Pavel Chávez** (publicista, ingeniero administrador de empresas, magíster en IA). Vende desarrollo web, software a medida, automatizaciones y cumplimiento de la Ley 21.719 a PyMEs y empresas medianas chilenas.

El sitio es a la vez la carta de presentación del estudio y, más adelante, el hogar de la herramienta de diagnóstico web. Todo vive en este mismo repo Next.js.

## Con quién habla el sitio

- **Público:** dueño de PyME o gerente, NO técnico.
- **Idioma:** español de Chile, neutro y directo. Sin anglicismos innecesarios, sin jerga técnica de cara al cliente.
- **Lo que el cliente quiere:** más clientes e ingresos. No quiere "una web"; quiere resultados. Hablar en ese idioma.

---

## Reglas de contenido (nunca romper)

Estas reglas vienen de errores concretos que arrastraba el sitio anterior. Son innegociables:

1. **Cero métricas inventadas.** Prohibido "3x", "-42%", "+500 clientes", "99.9% uptime" o cualquier cifra sin respaldo real. Si no hay dato verificable, no va número. Esto aplica a TODO el sitio, incluido el blog.
2. **Nada de promesas que no dependen de nosotros.** No prometer "primer lugar en Google" ni "indexación garantizada". Se dice "configuración técnica correcta para indexación", que sí controlamos.
3. **Cara y nombre visibles.** Es un estudio boutique de una persona, no un "nosotros" corporativo anónimo. El fundador aparece con nombre, foto y sus tres credenciales.
4. **El sitio es su propia demo.** Vendemos sitios rápidos, encontrables y que cumplen con protección de datos. El sitio DEBE encarnar eso: si no pasa Lighthouse, no podemos venderlo.
5. **Honestidad de etapa temprana.** No inventar clientes ni testimonios. La prueba de capacidad son los productos reales construidos por Pavel (Tendo, Tendo Personas).

---

## Stack y convenciones

> ⚠️ Este repo YA EXISTE y ya es Next.js. Antes de asumir nada, INSPECCIONA el repo y confirma: versión de Next, App Router vs Pages Router, si ya usa TypeScript, si ya está Tailwind, gestor de paquetes (pnpm/npm/yarn). Reporta lo que encuentres antes de proponer cambios. No reintroduzcas dependencias que ya existan ni cambies el router sin avisar.

Stack real confirmado (2026-07-29): Next.js 16.2.6, App Router, React 19.2.4, TypeScript estricto, Tailwind v4, pnpm, `output: "standalone"` (Docker). No cambiar sin avisar.

Preferencias del proyecto (aplicar salvo que el repo ya imponga otra cosa):

- **Next.js con App Router** y SSG/SSR para SEO real. Si el repo está en Pages Router, avisar antes de migrar — es decisión de Pavel, no automática.
- **TypeScript** en todo el código nuevo.
- **Tailwind** para estilos. Reutilizar los tokens de diseño existentes; no introducir un segundo sistema de estilos.
- **MDX en archivos** para el blog. Los posts son `.mdx` en el repo, no en base de datos ni CMS. Esto es deliberado: el pipeline de contenido escribe estos archivos directamente.
- **Sin base de datos en esta fase.** El contenido vive en archivos. (La futura herramienta de diagnóstico sí usará Postgres, pero eso es otra fase.)

### Decisión de arquitectura del blog — no revertir sin entender por qué
El pipeline externo escribe archivos `.mdx` con **nombres de archivo arbitrarios** directamente en `content/blog/`. Por eso el blog usa un patrón de "content collection" (`gray-matter` + `next-mdx-remote/rsc` leyendo `content/blog/*.mdx` como datos en build time, generando rutas dinámicas `/blog/[slug]` vía `generateStaticParams`), y deliberadamente **no** usa el patrón estándar `@next/mdx` (que trata cada `.mdx` como archivo de ruta real bajo `app/` con nombre fijo). Si un agente futuro ve esto y piensa "debería usar `@next/mdx`", es un error — no encaja con cómo el pipeline entrega contenido.

### Identidad visual
- Mantener la paleta actual (verde/oscuro). No rediseñar la identidad; reposicionar el mensaje.
- Sin stock photos genéricas.

---

## Cómo trabajar en este repo

1. **Explora antes de editar.** Lee la estructura existente y entiende qué hay antes de proponer cambios. Este es un refactor, no un proyecto nuevo: preserva lo que sirve.
2. **Plan antes de código.** Para cualquier tarea no trivial, primero propone un plan de implementación y espera aprobación de Pavel. (Para el refactor, el plan sale del brief — ver abajo.)
3. **Incrementos revisables.** Trabaja en pasos que se puedan revisar en el navegador. Nada de "confía y espera el resultado final".
4. **No inventes contenido de negocio.** Textos, precios, nombres de clientes y cifras los define Pavel. Si falta un dato real, usa un placeholder EXPLÍCITO (ej. `[FALTA: foto del fundador]`) en vez de inventar. Nunca rellenar con datos plausibles.
5. **Commits pequeños y descriptivos.**
6. **Verifica antes de dar por terminado:** `lint`, `build` y una pasada de Lighthouse (performance, SEO, accesibilidad) deben estar en verde.

---

## Qué NO hacer sin preguntar

- No cambiar el router (App ↔ Pages) ni la versión mayor de Next.
- No agregar un CMS, un panel de administración ni una base de datos en esta fase.
- No introducir métricas, testimonios, logos de clientes ni cifras. Si un diseño los "pide", usar placeholder explícito y avisar.
- No agregar multi-idioma, e-commerce ni pasarela de pago.
- No borrar el contenido técnico "enterprise" actual: se MUEVE a una página interna `/capacidades`, no se elimina.

---

## Documentos de referencia

- `docs/refactor-brief.md` — la misión del refactor actual. De aquí sale el plan de implementación.

Cuando termines una tarea, deja anotado en el PR / resumen qué quedó pendiente o qué placeholders de contenido esperan datos reales de Pavel.
