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
        },
        black: {
          primary: "black",
          "primary-focus": "#222020",
          secondary: "#343232",
          accent: "#2d2d2d",
          neutral: "#272626",
          "base-100": "black",
          "base-200": "#0d0d0d",
        }
      },

      // "wireframe",
      // "black",
    ],
    // themes: ["black"],
    darkTheme: "black",
  },
};
