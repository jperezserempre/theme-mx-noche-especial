const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './templates/**/*.{twig,html,tpl}',
    './front-src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'button-primary': 'var(--bg-primary)',
        'header': 'var(--bg-secondary)',
        'bg-map': 'var(--bg-linear-map)',
        'linear-1': 'var(--border-linear-1)'
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary-500)'
        },
        header: {
          DEFAULT: 'var(--border-linear-2)'
        }
      },
      fontFamily: {
        primary: ['var(--font-family-primary)', ...defaultTheme.fontFamily.sans],
        secondary: ['var(--font-family-secondary)',...defaultTheme.fontFamily.sans,],
        third: ['var(--font-family-third)',...defaultTheme.fontFamily.sans,],
        fourth: ['var(--font-family-fourth)',...defaultTheme.fontFamily.sans,],
        fifth: ['var(--font-family-fifth)',...defaultTheme.fontFamily.sans,],
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
        '7xl': 'var(--text-7xl)',
        '8xl': 'var(--text-8xl)',
      },
    },
  },
  plugins: [],
};
