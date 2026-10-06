# SlotPieno Landing — REPORT BUILD (v2, sitemap fix)

**Data:** 2026-10-06 ~22:35 CEST
**Commit:** 69e9302 (repo locale `slotpieno-landing/`, branch main)
**Node:** v26.10.0 / npm 12.2.0
**Nota advisory:** `@astrojs/sitemap@3.x` crashava il build con Astro 4.16 (`astro:build:done` → exit 1, zero artifact sitemap). Fix: integrazione rimossa da `astro.config.mjs`, dipendenza rimossa da `package.json`; sitemap statica in `public/sitemap.xml` → copiata in `dist/sitemap.xml`. `robots.txt` allineato. Build exit 0, `dist/sitemap.xml` verificato.

## Comandi (exit preservato, no pipe mask)

| Step | Comando | Esito |
|------|---------|-------|
| 2.1 | npm install --no-audit --no-fund | EXIT 0 (476 pkg) |
| 2.2 | npm run build | EXIT 0 |
| 3.1 | npm run lint | EXIT 0 (0 err, 14 file) |
| 4 | output checks | PASS |
| 5 | git init/add/commit | PASS 69e9302 |

## Test T1–T8 (+sitemap)

| ID | Check | Risultato |
|----|-------|-----------|
| T1 | dist/index.html esiste | PASS (12149 B) |
| T2 | lint exit 0 | PASS |
| T3 | size < 51200 | PASS (12149) |
| T4 | no http:// (solo namespaces xml consentiti: sitemaps.org in sitemap.xml) | PASS (nessun http:// in html) |
| T5 | lang=it count=1 | PASS |
| T6 | h1 count=1 | PASS |
| T7 | dev server 200 (porta 4323) | PASS |
| T8 | placeholder Formspree visibile | PASS |
| S1 | dist/sitemap.xml esiste | PASS (366 B, 2 URL: / e /privacy/) |

## Deploy

- `gh` non installato → push manuale:

```bash
cd slotpieno-landing
gh repo create slotpieno-landing --public --source=. --push
git push -u origin main
```

- Pages → Source: GitHub Actions (workflow presente).

## Next

1. Endpoint Formspree reale in `src/config/site.ts` (XXXXXXXX).
2. Push + Pages. 3. Opzionale: dominio slotpieno.it + `public/CNAME`.
