import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        xsL: "340px"
      },
      animate: {
        wobly: "blob 4s infinite"
      },
      keyframes: {
        blob: {
          "0%" : {
            transform: "scale(1)"
          },
          "33%" : {
            transform: "scale(1.5)"
          },
          "66%" : {
            transform: "scale(0.8)"
          },
          "100%" : {
            transform: "scale(1)"
          },
        },
      },
      colors: {
        primaryPink: "#D434FE",
        primaryPinkLight: "#FF26B9",
        primaryPurpleLight: "#903AFF",
        primaryPurpleDark: "#150E28"
      },
    },
  },
  plugins: [],
}
export default config
