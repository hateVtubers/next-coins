module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        anakiwa: {
          DEFAULT: "#72EAFF",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#D8F9FF",
          400: "#A5F2FF",
          500: "#72EAFF",
          600: "#3FE2FF",
          700: "#0CDBFF",
          800: "#00B8D8",
          900: "#008CA5",
        },
        aquamarine: {
          DEFAULT: "#72FFCE",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#D8FFF1",
          400: "#A5FFE0",
          500: "#72FFCE",
          600: "#3FFFBC",
          700: "#0CFFAB",
          800: "#00D88D",
          900: "#00A56C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
