import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: import.meta.env.PROD ? 'https://image.idealclover.cn/projects/Homepage/' : '/',
});
