# Project Analysis: app-figma-mcp

## 1. Project Overview

### Tech Stack

#### Core Framework
- **Next.js 15.5.6** - React framework with App Router architecture
- **React 19.1.0** - UI library
- **React DOM 19.1.0** - React rendering library

#### Language & Type Safety
- **TypeScript 5** - Type-safe JavaScript with strict mode enabled

#### Styling System
- **Tailwind CSS 3.2.6** - Utility-first CSS framework
- **PostCSS 8.4.14** - CSS processing and transformation
- **Autoprefixer 10.4.20** - Automatic CSS vendor prefixing

#### Development Tools
- **Storybook 10.0.8** - Component development environment and documentation
- **@storybook/nextjs 10.0.8** - Next.js integration for Storybook

#### Type Definitions
- **@types/node 20** - Node.js type definitions
- **@types/react 19** - React type definitions
- **@types/react-dom 19** - React DOM type definitions

#### Typography
- **Space Grotesk** - Google Font (loaded via Next.js font optimization)
  - Weights: 400 (regular), 500 (medium)
  - Subset: Latin

### Folder Structure

```
app-figma-mcp/
├── .storybook/                    # Storybook configuration
│   ├── main.ts                    # Storybook main configuration
│   └── preview.tsx                # Storybook preview settings and decorators
├── public/                        # Static assets directory
│   └── hero.svg                   # Hero section illustration
├── src/                           # Source code directory
│   ├── app/                       # Next.js App Router directory
│   │   ├── favicon.ico            # Site favicon
│   │   ├── globals.css            # Global styles and Tailwind imports
│   │   ├── layout.tsx             # Root layout with font configuration
│   │   └── page.tsx               # Home page component
│   └── components/                # Reusable React components
│       ├── Button.tsx              # Button component implementation
│       ├── Button.stories.tsx     # Button Storybook stories (co-located)
│       ├── Colors.stories.tsx     # Design system color documentation
│       ├── Header.tsx             # Header composite component
│       └── case-studies/          # Case study components (empty)
├── next-env.d.ts                  # Next.js TypeScript environment types
├── next.config.ts                 # Next.js configuration
├── package.json                   # Project dependencies and scripts
├── package-lock.json              # Dependency lock file
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Tailwind CSS theme configuration
└── tsconfig.json                  # TypeScript compiler configuration
```

#### Directory Explanations

- **`.storybook/`** - Contains Storybook configuration files. The `main.ts` defines story discovery patterns and framework settings. The `preview.tsx` sets up global decorators and imports global styles.

- **`public/`** - Next.js static assets directory. Files here are served at the root URL path. Currently contains SVG illustrations.

- **`src/app/`** - Next.js 13+ App Router directory structure. Uses file-based routing where `page.tsx` files define routes and `layout.tsx` files define shared layouts.

- **`src/components/`** - Reusable React components organized by feature/type. Components are co-located with their Storybook stories (`.stories.tsx` files).

- **`src/components/case-studies/`** - Feature-based subdirectory for case study related components (currently empty, indicating planned expansion).

### Build System

#### Bundler
- **Next.js Built-in Bundler** - Uses Webpack/Turbopack (Next.js 15 uses Turbopack by default for development)

#### Transpiler
- **TypeScript Compiler (tsc)** - Transpiles TypeScript to JavaScript
  - Target: ES2017
  - Module: ESNext
  - Module Resolution: Bundler (Next.js optimized)

#### Build Tools Pipeline

1. **TypeScript Compilation**
   - Configuration: `tsconfig.json`
   - Path aliases: `@/*` → `./src/*`
   - Strict mode enabled
   - JSX preserved for Next.js processing

2. **CSS Processing**
   - **PostCSS** processes CSS files
   - **Tailwind CSS** generates utility classes
   - **Autoprefixer** adds vendor prefixes

3. **Next.js Build Process**
   - Compiles React components
   - Optimizes images and assets
   - Generates static pages where possible
   - Creates production bundle

#### Build Scripts

```json
{
  "dev": "next dev&storybook dev -p 6006",      // Development server + Storybook
  "build": "next build",                         // Production build
  "start": "next start",                         // Production server
  "storybook": "storybook dev -p 6006",          // Storybook only
  "build-storybook": "storybook build"           // Static Storybook build
}
```

### Key Dependencies

#### Critical Runtime Dependencies

1. **next (15.5.6)**
   - Purpose: React framework providing SSR, SSG, routing, and optimization
   - Usage: Core application framework, handles routing, API routes, and build process

