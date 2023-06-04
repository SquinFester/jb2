/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2c2b2b",
      },
      keyframes: {
        "open-menu": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "close-menu": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out",
        "close-menu": "close-menu 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
