import type { Config } from 'tailwindcss'
 
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--inter)"]
      },
      colors: {
        "ko-gray-light": "#F7F7F5",
        "ko-gray-normal": "#EFEFEF",
        "ko-primary-light": "#b7c0be",
        "ko-primary-normal": "#E4F223",
        "ko-primary-dark": "#17332D",
        "ko-midnight": "#080808",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
        'infinite-scroll-inverse': 'infinite-scroll-inverse 60s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-inverse': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        }
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
export default config
