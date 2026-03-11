import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oeeoc.pages.dev',
  output: 'static',
  integrations: [mdx(), sitemap()],
  build: {
    format: 'directory',
    assets: 'assets'
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
});
