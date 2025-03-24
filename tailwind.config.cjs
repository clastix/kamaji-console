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
  background: {
    dark: "#0A253F",
    sidebar: "#0A1A2A",
    sidebarSelected: "#1A5389",
    card: "#1a2b47",
    dropdown: "#2a3b59",
    modalPanel: "#1E2A3E",
    input: "#2A3952",
    codemirrorFrame: "#2A2E37"
  },
  text: {
    primary: "#e5e7eb",
    secondary: "#9ca3af",
    lightBlue: "#A9CDEF"
  },
  button: {
    primary: "#1A5389",
    secondary: "#1f2937",
    disabled: "#9CA3AF",
    hover: "#235BA2",
  }
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        sidebar: colors.background.sidebar,
        card: colors.background.card,
        dropdown: colors.background.dropdown,
      },
      backgroundColor: {
        dark: colors.background.dark,
        sidebar: colors.background.sidebar,
        card: colors.background.card,
        dropdown: colors.background.dropdown,
        "button-primary": colors.button.primary,
        "button-secondary": colors.button.secondary,
      },
      textColor: {
        light: colors.text.primary,
        muted: colors.text.secondary,
      },
      borderColor: {
        dark: "#2a3855",
      },
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
          primary: colors.primary.base,
          accent: colors.secondary.base,
          "base-100": colors.background.dark,
          "base-content": colors.text.primary,
          neutral: colors.background.card,
          "neutral-content": colors.text.primary,
          sidebar: colors.background.sidebar,
          card: colors.background.card,
          dropdown: colors.background.dropdown,
        },
      },
      "dark",
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
