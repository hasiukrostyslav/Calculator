/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "'Poppins', sans-serif",
    },
    colors: {
      accent: "#FF9500",
      theme: "#EFE8DE",
      "primary-950": "#17181A",
      "primary-900": "#1C1C1C",
      "primary-700": "#505050",
      "primary-600": "#828282",
      "primary-400": "#D4D4D2",
      "primary-200": "#F7F8FB",
      "primary-100": "#FBFBFD",
    },
    extend: {},
  },
  plugins: [],
};
