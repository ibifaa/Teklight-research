/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teklight: {
          navy: "#102b46",
          blue: "#2864f0",
          teal: "#36c6b0",
          ink: "#172b4d",
          muted: "#65758b",
          pale: "#f4f8fc",
        },
      },
      boxShadow: {
        soft: "0 12px 35px rgba(16, 43, 70, 0.08)",
      },
      fontFamily: {
  sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
  serif: ["Playfair Display", "Georgia", "serif"],
},
    },
  },
  plugins: [],
};
