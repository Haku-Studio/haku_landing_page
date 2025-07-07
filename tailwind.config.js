/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gt: ["GT Walsheim Trial", "sans-serif"],
        gtLight: ["GT Walsheim Light Trial", "sans-serif"],
        // gtBlack: ["GT Walsheim Black Trial", "sans-serif"],
        gtBold: ["GT Walsheim Bold Trial", "sans-serif"],
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
      // fontWeight: {
      //   light: 300,
      //   normal: 400,
      //   bold: 900,
      // },
    },
  },
  plugins: [],
}

