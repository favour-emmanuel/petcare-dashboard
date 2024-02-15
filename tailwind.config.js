/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rethink: "Rethink+Sans",
      },
      colors: {
        appwhite: "#F2F5FA",
        apppureWhite: "#fefefe",
        appBlue: "#3788E5",
        appNavyGray: "#0B1C33",
        appBlack: "#0B1C33",
        appRed: "#E53761",
        appdarkModeBlack: "#0d0d0d",
      },
    },
  },
  plugins: [],
};
