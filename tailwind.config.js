/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-to-50": "linear-gradient(127deg, #364093, #6F7CCF)",
      }),
      screens: {
        xs: "360px",
        sm: "390px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1500px",
        // => @media (min-width: 1536px) { ... }
        "2xla": "1800px",
        // => @media (min-width: 1680px) { ... }
        fxl: "1920px",
        // => @media (min-width: 1920px) { ... }

        "3xl": "2560px",
        // => @media (min-width: 2560px) { ... }
        "4xl": "3840px",
        // => @media (min-width: 3840px) { ... }
      },
      colors: {
        purple: "#6F7CCF",
        primary: "#323E8C",
        yellow: "#FFED00 ",
        text: "#000000",
        white: "#FFFFFF",
        lightGray: "#ECECEC",
        textGray: "#4F5C68",
        darkGray: "#505D68",
        lightPurple: "#A1AEB7",
      },
    },
  },
  plugins: [],
};
