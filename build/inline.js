import fs from 'fs';
import path from 'path';
import { minify } from 'terser';

async function main() {
  // 读取 init.js 文件
  const initPath = path.resolve('./src/inlines/inline.js');
  let initContent = fs.readFileSync(initPath, 'utf8');

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

  // 处理 init.js 内容
  initContent = await purgeContent(initContent);

  // 读取 index.astro 文件
  const astroPath = path.resolve('./src/pages/index.astro');
  let astroContent = fs.readFileSync(astroPath, 'utf8');

  // 替换最后一个 <script is:inline/> 元素
  const regex = /<script is:inline>.*<\/script>\n\s*<\/body>\n\s*<\/html>/;
  const replacement = `<script is:inline>${initContent}</script>\n  <\/body>\n</html>`;
  astroContent = astroContent.replace(regex, replacement);

  // 写回 index.astro 文件
  fs.writeFileSync(astroPath, astroContent, 'utf8');

  console.log('Successfully updated inline script in index.astro');
}

main().catch(console.error);