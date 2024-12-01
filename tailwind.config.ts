/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
        'dark-hover': '#1A1A1A',
        light: '#EDEDED',
        'light-hover': '#DDDDDD'
      },
      boxShadow: {
        default: '0 0 0 1px rgba(237, 237, 237, 0.3)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config
