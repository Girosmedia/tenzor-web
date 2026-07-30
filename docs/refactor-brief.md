# Brief de refactor — Home + Blog

Misión concreta de esta fase. El agente usa este documento para **generar un plan de implementación** que Pavel aprueba antes de escribir código. Las reglas permanentes están en `AGENTS.md`; acá va el qué y el porqué de este trabajo puntual.

---

## Objetivo

Refactorizar el sitio actual de Tenzor Labs (ya en Next.js) para que:

1. Un cliente que llega referido **vea que el estudio existe y es serio** — hoy el sitio habla como consultora enterprise y no conecta con el público real.
2. Ponga al frente la **ventaja competitiva** de Pavel: la combinación publicista + administrador + magíster en IA, que le permite entender el negocio, el marketing y la tecnología a la vez.
3. Deje un **blog** listo para recibir contenido (similar a lo que funcionaba en el proyecto anterior "Giros Media"), pero con estrategia corregida.

**Alcance de esta fase: solo Home + Blog.** Todo lo demás queda fuera (ver "Fuera de alcance").

---

## El reposicionamiento, en una frase

De *"consultora enterprise que hace plataformas B2B y modernización legacy"*
a *"el estudio que construye el sistema que te trae clientes, y te demuestra cuántos — para PyMEs chilenas"*.

El contenido técnico actual no se bota: se preserva para el cliente grande futuro, movido a una página interna.

---

## HOME — secciones en orden vertical

Cada sección tiene un propósito. El agente propone el diseño; el contenido de negocio lo aporta Pavel (usar placeholders explícitos donde falte).

1. **Hero** — Titular de resultado, no de servicio (dirección: "Software que hace crecer tu negocio, no solo tu sitio web"). Subtítulo con qué/para quién. CTA primario "Agenda un diagnóstico gratuito" → Cal.com. CTA secundario ancla a la sección de servicios.
2. **El problema** — 3 dolores reales del dueño de PyME en su idioma (no aparece en Google / las consultas se pierden / no sabe qué funciona). Solo nombrar el dolor.
3. **Qué hago** — 3-4 tarjetas: sitios que convierten · automatización de procesos · integraciones y software a medida · cumplimiento Ley 21.719. Título de negocio + una línea de beneficio. No listar tecnologías.
4. **Prueba real** — Tendo y Tendo Personas como productos construidos por Pavel. Encuadre honesto: "software que diseñé y construí de cero". Captura real + link a cada landing. ESTO REEMPLAZA testimonios/clientes inventados.
5. **Quién está detrás** — Foto + nombre de Pavel. Las tres credenciales al frente. La frase diferenciadora: entiendo negocio, marketing y tecnología, no solo programo.
6. **Cómo trabajo** — 3-4 pasos: diagnóstico → propuesta con precio → construcción con avance semanal → entrega y medición.
7. **Diagnóstico gratuito** — Gancho de entrada. En esta fase el CTA va a Cal.com o a un formulario simple. IMPORTANTE: dejarlo como componente aislado, porque más adelante se conecta a la herramienta de diagnóstico sin rehacer la home.
8. **CTA final + footer** — Repetir CTA. Footer con nombre, correos (hola@ / pavel.chavez@), links a Tendo, política de privacidad y términos reales, redes cuando existan.

### Correcciones obligatorias respecto del sitio actual
- Eliminar métricas inventadas (3x, -42%, 68%, SLA 99.2).
- Eliminar el párrafo dirigido al diseñador ("Una landing de agencia de software debe demostrar...").
- Corregir tildes: "qué automatizar, qué construir y qué medir".
- Reemplazar `mailto:` por Cal.com como CTA principal.
- Eliminar el "nosotros" plural donde implique un equipo que no existe.
- Mover el contenido técnico enterprise a `/capacidades` (crear la página; no borrar el contenido).

---

## BLOG

Meta: reproducir lo que funcionaba antes (indexable, buen SEO técnico) pero apuntado a PyME + Ley 21.719, y listo para el pipeline de contenido.

### Rutas
- `/blog` — índice, más reciente primero.
- `/blog/[slug]` — post individual.
- (Opcional) `/blog/categoria/[categoria]`.

### Cada post = archivo `.mdx` con frontmatter
```
---
title: "..."
slug: "..."
description: "..."        # 120-158 caracteres
date: "2026-08-01"
category: "cumplimiento"
segmento: "pyme"
keyword: "..."           # búsqueda comercial objetivo
draft: false
---
```

### SEO técnico por post (esto es lo que hay que hacer bien)
- title + meta description desde frontmatter.
- URL limpia con slug.
- JSON-LD `Article`.
- Open Graph completo.
- Imagen destacada en WebP, optimizada.
- sitemap.xml que incluya todos los posts automáticamente.
- robots.txt que **permita** indexación.
- canonical correcto por post.

### Integración con el pipeline de contenido (contexto, no construir ahora)
- El pipeline externo escribirá archivos `.mdx` en `/content/blog/` y disparará rebuild.
- `draft: true` por defecto → Pavel revisa y cambia a `false` para publicar.
- El agente solo debe dejar la ESTRUCTURA lista para que esos archivos funcionen. No construir el pipeline.

### Regla de contenido
- Diseñar el blog asumiendo BAJO volumen (máx. ~2 posts/semana), no un feed masivo. Menos piezas, más intención comercial. (El volumen genérico fue penalizado en el proyecto anterior.)

---

## Fuera de alcance (no hacer en esta fase)
- Herramienta de diagnóstico embebida (solo dejar el CTA apuntando a Cal.com/formulario, aislado).
- CMS, panel de administración, base de datos.
- Página `/capacidades` elaborada — basta con mover ahí el contenido técnico actual.
- Multi-idioma, e-commerce, pasarela de pago.
- El pipeline de generación de contenido.

---

## Criterio de "listo"
- [ ] Home carga < 2s y Lighthouse en verde (performance, SEO, accesibilidad).
- [ ] Cero métricas sin respaldo en todo el sitio.
- [ ] Foto y nombre del fundador visibles (o placeholder explícito si falta la foto).
- [ ] CTA a Cal.com funcionando.
- [ ] Blog con ≥1 post de ejemplo: indexable, con JSON-LD y OG.
- [ ] robots.txt permite indexación; sitemap.xml se genera solo.
- [ ] Política de privacidad y términos reales publicados.
- [ ] Contenido técnico enterprise movido a `/capacidades`, no borrado.
- [ ] Resumen final con la lista de placeholders de contenido que esperan datos reales de Pavel.

---

## Primer paso pedido al agente
Antes de escribir código: **inspecciona el repo, reporta el stack real** (versión Next, router, TS, Tailwind, gestor de paquetes) y **entrega un plan de implementación por fases** basado en este brief para aprobación. No empezar a codear hasta que el plan esté aprobado.
