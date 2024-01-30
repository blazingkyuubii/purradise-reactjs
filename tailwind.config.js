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
        "weed-green-500": "#2b463c",
        "weed-green-400": "#688f4e",
        "weed-green-300": "#b1d182",
        "weed-green-200": "#f4f1e9",
        "dark-green": "#005431",
      },
    },
  },
  plugins: [],
};

