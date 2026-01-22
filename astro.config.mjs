// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://restuanggia-del.github.io',
  base: isProd ? '/Desa-Srimulya-Jaya/' : '/',
});
