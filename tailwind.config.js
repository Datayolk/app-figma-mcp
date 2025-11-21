/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{tsx,ts,jsx,js}",
      ".storybook/preview.tsx",
    ],
    theme: {
      extend: {
        colors: {
          'dark-charcoal': '#191A23',
        },
        fontFamily: {
          'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        },
        fontSize: {
          'header-title': ['60px', { lineHeight: 'normal', fontWeight: '500' }],
          'header-description': ['20px', { lineHeight: '28px', fontWeight: '400' }],
          'header-button': ['20px', { lineHeight: '28px', fontWeight: '400' }],
        },
        spacing: {
          'header-padding-x': '100px',
          'header-content-gap': '35px',
          'header-button-padding-x': '35px',
          'header-button-padding-y': '20px',
        },
        borderRadius: {
          'header-button': '14px',
        },
        width: {
          'header-title': '531px',
          'header-description': '498px',
        },
      },
    },
    plugins: [],
  }