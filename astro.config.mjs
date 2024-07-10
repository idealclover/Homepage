import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://image.idealclover.cn/projects/Homepage'
  // site: 'http://localhost:4321'
});
