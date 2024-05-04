import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://oscarivm.github.io/api_astro/',
  integrations: [tailwind()]
});
