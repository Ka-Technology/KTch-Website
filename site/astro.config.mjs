// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ka-tch.com',
  trailingSlash: 'ignore',
  // the work index now lives on the Services page
  redirects: { '/work': '/services#work' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
