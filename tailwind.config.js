/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "white",
          "primary-focus": "#f3f4f6",
          "primary-content": "black",
          secondary: "#ededed",
          accent: "#b8b8b8",
          neutral: "#ebebeb",
          "base-100": "white",
          "base-200": "#e6e6e6",
          ".card-title": {
            "margin-bottom": "0!important",
          },
        },
        black: {
          primary: "black",
          "primary-focus": "#222020",
          secondary: "#343232",
          accent: "#2d2d2d",
          neutral: "#272626",
          "base-100": "black",
          "base-200": "#0d0d0d",
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
        // xs以下：折叠屏竖屏
        xs: "350px",
        // xs - sm 普通手机竖屏
        sm: "480px",
        // sm - md 折叠屏展开竖屏
        md: "680px",
        // md - lg 平板竖屏 普通手机横屏
        lg: "960px",
      },
    },
  },
};
