import fs from "fs";
import path from "path";
import { minify } from "terser";
import config from "../astro.config.mjs";

async function main() {
  const mode = config.siteMode;

  // 读取 inline.js 文件
  const inlinePath = path.resolve("./src/inlines/inline.js");
  let inlineContent = fs.readFileSync(inlinePath, "utf8");

  if (mode == "top") {
    const swPath = path.resolve("./src/inlines/sw.js");
    inlineContent += fs.readFileSync(swPath, "utf8");
  }

  // 使用 terser 进行 minify
  async function purgeContent(content) {
    const result = await minify(content, {
      compress: {
        dead_code: true,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        keep_fargs: false,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        // cascade: true,
        side_effects: true,
        warnings: false,
      },
      mangle: false, // 不混淆变量名
      output: {
        beautify: false, // 输出为一行
      },
    });
    return result.code;
  }

  // 处理 inline.js 内容
  inlineContent = await purgeContent(inlineContent);

  // 读取 index.astro 文件
  const astroPath = path.resolve("./src/pages/index.astro");
  let astroContent = fs.readFileSync(astroPath, "utf8");

  // 替换最后一个 <script is:inline/> 元素
  const regex = /<script is:inline>.*<\/script>/;
  const replacement = `<script is:inline>${inlineContent}</script>`;
  astroContent = astroContent.replace(regex, replacement);
  // 写回 index.astro 文件
  fs.writeFileSync(astroPath, astroContent, "utf8");

  console.log("Successfully updated inline script in index.astro");
}

main().catch(console.error);
