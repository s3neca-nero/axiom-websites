import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://endoaxiom.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  build: { format: 'directory' },
});
