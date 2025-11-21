import type { Preview } from '@storybook/nextjs'
import React from 'react'
import { Space_Grotesk } from "next/font/google"
import "../src/app/globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-space-grotesk",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={spaceGrotesk.variable}>
        <Story />
      </div>
    ),
  ],
};

export default preview;

