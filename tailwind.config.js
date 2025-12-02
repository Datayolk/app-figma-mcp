/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{tsx,ts,jsx,js}",
      ".storybook/preview.tsx",
    ],
    theme: {
      extend: {
        colors: {
          // Figma Design Tokens
          'black': '#000000',
          'green': '#B9FF66',
          'white': '#ffffff',
          'dark': '#191A23',
          'grey': '#F3F3F3',
          'placeholder': '#898989',
          // Legacy/Alternative names
          'dark-charcoal': '#191A23',
        },
        fontFamily: {
          'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        },
        fontSize: {
          // Desktop Typography (from Figma)
          'h1': ['60px', { lineHeight: '100%', fontWeight: '500' }],
          'h2': ['40px', { lineHeight: '100%', fontWeight: '500' }],
          'h3': ['30px', { lineHeight: '100%', fontWeight: '500' }],
          'h4': ['20px', { lineHeight: '100%', fontWeight: '500' }],
          'p': ['18px', { lineHeight: '100%', fontWeight: '400' }],
          // Mobile Typography (from Figma)
          'h1-mob': ['43px', { lineHeight: '100%', fontWeight: '500' }],
          'h2-mob': ['36px', { lineHeight: '100%', fontWeight: '500' }],
          'h3-mob': ['26px', { lineHeight: '100%', fontWeight: '500' }],
          'h4-mob': ['18px', { lineHeight: '100%', fontWeight: '500' }],
          'p-mob': ['16px', { lineHeight: '24px', fontWeight: '400' }],
          // Legacy/Component-specific tokens
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