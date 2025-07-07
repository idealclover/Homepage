import fs from 'fs';
import Fontmin from 'fontmin';

// 参考: https://juejin.cn/post/7336637599895748644

// 获取指定目录下的所有文件
function getFiles(dir) {
	const results = [];
	const list = fs.readdirSync(dir);
	for (const file of list) {
		const filePath = `${dir}/${file}`;
		const stat = fs.statSync(filePath);
		if (stat.isDirectory()) {
			results.push(...getFiles(filePath));
		} else {
			results.push(filePath);
		}
	}
	return results;
}

// 扫描目录并获取所有字符
function scanDirectory(dir) {
	let set = new Set();
	const files = getFiles(dir);
	for (const file of files) {
        // 跳过字体文件
        const fontExtensions = ['.ttf', '.otf', '.woff', '.woff2', '.eot'];
        if(fontExtensions.some(ext => file.endsWith(ext))) continue;

        const content = fs.readFileSync(file, "utf8");
		const currentSet = new Set(content);
		set = new Set([...set, ...currentSet]);
	}
	return set;
}

// 生成最终的 HTML 代码
function generateFinalHTML(finalString) {
	const fontmin = new Fontmin()
		.src("./public/fonts/*.ttf") // 源字体文件路径
		.dest("./dist/fonts") // 压缩后文件存放路径，最终使用的是这个压缩后的文件
		.use(
			Fontmin.glyph({
				text: finalString, // 也可以直接指定需要生成的字符集
				hinting: false,
			})
		)
		.use(
			Fontmin.ttf2woff2()
		);

	fontmin.run((err) => {
		if (err) {
			throw err;
		}
	});
}

// 扫描指定目录并生成最终的 HTML 代码

let set = scanDirectory("src");
let  finalString = Array.from(set).join("");
generateFinalHTML(finalString);
console.log("字体已压缩，打包生成" + finalString.length + "个字符");

