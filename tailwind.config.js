/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["IRANSans"],
        block: ["IRANSansBlock"],
        bold: ["IRANSansBold"],
        medium: ["IRANSansMedium"],
        light: ["IRANSansLight"],
        ultraLight: ["IRANSansUltraLight"],
      },
      // spacing: {
      //   1: "8px",
      //   2: "12px",
      //   3: "16px",
      //   4: "24px",
      //   5: "32px",
      //   6: "48px",
      // },
      // fontSize: {
      //   sm: "0.8rem",
      //   base: "1rem",
      //   xl: "1.25rem",
      //   "2xl": "1.563rem",
      //   "3xl": "1.953rem",
      //   "4xl": "2.441rem",
      //   "5xl": "3.052rem",
      // },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     fontFamily: {
//       body: ["IRANSans", "sens-sherif"],
//     },
//     extend: {},
//     colors: {
//       primary: "#487b78",
//       secondary: "#d36c4c",
//       tertiary: "#ebc240",
//       dark: "#323232",
//       milky: "#efeee8",
//       gray: "#F5F6F7",
//       "light-gray": "#9a9b9e",
//       light: "#ffffff",
//       yellow: "#ebc240",
//     },
//   },
//   plugins: [],
// };
