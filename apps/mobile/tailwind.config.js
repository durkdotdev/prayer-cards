module.exports = {
  content: [
    "./App.tsx",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui-mobile/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins")
};
