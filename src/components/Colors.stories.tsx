import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Type definition for nested color structure
type ColorValue = string | { [key: string]: ColorValue };
type ThemeColors = Record<string, ColorValue>;

// Import colors directly from tailwind.config.js
const getThemeColors = (): ThemeColors => {
  // Use require to import CommonJS module
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const tailwindConfig = require('../../tailwind.config.js');
  
  // Handle both function and object configs
  const config = typeof tailwindConfig === 'function' 
    ? tailwindConfig({}) 
    : tailwindConfig;
  
  // Extract colors from theme.extend.colors
  return (config.theme?.extend?.colors || {}) as ThemeColors;
};

const themeColors: ThemeColors = getThemeColors();

// Flatten nested color structure into a flat map with full paths
const flattenColors = (colors: ThemeColors, prefix = ''): Record<string, string> => {
  const flattened: Record<string, string> = {};

  for (const [key, value] of Object.entries(colors)) {
    const fullKey = prefix ? `${prefix}-${key}` : key;

    if (typeof value === 'string') {
      // Direct color value
      flattened[fullKey] = value;
    } else if (typeof value === 'object' && value !== null) {
      // Nested color object
      const nested = flattenColors(value as ThemeColors, fullKey);
      Object.assign(flattened, nested);
    }
  }

  return flattened;
};

const ColorSwatch = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg">
      <div
        className="w-32 h-32 rounded-lg border border-gray-300 shadow-sm"
        style={{ backgroundColor: value }}
      />
      <div className="text-center">
        <div className="font-semibold text-sm text-gray-900">{name}</div>
        <div className="text-xs text-gray-600 font-mono mt-1">{value}</div>
      </div>
    </div>
  );
};

const ColorsPreview = () => {
  const flattenedColors = flattenColors(themeColors);

  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Theme Colors</h1>
      <p className="text-gray-600 mb-8">
        All colors registered in <code className="bg-gray-100 px-2 py-1 rounded">tailwind.config.js</code> theme.extend.colors
        <br />
        <span className="text-sm text-gray-500 mt-2 block">
          Supports both flat and nested color structures
        </span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.entries(flattenedColors).map(([name, value]) => (
          <ColorSwatch key={name} name={name} value={value} />
        ))}
      </div>
      {Object.keys(flattenedColors).length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No custom colors found in theme.extend.colors
        </div>
      )}
    </div>
  );
};

const meta = {
  title: 'Design System/Colors',
  component: ColorsPreview,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorsPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {};

