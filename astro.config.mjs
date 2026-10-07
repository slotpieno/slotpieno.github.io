import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://slotpieno.github.io',
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  integrations: [tailwind(), sitemap()],
  prefetch: false,
  trailingSlash: 'always',
});
