import mdx from '@astrojs/mdx';
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), svelte()],
  output: "hybrid",
  adapter: netlify()
});