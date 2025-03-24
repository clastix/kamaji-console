import "../src/styles/globals.css";

export const parameters = {
  actions: {
    handles: ["onClick", "onChange", "onSubmit", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};