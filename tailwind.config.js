module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "var(--black_900)",
          "900_01": "var(--black_900_01)",
          "900_3f": "var(--black_900_3f)",
          "900_44": "var(--black_900_44)",
        },
        blue_gray: { 300: "var(--blue_gray_300)", 500: "var(--blue_gray_500)", 700: "var(--blue_gray_700)" },
        deep_orange: {
          50: "var(--deep_orange_50)",
          700: "var(--deep_orange_700)",
          "700_01": "var(--deep_orange_700_01)",
        },
        deep_purple: { a200: "var(--deep_purple_a200)" },
        gray: {
          50: "var(--gray_50)",
          100: "var(--gray_100)",
          300: "var(--gray_300)",
          500: "var(--gray_500)",
          900: "var(--gray_900)",
          "50_01": "var(--gray_50_01)",
          "50_02": "var(--gray_50_02)",
          "900_0c": "var(--gray_900_0c)",
        },
        green: { 50: "var(--green_50)", 500: "var(--green_500)", "500_01": "var(--green_500_01)" },
        neutral: { 2: "var(--neutral_2)", 4: "var(--neutral_4)", 5: "var(--neutral_5)" },
        orange: { 900: "var(--orange_900)", a700: "var(--orange_a700)" },
        text: { 8: "var(--text_8)" },
        white: { a700: "var(--white_a700)" },
        yellow: { 900: "var(--yellow_900)", "900_01": "var(--yellow_900_01)" },
      },
      boxShadow: { xs: "0 1px 2px 0 #1018280c", sm: "4px 4px 8px 0 #00000044", md: "0 4px 4px 0 #0000003f" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #e06016,#e57115,#eb8314)",
        gradient1: "linear-gradient(210deg, #eb8314,#df6015)",
      },
      fontFamily: { inter: "Inter", manrope: "Manrope" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
