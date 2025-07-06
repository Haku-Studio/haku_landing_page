/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{js,jsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        gt: ['"GT Walsheim Trial"', "sans-serif"],
      },
      colors: {
        primary: "#E3F805",
        // textWhite: "#ffffff",
      },
      fontSize: {
        xs: "18px",
        sm: "20px",
        base: "22px",
        lg: "32px",
        xl: "60px",
        xxl: "64px",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 900,
      },
    },
  },
  plugins: [],
}