2. **react (19.1.0) & react-dom (19.1.0)**
   - Purpose: UI library and DOM rendering
   - Usage: All component development, React hooks, and component lifecycle

#### Critical Development Dependencies

1. **tailwindcss (3.2.6)**
   - Purpose: Utility-first CSS framework
   - Usage: All styling throughout the application via utility classes

2. **storybook (10.0.8) & @storybook/nextjs (10.0.8)**
   - Purpose: Component development environment and documentation
   - Usage: Component isolation, testing, and design system documentation

3. **typescript (5)**
   - Purpose: Type safety and developer experience
   - Usage: All source code is written in TypeScript

4. **postcss (8.4.14) & autoprefixer (10.4.20)**
   - Purpose: CSS processing and vendor prefixing
   - Usage: Processes Tailwind CSS and adds browser compatibility

---

## 2. Design System Architecture

### Token System

#### Location and Organization

Design tokens are primarily located in **`tailwind.config.js`** under the `theme.extend` object. This follows Tailwind's configuration-based token system.

**File Location**: `/tailwind.config.js`

#### Token Format

Tokens are defined as JavaScript objects within the Tailwind configuration file. The format follows Tailwind's theme extension pattern:

```javascript
module.exports = {
  theme: {
    extend: {
      // Token definitions here
    }
  }
}
```

#### Token Categories and Organization

##### Colors

**Location**: `tailwind.config.js` → `theme.extend.colors`

**Current Tokens**:
- `dark-charcoal: '#191A23'` - Primary dark color

**Usage Pattern**:
```tsx
// In components
className="bg-dark-charcoal text-white"
```

**Naming Convention**: kebab-case with descriptive names (e.g., `dark-charcoal`)

##### Typography

**Location**: `tailwind.config.js` → `theme.extend.fontFamily` and `theme.extend.fontSize`

**Font Family Tokens**:
- `space-grotesk: ['var(--font-space-grotesk)', 'sans-serif']`

**Font Size Tokens**:
- `header-title: ['60px', { lineHeight: 'normal', fontWeight: '500' }]`
- `header-description: ['20px', { lineHeight: '28px', fontWeight: '400' }]`
- `header-button: ['20px', { lineHeight: '28px', fontWeight: '400' }]`

**Usage Pattern**:
```tsx
className="font-space-grotesk text-header-title"
```

**Naming Convention**: Semantic names describing usage context (e.g., `header-title`, `header-description`)

##### Spacing

**Location**: `tailwind.config.js` → `theme.extend.spacing`

**Current Tokens**:
- `header-padding-x: '100px'`
- `header-content-gap: '35px'`
- `header-button-padding-x: '35px'`
- `header-button-padding-y: '20px'`

**Usage Pattern**:
```tsx
className="px-header-padding-x gap-header-content-gap"
```

**Naming Convention**: Context-based naming (component/area + property + direction)

##### Border Radius

**Location**: `tailwind.config.js` → `theme.extend.borderRadius`

**Current Tokens**:
- `header-button: '14px'`

**Usage Pattern**:
```tsx
className="rounded-header-button"
```

##### Width

**Location**: `tailwind.config.js` → `theme.extend.width`

**Current Tokens**:
- `header-title: '531px'`
- `header-description: '498px'`

**Usage Pattern**:
```tsx
className="w-header-title"
```

#### Token Naming Conventions and Hierarchy

**Hierarchy Pattern**:
```
[component/area]-[property]-[modifier/direction]
```

**Examples**:
- `header-padding-x` - Header component, padding property, x-axis direction
- `header-button-padding-y` - Header component, button element, padding property, y-axis direction
- `dark-charcoal` - Color description (no component prefix for global colors)

**Conventions**:
1. **Component-scoped tokens** use component name prefix (e.g., `header-*`)
2. **Global tokens** use descriptive names without prefix (e.g., `dark-charcoal`)
3. **Kebab-case** for all token names
4. **Semantic naming** over generic values (e.g., `header-title` vs `text-60px`)

#### Token Transformation Pipelines

**Current Pipeline**:
1. **Token Definition** → Defined in `tailwind.config.js`
2. **Tailwind Processing** → Tailwind reads config and generates utility classes
3. **PostCSS Processing** → PostCSS processes the generated CSS
4. **Autoprefixer** → Adds vendor prefixes
5. **Next.js Optimization** → Next.js optimizes and bundles CSS

**No External Token System**: The project does not use Style Dictionary or other token transformation tools. Tokens are directly consumed by Tailwind CSS.

