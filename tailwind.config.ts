import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#707070',
        'deep-gray': '#a1a2a5',
        'deeper-gray': '#2d2f31',
        'light-dark': '#2d2f31',
        'light-white': '#f0fdfa',
        'light-blue': '#F8FFF8',
        'deep-dark': '#202328',
        'primary-orange': '#efae0f',
        'primary-beige': '#867463',
        'gradient-dark': "#363A3E"
    }
    },
  },
  plugins: [],
}
export default config
