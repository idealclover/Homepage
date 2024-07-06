import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";


export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === "serve") {
    return {
      // 开发环境配置
      plugins: [vue()],
      base: "/projects/Homepage/",
    };
  } else {
    // 线上环境配置
    return {
      plugins: [vue()],
      base: "https://image.idealclover.cn/projects/Homepage/",
    };
  }
});