#### Example Code Snippets Showing Token Usage

**Color Token Usage**:
```tsx
// Button component
<button className="bg-dark-charcoal text-white">
  Click me
</button>
```

**Typography Token Usage**:
```tsx
// Header component
<h1 className="font-space-grotesk text-header-title">
  Navigating the digital landscape
</h1>
<p className="font-space-grotesk text-header-description">
  Our digital marketing agency helps businesses...
</p>
```

**Spacing Token Usage**:
```tsx
// Header component with spacing tokens
<div className="px-header-padding-x gap-header-content-gap">
  <Button className="px-header-button-padding-x py-header-button-padding-y">
    Book a consultation
  </Button>
</div>
```

**Complete Component Example**:
```12:14:src/components/Button.tsx
export default function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-dark-charcoal disabled:bg-opacity-50 text-white font-space-grotesk text-xl leading-[28px] px-[35px] py-[20px] rounded-[14px] whitespace-nowrap w-full sm:w-auto"
      {...props}
    >
      {children || "Book a consultation"}
    </button>
  );
}
```

### Component Library

#### Component Directory Structure and Organization Patterns

**Primary Location**: `src/components/`

**Current Structure**:
```
src/components/
├── Button.tsx              # Atomic component
├── Button.stories.tsx      # Co-located Storybook stories
├── Colors.stories.tsx      # Design system documentation
├── Header.tsx              # Composite component
└── case-studies/           # Feature-based subdirectory (empty)
```

**Organization Pattern**: **Hybrid Approach**
- **Flat structure** for core/atomic components (Button, Header)
- **Feature-based subdirectories** for domain-specific components (case-studies/)
- **Co-location** of components and their Storybook stories

#### Component Architecture

**Pattern**: **Atomic Design Principles** (partially implemented)

- **Atoms**: Basic building blocks (Button)
- **Molecules**: Simple component groups (Header - combines Button with text and image)
- **Organisms**: Complex component compositions (planned in case-studies/)

**Current Implementation**:
- Atomic components are at the root of `components/`
- Composite components are also at root (Header)
- Feature-based organization is emerging (case-studies/)

#### Naming Conventions for Components and Files

**Component Files**:
- **PascalCase** for component files: `Button.tsx`, `Header.tsx`
- **Extension**: `.tsx` for TypeScript React components

**Storybook Files**:
- **Co-located** with components: `ComponentName.stories.tsx`
- **Naming**: `[ComponentName].stories.tsx`

**Component Names**:
- **PascalCase** for component names: `Button`, `Header`
- **Default export** pattern (not named exports)

**Example**:
```tsx
// File: src/components/Button.tsx
export default function Button({ ... }) { ... }
```

#### Props/API Patterns and Conventions

**Standard Pattern**:
1. **Props spreading** - Components accept and forward HTML attributes using `{...props}`
2. **TypeScript types** - Use React's built-in HTML attribute types
3. **Children support** - Most components accept `children` prop
4. **Default values** - Sensible defaults for optional props

**Example Pattern**:
```tsx
export default function Button({ 
  children, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="..."
      {...props}
    >
      {children || "Default text"}
    </button>
  );
}
```

**Key Conventions**:
- Use `React.HTMLAttributes<HTMLElement>` or specific types like `React.ButtonHTMLAttributes<HTMLButtonElement>`
- Always spread `{...props}` to allow HTML attribute customization
- Provide default content for `children` when appropriate

#### Documentation System

**Tool**: **Storybook 10.0.8**

**Configuration Location**: `.storybook/`

**Story Discovery Pattern**: 
```typescript
stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"]
```

**Story Organization**:
- Stories are **co-located** with components
- Story titles use hierarchical naming: `'Components/Button'`, `'Design System/Colors'`

**Story Structure Pattern**:
```tsx
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: { /* prop documentation */ }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { ... } };
```

**Documentation Features**:
- **Auto-docs** enabled via `tags: ['autodocs']`
- **Controls** for interactive prop testing
- **ArgTypes** for prop documentation and control configuration

#### Example of a Well-Structured Component with Annotations

