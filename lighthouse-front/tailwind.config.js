/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px", // Adicionado para o Footer
      },
      colors: {
        primary: "#0b1c38",
        secondary: "#dbc68f",
        secondaryDarker: "#c8a955",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      spacing: {
        quarck: "4px",
        small: "6px",
        nano: "8px",
        xxxs: "16px",
        xxs: "24px",
        xs: "32px",
        sm: "40px",
        md: "48px",
        lg: "56px",
        xl: "64px",
        xxl: "80px",
        xxxl: "96px",
        huge: "104px",
        giant: "112px",
        40: "10rem",
        2: "0.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
