import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // dev mode
  // site: 'http://localhost:4321'

  // production mode
  site: 'https://image.idealclover.cn/projects/Homepage',

  // mode: 不同的网站 cn/top/moe
  siteMode: "moe"
});