```tsx
// File: src/components/Button.tsx

import React from 'react';

/**
 * Button Component
 * 
 * A reusable button component following the design system.
 * Supports all standard HTML button attributes via props spreading.
 * 
 * @example
 * <Button onClick={handleClick}>Click me</Button>
 * <Button disabled>Disabled</Button>
 */
export default function Button({ 
  children, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      // Design tokens: bg-dark-charcoal, rounded-[14px]
      // Responsive: w-full sm:w-auto (mobile-first)
      // Typography: font-space-grotesk, text-xl
      className="bg-dark-charcoal disabled:bg-opacity-50 text-white font-space-grotesk text-xl leading-[28px] px-[35px] py-[20px] rounded-[14px] whitespace-nowrap w-full sm:w-auto"
      {...props} // Forwards all HTML button attributes
    >
      {children || "Book a consultation"} {/* Default text fallback */}
    </button>
  );
}
```

**Annotations Breakdown**:
1. **TypeScript types** - `React.ButtonHTMLAttributes<HTMLButtonElement>` provides full type safety
2. **Props spreading** - `{...props}` allows customization of any HTML button attribute
3. **Design tokens** - Uses theme colors and spacing values
4. **Responsive design** - Mobile-first approach with `sm:` breakpoint
5. **Default content** - Provides fallback text for empty children

### Styling System

#### CSS Methodology

**Primary Method**: **Tailwind CSS (Utility-First)**

**Approach**: Utility classes applied directly to JSX elements via `className` prop.

**No Additional CSS Methodologies**: The project does not use:
- CSS Modules
- Styled Components
- Emotion
- CSS-in-JS libraries
- Separate CSS files (except `globals.css` for Tailwind imports)

#### Theme Configuration Location and Structure

**Location**: `/tailwind.config.js`

**Structure**:
```javascript
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}", ".storybook/preview.tsx"],
  theme: {
    extend: {
      colors: { /* color tokens */ },
      fontFamily: { /* typography tokens */ },
      fontSize: { /* font size tokens */ },
      spacing: { /* spacing tokens */ },
      borderRadius: { /* border radius tokens */ },
      width: { /* width tokens */ }
    }
  },
  plugins: []
}
```

**Content Configuration**: Scans all TypeScript/JavaScript files in `src/` and Storybook preview for class name extraction.

#### Global Styles Organization

**Location**: `src/app/globals.css`

**Content Structure**:
```css
/* Tailwind Directives */
@tailwind base;      /* Tailwind base styles */
@tailwind components; /* Tailwind component classes */
@tailwind utilities;  /* Tailwind utility classes */

/* CSS Custom Properties */
:root {
  --font-space-grotesk: 'Space Grotesk', sans-serif;
}

/* Global Element Styles */
body {
  font-family: var(--font-space-grotesk);
}
```

**Organization**:
1. **Tailwind imports** at the top
2. **CSS variables** for font configuration
3. **Global element styles** (minimal, most styling via Tailwind)

**Font Loading**: Fonts are loaded via Next.js font optimization in `layout.tsx`, and the CSS variable is set in `globals.css`.

#### Responsive Design Approach

**Strategy**: **Mobile-First**

**Breakpoint System**: Uses Tailwind's default breakpoint system:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

**Implementation Pattern**:
```tsx
// Mobile-first: base styles for mobile, sm: for larger screens
className="text-3xl sm:text-header-title w-full sm:w-header-title"
```

**Example from Header Component**:
```tsx
// Mobile: flex-col-reverse, text-center, text-3xl
// Desktop (sm:): flex-row, text-left, text-header-title
<div className="flex sm:flex-row flex-col-reverse">
  <h1 className="sm:text-left text-center text-3xl sm:text-header-title">
    Title
  </h1>
</div>
```

**Responsive Utilities Used**:
- Layout: `flex-col sm:flex-row`
- Typography: `text-3xl sm:text-header-title`
- Spacing: `px-5 sm:px-header-padding-x`
- Width: `w-full sm:w-auto`

#### Animation/Transition Patterns

**Current State**: **No animations or transitions defined**

The project does not currently use:
- Tailwind animation utilities
- Custom animation classes
- CSS transitions
- Animation libraries (Framer Motion, etc.)

**Potential Implementation**:
Animations would be added via:
1. Tailwind's built-in animation utilities (`animate-*`)
2. Custom animations in `tailwind.config.js` → `theme.extend.animation`
3. CSS transitions via Tailwind's `transition-*` utilities

#### Example Styling Patterns with Code Snippets

**Pattern 1: Component with Design Tokens**
```tsx
// Uses theme tokens: bg-dark-charcoal, font-space-grotesk
<button className="bg-dark-charcoal font-space-grotesk">
  Click me
</button>
```

