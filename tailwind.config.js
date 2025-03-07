/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "white",
          "primary-focus": "#f5f5f5",
          "primary-content": "black",
          secondary: "#ededed",
          accent: "#b8b8b8",
          neutral: "#ebebeb",
          "base-100": "white",
          "base-200": "#e6e6e6",
          "base-300": "#d9d9d9",
          ".card-title": {
            "margin-bottom": "0!important",
          },
        },
        black: {
          primary: "#262626",
          "primary-focus": "#222020",
          secondary: "#343232",
          accent: "#2d2d2d",
          neutral: "#383838",
          "base-100": "black",
          "base-200": "#0d0d0d",
          "base-300": "#2a2a2a",
        },
      },

      // "wireframe",
      // "black",
    ],
    // themes: ["black"],
    darkTheme: "black",
  },
  theme: {
    extend: {
      screens: {
        // xs 以下：折叠屏竖屏
        xs: "350px",
        // xs - sm 普通手机竖屏
        sm: "480px",
        // sm - md 折叠屏展开竖屏
        md: "680px",
        // md - lg 平板 普通手机横屏
        lg: "960px",
        // lg - xl 平板横屏
        xl: "1200px",
        // xl - xxl 13 寸电脑
        xxl: "1280px",
        // xxl+ 主要电脑与显示器尺寸
      },
    },
  },
};
