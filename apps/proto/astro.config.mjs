import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://protoaxiom.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  // /investment → /thesis: handled via meta-refresh inside
  // src/pages/investment.astro rather than an astro `redirects` entry, so the
  // redirect ships as a real page file (compatible with any static host) and
  // there's no Astro warning about a route being defined twice.
  build: {
    format: 'directory',
  },
});
