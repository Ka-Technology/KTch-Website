// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ka-tch.com',
  trailingSlash: 'ignore',
  // client work now lives inside each service on the Services page
  redirects: { '/work': '/services' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
