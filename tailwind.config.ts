import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#02735E",
        softColor1: "#81BED9",
        softColor2: "#98B4FF",
        softColor3: "#9386A9",
        softColor4: "#AA88B5",
        softColor5: "#AE7186",
        softColor6: "#FFACA5",
        softColor7: "#FFBFA3",
        softColor8: "#FBCF8C",
        softColor9: "#F9E29D",
        softColor10: "#E6F0A6",
        softColor11: "#8FB177",
        softColor12: "#4D5F66",
        softColor13: "#496260",
        softColor14: "#587670",
        softColor15: "#6B947D"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
