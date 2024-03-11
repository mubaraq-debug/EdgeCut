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
      'custom-green': '#6bb7be',
      'custom-orange': '#f89646',
      'custom-gray': '#f9fafa',
     }
    },
    screens: {
      'sm': '200px', // Set the custom small breakpoint to 200px
      'md': '640px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
};
export default config;
