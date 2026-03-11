import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// 暂时移除报错的 sitemap 插件
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oeeoc.pages.dev',
  output: 'static',
  // 这里去掉了 sitemap()
  integrations: [mdx()],
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
