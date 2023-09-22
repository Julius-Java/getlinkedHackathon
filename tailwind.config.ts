import type { Config } from 'tailwindcss'
import withMT from "@material-tailwind/react/utils/withMT";

const baseConfig: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      spacing: {
        "300": "300px",
      },
      screens: {
        xs: "320px",
        xsL: "340px",
        xsX: "351px"
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
  plugins: [
    require('preline/plugin'),
  ],
}

const mergedConfig = withMT(baseConfig)

export default baseConfig
