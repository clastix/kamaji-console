const colors = {
  primary: {
    50: "#f3f6fc",
    100: "#e6edf8",
    200: "#c9d9ee",
    300: "#99bae0",
    400: "#6296ce",
    500: "#3d79ba",
    600: "#2d5f9c",
    700: "#254c7f",
    800: "#24456f",
    900: "#213859",
    base: "#24456F",
  },
  secondary: {
    50: "#fff1f3",
    100: "#ffe4e8",
    200: "#fecdd7",
    300: "#fda4b7",
    400: "#fa7292",
    500: "#f3406e",
    600: "#d81d56",
    700: "#bd134b",
    800: "#9e1345",
    900: "#871441",
    base: "#D81D56",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        clastix: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: colors.primary.base,
          accent: colors.secondary.base,
        },
      },
      "cupcake",
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkMode: "class",
    darkTheme: "dark",
  },
};
