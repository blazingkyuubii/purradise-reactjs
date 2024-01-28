/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        600: "37.5rem",
        500: "31.25rem",
      },
      maxHeight: {
        600: "37.5rem",
        500: "31.25rem",
      },
      colors: {
        "weed-green-500": "#586f56",
        "weed-green-400": "#738d76",
        "weed-green-300": "#8ba189",
        "weed-green-200": "#a5a39a",
        "weed-green-100": "#b2a59a",
        "dark-green": "#005431",
      },
    },
  },
  plugins: [],
};

