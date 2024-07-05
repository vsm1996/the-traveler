import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'ucla-blue': {
          'base-300': '#f5f8fa', // 50
          'base-200': '#e9eff5', // 100
          'base-100': '#cfdde8', // 200
          'neutral-content': '#a4c0d5', // 300
          'neutral': '#749fbc', // 400
          'accent-content': '#5283a5', // 500
          'accent': '#467599', // 600
          'secondary-content': '#345570', // 700
          'secondary': '#2e495e', // 800
          'primary-content': '#2a3e50', // 900
          'primary': '#1c2935', // 950
        },
        'sage': {
          'base-300': '#f5f6ef', // 50
          'base-200': '#e8ecdb', // 100
          'base-100': '#d3dabc', // 200
          'neutral-content': '#afbc88', // 300
          'neutral': '#9cab70', //400
          'accent-content': '#7e8f53', // 500
          'accent': '#62713f', // 600
          'secondary-content': '#4c5833', // 700
          'secondary': '#3f472d', // 800
          'primary-content': '#363e29', // 900
          'primary': '#1c2013', // 950
        },
        extends: {
          backgroundImage: {
            "sage-gradient": "var(--sage-gradient)"
          }
        }
      },
    ],
  },
};
export default config;
