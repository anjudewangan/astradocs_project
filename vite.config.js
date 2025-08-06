import path from 'path';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { createHtmlPlugin } from 'vite-plugin-html'; 
import sitemap from 'vite-plugin-sitemap'; 
import { robots } from 'vite-plugin-robots';
import viteCompression from 'vite-plugin-compression';

const PORT = 3030;
const siteUrl = 'https://astradocs.in'; 

export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: { lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"', dev: { logLevel: ['error'] }},
      overlay: { position: 'tl', initialIsOpen: false },
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'AstraDocs', 
          description: 'Comprehensive documentation for AstraDocs, a modern documentation platform.',
          ogImage: `${siteUrl}/favicon.ico`,
          viewport: 'width=device-width, initial-scale=1.0',
          jsonLD: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": siteUrl, 
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${siteUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          }),
        },
      },
    }),
    sitemap({ hostname: siteUrl, routes: ['/home', '/about-us', '/components', '/pricing'] }),
    robots({ sitemap: `${siteUrl}/sitemap.xml`, policies: [{ userAgent: '*', allow: '/' }, { userAgent: 'Googlebot', disallow: '/private' }]}),
    viteCompression({ algorithm: 'gzip' }),
  ],
  resolve: {
    alias: [
      { find: /^~(.+)/, replacement: path.join(process.cwd(), 'node_modules/$1') },
      { find: /^src(.+)/, replacement: path.join(process.cwd(), 'src/$1') },
    ],
  },
  server: { port: PORT, host: true },
  preview: { port: PORT, host: true },
  build: {
    rollupOptions: {
      output: { manualChunks: { vendor: ['react', 'react-dom'] }},
    },
  },
});
