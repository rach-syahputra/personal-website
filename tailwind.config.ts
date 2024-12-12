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
        primary: 'var(--primary)',
        dark: 'var(--dark)',
        'dark-hover': 'var(--dark-hover)',
        light: 'var(--light)',
        'light-hover': 'var(--light-hover)',
        gray: 'var(--gray)'
      },
      boxShadow: {
        default: '0 0 0 1px rgba(237, 237, 237, 0.3)',
        photo:
          '0px 0px 4px 4px rgba(237, 237, 237, 0.1), 0px 0px 0px 1px rgba(237, 237, 237, 0.1) '
      },
      maxWidth: {
        default: '1200px'
      },
      screens: {
        xs: '400px'
      }
    }
  }
} satisfies Config
