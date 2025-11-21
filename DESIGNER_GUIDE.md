# Designer Integration Guide

This document provides a comprehensive analysis of the project structure, tech stack, and guidelines for integrating new components into this Next.js application.

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Component Integration Guide](#component-integration-guide)
- [Styling Guidelines](#styling-guidelines)
- [Storybook Integration](#storybook-integration)
- [Best Practices](#best-practices)

---

## 🛠 Tech Stack

### Core Framework
- **Next.js 15.5.6** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling
- **Tailwind CSS 3.2.6** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Development Tools
- **Storybook 10.0.8** - Component development and documentation
- **@storybook/nextjs** - Next.js integration for Storybook

### Typography
- **Space Grotesk** - Google Font (weights: 400, 500)

---

## 📁 Project Structure

```
app-figma-mcp/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with font configuration
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles and Tailwind imports
│   └── components/             # Reusable components
│       ├── Button.tsx          # Component implementation
│       ├── Button.stories.tsx  # Storybook stories (co-located)
│       └── Header.tsx          # Example composite component
├── public/                      # Static assets
│   └── hero.svg
├── .storybook/                  # Storybook configuration
│   └── preview.tsx             # Storybook preview settings
├── tailwind.config.js          # Tailwind theme configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Dependencies and scripts
```

### Key Directories

- **`src/app/`** - Next.js App Router pages and layouts
- **`src/components/`** - All reusable React components
- **`public/`** - Static assets (images, icons, etc.)
- **`.storybook/`** - Storybook configuration files

### Path Aliases

The project uses TypeScript path aliases:
- `@/*` maps to `./src/*`
- Example: `import Button from '@/components/Button'`

---

## 🧩 Component Integration Guide

### Step 1: Create Component File

Create a new component file in `src/components/` following this naming convention:
- **File name**: `ComponentName.tsx` (PascalCase)
- **Location**: `src/components/ComponentName.tsx`

### Step 2: Component Structure Template

```tsx
import React from 'react';

export default function ComponentName({ 
  children, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="your-tailwind-classes"
      {...props}
    >
      {children}
    </div>
  );
}
```

### Step 3: Component Patterns

#### Basic Component Example (Button)

```tsx
import React from 'react';

export default function Button({ 
  children, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-dark-charcoal disabled:bg-opacity-50 text-white font-space-grotesk text-xl leading-[28px] px-[35px] py-[20px] rounded-[14px] whitespace-nowrap w-full sm:w-auto"
      {...props}
    >
      {children || "Default text"}
    </button>
  );
}
```

#### Key Patterns:
1. **Default Export** - Components use default export
2. **Props Spreading** - Use `{...props}` to forward HTML attributes
3. **TypeScript Types** - Use appropriate React HTML attribute types
4. **Children Support** - Accept `children` prop for flexibility

### Step 4: Create Storybook Story

Create a corresponding `.stories.tsx` file co-located with your component:

**File**: `src/components/ComponentName.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import ComponentName from './ComponentName';

const meta = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Component content',
    },
    // Add more argTypes as needed
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default content',
  },
};

export const Variant: Story = {
  args: {
    children: 'Variant content',
  },
};
```

### Step 5: Use Component in Pages

Import and use the component in your Next.js pages:

```tsx
import ComponentName from '@/components/ComponentName';

export default function Page() {
  return (
    <div>
      <ComponentName>Content</ComponentName>
    </div>
  );
}
```

---

## 🎨 Styling Guidelines

### Tailwind CSS Configuration

The project uses a custom Tailwind theme with extended values. Check `tailwind.config.js` for available custom values.

#### Custom Theme Values

**Colors:**
- `dark-charcoal`: `#191A23`

**Fonts:**
- `font-space-grotesk`: Space Grotesk font family

**Typography:**
- `text-header-title`: `60px` with normal line height, weight 500
- `text-header-description`: `20px` with 28px line height, weight 400
- `text-header-button`: `20px` with 28px line height, weight 400

**Spacing:**
- `header-padding-x`: `100px`
- `header-content-gap`: `35px`
- `header-button-padding-x`: `35px`
- `header-button-padding-y`: `20px`

**Border Radius:**
- `rounded-header-button`: `14px`

**Width:**
- `w-header-title`: `531px`
- `w-header-description`: `498px`

### Styling Best Practices

1. **Use Custom Theme Values** - Prefer custom theme values over arbitrary values when available
2. **Responsive Design** - Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.)
3. **Consistent Spacing** - Use Tailwind spacing scale or custom spacing values
4. **Font Consistency** - Always use `font-space-grotesk` for text
5. **Color Usage** - Use theme colors (`dark-charcoal`) instead of hardcoded hex values

### Example Styling Pattern

```tsx
// ✅ Good - Uses custom theme values and responsive design
<div className="font-space-grotesk text-header-title sm:text-header-description px-header-padding-x bg-dark-charcoal">

// ❌ Bad - Hardcoded values
<div className="font-sans text-[60px] px-[100px] bg-[#191A23]">
```

---

## 📚 Storybook Integration

### Running Storybook

```bash
npm run storybook
```

Stories are automatically discovered and displayed in Storybook.

### Storybook Configuration

The project includes:
- **Font Loading** - Space Grotesk font is loaded in `.storybook/preview.tsx`
- **Global Styles** - `globals.css` is imported for Tailwind styles
- **Decorators** - Font variable is applied to all stories

### Story Structure

Each story file should:
1. Import the component
2. Define meta with title, component, and argTypes
3. Export default meta
4. Create multiple Story variants

### Story Categories

Organize stories using the `title` field:
- `'Components/ComponentName'` - For basic components
- `'Layout/ComponentName'` - For layout components
- `'Forms/ComponentName'` - For form components

---

## ✅ Best Practices

### Component Development

1. **TypeScript First** - Always type your component props
2. **Accessibility** - Use semantic HTML and ARIA attributes when needed
3. **Responsive Design** - Design mobile-first, enhance for larger screens
4. **Prop Forwarding** - Use `{...props}` to allow HTML attribute customization
5. **Default Values** - Provide sensible defaults for optional props

### File Organization

1. **Co-location** - Keep stories next to components (`.stories.tsx` files)
2. **Naming Convention** - Use PascalCase for component files
3. **One Component Per File** - Each file should export one component
4. **Barrel Exports** - Consider creating `index.ts` for component directories if needed

### Code Quality

1. **Consistent Formatting** - Follow existing code style
2. **Comments** - Add comments for complex logic
3. **Reusability** - Design components to be reusable and composable
4. **Performance** - Use React best practices (memoization when needed)

### Testing Components

1. **Storybook First** - Develop and test components in Storybook
2. **Multiple Variants** - Create stories for different states and variants
3. **Interactive Testing** - Use Storybook controls to test prop variations

---

## 🚀 Quick Start Checklist

When adding a new component:

- [ ] Create component file in `src/components/ComponentName.tsx`
- [ ] Use TypeScript with proper prop types
- [ ] Apply Tailwind classes using custom theme values
- [ ] Make component responsive (mobile-first)
- [ ] Create Storybook story file `ComponentName.stories.tsx`
- [ ] Add multiple story variants (Default, Disabled, etc.)
- [ ] Test component in Storybook (`npm run storybook`)
- [ ] Import and use in pages using `@/components/ComponentName`
- [ ] Follow existing naming and code style conventions

---

## 📖 Example: Adding a New Card Component

### 1. Create `src/components/Card.tsx`

```tsx
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export default function Card({ 
  title, 
  description, 
  children, 
  className = '',
  ...props 
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-md font-space-grotesk ${className}`}
      {...props}
    >
      {title && (
        <h3 className="text-header-title text-dark-charcoal mb-4">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-header-description text-gray-600 mb-4">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
```

### 2. Create `src/components/Card.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    description: {
      control: 'text',
      description: 'Card description',
    },
    children: {
      control: 'text',
      description: 'Card content',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a card description',
    children: 'Card content goes here',
  },
};

export const WithoutDescription: Story = {
  args: {
    title: 'Simple Card',
    children: 'Content only',
  },
};
```

### 3. Use in a Page

```tsx
import Card from '@/components/Card';

export default function Page() {
  return (
    <div className="p-8">
      <Card title="Welcome" description="This is a card component">
        <p>Card content</p>
      </Card>
    </div>
  );
}
```

---

## 🔗 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📝 Notes

- This project uses Next.js App Router (not Pages Router)
- All components should be server-compatible (no client-side only features without 'use client')
- The project follows a design system based on the Figma file referenced in README.md
- Custom Tailwind theme values should be added to `tailwind.config.js` for consistency

---

*Last updated: Based on project analysis*

