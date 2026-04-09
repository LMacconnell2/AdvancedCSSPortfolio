import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [svelte(), tailwindcss()],

  preview: {
    allowedHosts: ["css-framework-gospel-tailwind.onrender.com"]
  }
})
