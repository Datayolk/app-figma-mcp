/**
 * Design Tokens from Figma
 * 
 * Source: https://www.figma.com/design/r0J523hnCWW51EkP8r13I0/Positivus-Landing-Page-Design--Community-?node-id=25-145&m=dev
 * Extracted via Figma MCP Desktop
 */

export const figmaTokens = {
  colors: {
    black: '#000000',
    green: '#B9FF66',
    white: '#ffffff',
    dark: '#191A23',
    grey: '#F3F3F3',
    placeholder: '#898989',
  },
  typography: {
    desktop: {
      h1: {
        family: 'Space Grotesk',
        style: 'Medium',
        size: 60,
        weight: 500,
        lineHeight: 100,
      },
      h2: {
        family: 'Space Grotesk',
        style: 'Medium',
        size: 40,
        weight: 500,
        lineHeight: 100,
      },
      h3: {
        family: 'Space Grotesk',
        style: 'Medium',
        size: 30,
        weight: 500,
        lineHeight: 100,
      },
      h4: {
        family: 'Space Grotesk',
        style: 'Medium',
        size: 20,
        weight: 500,
        lineHeight: 100,
      },
      p: {
        family: 'Space Grotesk',
        style: 'Regular',
        size: 18,
        weight: 400,
        lineHeight: 100,
      },
    },
    mobile: {
      h1: {
        family: 'Space Grotesk',
        style: 'Medium',
        size: 43,
        weight: 500,
        lineHeight: 100,
      },
      h2: {
        family: 'Space Grotesk',
        style: 'Medium',
        size: 36,
        weight: 500,
        lineHeight: 100,
      },
      h3: {
        family: 'Space Grotesk',
        style: 'Medium',
        size: 26,
        weight: 500,
        lineHeight: 100,
      },
      h4: {
        family: 'Space Grotesk',
        style: 'Medium',
        size: 18,
        weight: 500,
        lineHeight: 100,
      },
      p: {
        family: 'Space Grotesk',
        style: 'Regular',
        size: 16,
        weight: 400,
        lineHeight: 24,
      },
    },
  },
} as const;

// Type exports for TypeScript usage
export type FigmaColors = typeof figmaTokens.colors;
export type FigmaTypography = typeof figmaTokens.typography;

