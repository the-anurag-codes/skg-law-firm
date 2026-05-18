import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        paper: '#FAFAF7',
        bone: '#F0EEE8',
        rule: '#1A1A1A',
        mute: '#6B6B6B',
        accent: {
          DEFAULT: '#1E2A47',
          soft: '#E8EBF2',
        },
        gold: '#B8985A',
      },
      fontFamily: {
        serif:   ['var(--font-cormorant)', 'Cormorant Garamond', ...fontFamily.serif],
        sans:    ['var(--font-inter)', ...fontFamily.sans],
        script:  ['var(--font-script)', 'Great Vibes', 'cursive'],
      },
      fontSize: {
        'display-lg': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1.0625rem', { lineHeight: '1.7' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'label': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.18em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'prose-narrow': '56ch',
        'prose-wide': '72ch',
        'site': '1440px',
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '1px',
        md: '2px',
        lg: '2px',
        xl: '2px',
        '2xl': '2px',
      },
      animation: {
        'rule-draw': 'ruleDraw 600ms ease-out forwards',
        'fade-up': 'fadeUp 500ms ease-out forwards',
        'ink-settle': 'inkSettle 600ms ease-out forwards',
      },
      keyframes: {
        ruleDraw: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        inkSettle: {
          '0%': { opacity: '0.4', filter: 'blur(2px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
};

export default config;
