import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#EB4853",
        brand_text: "#27272A",
        brand_placeholder: "#C4C4C4",
        brand_grey: "#D9D9D9",
        brand_grey_text: "#8E8E93",
        brand_grey_light: "#9CA3AF",
        brand_border: "#E8E6EA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
