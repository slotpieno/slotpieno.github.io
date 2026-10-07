# SlotPieno Landing — REPORT BUILD (v3, redesign completo)

**Data:** 2026-10-07
**Node:** v20+ / npm
**Nota:** redesign totale da anonimo SaaS-dark a identità propria (Fraunces + DM Sans, palette ink/paper/terracotta/sage).

## Fix build v3

1. `Hero.astro`: JSX (`CalendarDemo()`) dentro `<script>` → estratto in `src/components/CalendarDemo.astro`. Build exit 0.
2. `Features`/`HowItWorks`: SVG inline in frontmatter → componenti `src/components/icons/` (WhatsApp, CalendarCheck, ShieldCheck, LockOpen, Phone, Gear, CheckCircle). Import statici nei componenti.
3. Lint warning: `dayIndex`/`weekIndex` inutilizzati + import `siteConfig` in 404 → rimossi. Lint 0/0/0.
4. `Header`: doppia CTA duplicata → singola + menu mobile `<details>`.
5. `deploy.yml`: path filter `slotpieno-landing/**` + `cd slotpieno-landing` rimossi (repo dedicato, root = landing). Aggiunto `public/.nojekyll`.
6. Nuova pagina `src/pages/grazie.astro` (redirect Formspree `_next: /grazie/`) + sitemap 3 URL.
7. README aggiornato (setup repo dedicato + Pages via Actions).

## Test

| ID | Check | Risultato |
|----|-------|-----------|
| T1 | dist/index.html esiste | PASS (48716 B) |
| T2 | lint exit 0 | PASS (0 err, 0 warn, 23 file) |
| T3 | h1 count=1, lang=it | PASS |
| T4 | preview 200 /, /privacy/, /grazie/ | PASS |
| T5 | dist/privacy, /grazie, 404.html, .nojekyll | PASS |
| T6 | placeholder Formspree visibile | PASS (endpoint reale da configurare) |
| T7 | calendario hero presente | PASS (`calendar-grid` in dist) |
| T8 | no stale tokens brand-panel/accent/text/bg | PASS |

## Deploy

Repo dedicato (nessun remote, `gh` assente) → manuale:

```bash
cd slotpieno-landing
git init -b main   # se non già init
git add . && git commit -m "SlotPieno landing v3 redesign"
gh repo create slotpieno-landing --public --source=. --push
# Pages → Settings → Source: GitHub Actions
```

## Next

1. Endpoint Formspree reale in `src/config/site.ts` (XXXXXXXX).
2. Push + Pages. 3. Opzionale: dominio slotpieno.it + `public/CNAME`.