**Pattern 2: Responsive Mobile-First Design**
```9:26:src/components/Header.tsx
    <div className="box-border content-stretch flex sm:flex-row flex-col-reverse items-start justify-between px-5 sm:px-header-padding-x py-0 relative">
      <div className="content-stretch flex flex-col gap-5 sm:gap-header-content-gap items-start ">
        <div className="flex flex-col gap-2.5 sm:gap-header-content-gap">
        <h1 className="sm:text-left text-center font-space-grotesk font-medium leading-normal relative shrink-0 text-3xl sm:text-header-title text-black sm:w-header-title">
          Navigating the digital landscape for success
        </h1>
        <p className="sm:text-left text-center font-space-grotesk font-normal leading-[28px] text-md sm:text-header-description text-black sm:w-header-description">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        </div>
        <Button >
          Book a consultation
        </Button>
      </div>
      <div className='w-full h-full'>
        <Image src={imgFrame} alt="Frame" className='w-full h-full' />
      </div>
    </div>
```

**Pattern 3: Conditional Styling**
```tsx
// Disabled state styling
<button className="bg-dark-charcoal disabled:bg-opacity-50">
  Button
</button>
```

**Pattern 4: Arbitrary Values (when tokens don't exist)**
```tsx
// Using arbitrary values: leading-[28px], rounded-[14px]
className="leading-[28px] rounded-[14px]"
```

**Pattern 5: Combining Utilities**
```tsx
// Multiple utilities: layout, spacing, typography, colors
className="flex flex-col gap-5 font-space-grotesk text-header-title text-black"
```

### Icon Management

#### Icon Storage Location and Format

**Location**: `public/` directory

**Current Icons/Assets**:
- `public/hero.svg` - SVG illustration for hero section

**Format**: **SVG (Scalable Vector Graphics)**

**Rationale**: SVG format provides:
- Scalability without quality loss
- Small file sizes
- CSS styling capabilities
- Accessibility support

#### Icon Import/Usage Patterns

**Pattern**: **Next.js Image Component with Static Import**

**Current Implementation**:
```tsx
// In Header.tsx
import Image from 'next/image';
import imgFrame from '/public/hero.svg';

<Image src={imgFrame} alt="Frame" className='w-full h-full' />
```

**Alternative Pattern** (for future icons):
```tsx
// Direct path usage
<Image src="/icon-name.svg" alt="Description" />
```

**Next.js Image Benefits**:
- Automatic optimization
- Lazy loading
- Responsive image handling
- Built-in performance optimizations

#### Icon Naming Conventions

**Current State**: **No established convention yet**

**Recommendation for Future**:
- **kebab-case**: `icon-name.svg`
- **Descriptive names**: `icon-arrow-right.svg`, `icon-close.svg`
- **Size variants**: `icon-check-16.svg`, `icon-check-24.svg` (if needed)
- **Category prefixes**: `icon-social-twitter.svg`, `icon-ui-menu.svg`

#### Icon Optimization Workflow

**Current Workflow**:
1. **Place SVG in `public/`** directory
2. **Import using Next.js Image** component
3. **Next.js handles optimization** automatically

**Future Optimization Opportunities**:
1. **SVG Sprite System** - Combine icons into sprite sheet
2. **Icon Component Library** - Create React components for each icon
3. **SVG Optimization Tools** - Use SVGO to minify SVGs before adding
4. **Icon Font** - Convert to icon font if many small icons needed
5. **Inline SVG** - For simple icons, inline SVG in components

**Example Icon Component Pattern** (recommended for future):
```tsx
// src/components/icons/IconCheck.tsx
export default function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      {/* SVG path data */}
    </svg>
  );
}
```

#### Example Icon Implementation

**Current Implementation**:
```23:25:src/components/Header.tsx
      <div className='w-full h-full'>
        <Image src={imgFrame} alt="Frame" className='w-full h-full' />
      </div>
```

**Future Icon Component Pattern** (recommended):
```tsx
// src/components/icons/IconArrowRight.tsx
import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export default function IconArrowRight({ 
  className = '', 
  size = 24 
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Usage
<IconArrowRight className="text-dark-charcoal" size={20} />
```

**Benefits of Component Pattern**:
- Type-safe props
- Consistent sizing and styling
- Easy to maintain and update
- Can use Tailwind classes for colors via `currentColor`
- Better tree-shaking than image imports

---

## Summary

This project is a **Next.js 15 application** with a **Tailwind CSS-based design system** and **Storybook documentation**. The design tokens are centralized in the Tailwind configuration, components follow atomic design principles, and the styling system uses a utility-first approach with mobile-first responsive design. The project is in early stages with a solid foundation for scaling the design system.

