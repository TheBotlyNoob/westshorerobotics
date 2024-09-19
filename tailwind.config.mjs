const catppuccin = require("@catppuccin/daisyui");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat Variable", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [catppuccin("latte")],
  },
};
