# Homepage

> 📪 idealclover 的新个人主页，基于 [Astro](https://astro.build/) 和 [Tailwind CSS](https://tailwindcss.com/) 构建。灵感来自于 [bento.me](https://bento.me/)

[预览地址 icl.moe](https://icl.moe)

![idealclover.jpg](https://s2.loli.net/2025/02/15/aVESFwu64Qlm1Nt.jpg)

## ✨ 功能特性

- 🌐 响应式设计，适配手机/平板/电脑不同设备
- 🚀 体积小巧，打包后 HTML+CSS 100KB 内
- 🀄️ 使用字体子集化，最大化压缩字体文件
- ⭐️ 自动获取知乎等平台 star 数 using [spencerwooo/Substats](https://github.com/spencerwooo/Substats)
- 🌓 根据时间自动切换暗夜模式

## 📦 开发

```bash
# 安装依赖
yarn

# 启动开发服务器
yarn dev

# 构建生产版本
yarn build
```

## 📄 目录结构

```
├── build/
│   ├── fontmin.js -- 字体压缩脚本
│   ├── postbuild.js -- build后脚本
│   └── prebuild.js --build前脚本
├── public/
│   ├── favicons/ --各尺寸图标
│   ├── fonts/ --字体
│   ├── icons/ --压缩后图标库
│   └── libs/ --第三方库
├── src/
│   ├── components/
│   │   ├── app.astro --主页面功能
│   │   ├── articles_list.astro --文章卡片
│   │   └── card_xxx.astro --各尺寸卡片
│   ├── data/
│   │   ├── articles_list.ts --文章数据
│   │   ├── info.ts --框架信息
│   │   └── update.ts --接口信息
│   ├── inlines/
│   │   ├── inlines.js --内联的额外js
│   └── pages/
│       └── index.astro --首页
└── package.json --项目配置文件
```

## 📃 许可证

本项目采用 MIT 许可证，详情请参阅 [LICENSE](./LICENSE) 文件。

## 🙏 致谢

- [Astro](https://astro.build/) - 构建该网站的现代静态站点构建工具
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [bento.me](https://bento.me/) - 设计灵感来源

## 👨‍💻 作者 idealclover

- 网站：[idealclover.top](https://idealclover.top)
- GitHub：[@idealclover](https://github.com/idealclover)
- 邮箱：idealclover@163.com

欢迎访问我的个人主页了解更多信息~

如果你喜欢这个项目，别忘了给个 Star ⭐️
