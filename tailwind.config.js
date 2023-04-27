/** @type {import('tailwindcss').Config} */

const baseColors = {
  primary: "#FF4500",
  "primary-ligth": "#ff7b3a",
  secondary: "#00619a",
  "secondary-ligth": "#00BFFF",
  tertiary: "#ffe49a",
  "background-one": "#F0F8FF",
  "background-two": "#e6eef5",
  "background-three": "#bdc5cc",
  "background-four": "#fff3b0",
  dark: "#2C2C2C",
  "dark-ligth": "#555555",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: baseColors,
    },
  },
  plugins: [],
};
