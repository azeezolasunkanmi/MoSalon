/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffd3db",
        secondary: "#0b132b", //black
        tertiary: "#3a506b",
        lightPrimary: "#faefed",
        darkPrimary: "#ce7f86",
        white: "#ffffff",
        dimWhite: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        amatic: ["Amatic SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
