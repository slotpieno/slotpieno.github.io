import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://slotpieno.github.io',
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  integrations: [tailwind()],
  prefetch: false,
  trailingSlash: 'always',
});
