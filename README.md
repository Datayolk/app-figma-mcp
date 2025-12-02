# Figma MCP Integration with Atomic Design

A Next.js application demonstrating how to integrate **Figma Model Context Protocol (MCP)** into a codebase using **Atomic Design principles**. This project showcases a seamless workflow from Figma designs to production-ready React components.

## 🎯 Project Overview

This project bridges the gap between design and development by leveraging Figma MCP to extract design specifications directly from Figma files and transform them into a structured, maintainable component library following atomic design methodology.

**Figma File**: [Positivus Landing Page Design](https://www.figma.com/community/file/1230604708032389430/positivus-landing-page-design)

## 🧩 What is Atomic Design?

Atomic Design is a methodology for creating design systems by breaking down interfaces into fundamental building blocks:

1. **Atoms** - Basic building blocks (buttons, inputs, labels)
2. **Molecules** - Simple combinations of atoms (form fields, search bars)
3. **Organisms** - Complex components (headers, forms, navigation)
4. **Templates** - Page-level layouts
5. **Pages** - Specific instances of templates

### Project Structure

```
src/components/
├── Button.tsx              # Atom - Basic button component
├── Button.stories.tsx      # Storybook documentation
├── Header.tsx              # Organism - Complex header using Button
└── case-studies/           # Organisms - More complex components
```

## 🔗 Figma MCP Integration

Figma MCP (Model Context Protocol) enables AI assistants to directly interact with Figma designs, extract design tokens, component specifications, and generate code that matches the design system.

### How It Works

1. **Design Extraction**: Use Figma MCP tools to extract design context from selected Figma nodes
2. **Component Generation**: Transform design specifications into React components
3. **Atomic Organization**: Structure components following atomic design principles
4. **Design System Sync**: Maintain consistency between Figma and codebase

### Integration Workflow

```
Figma Design → MCP Extraction → Atomic Component → Storybook → Production
```

#### Example: From Figma to Code

1. **Select a design element in Figma** (e.g., a button)
2. **Extract design context** using Figma MCP:
   - Colors, typography, spacing
   - Component structure and variants
   - Responsive breakpoints
3. **Create atomic component** (`Button.tsx`):
   ```tsx
   // Atom level - Basic, reusable button
   export default function Button({ children, ...props }) {
     return (
       <button className="bg-dark-charcoal text-white font-space-grotesk...">
         {children}
       </button>
     );
   }
   ```
4. **Build organisms** using atoms (`Header.tsx`):
   ```tsx
   // Organism level - Complex component using Button atom
   export default function Header() {
     return (
       <div>
         <h1>Title</h1>
         <Button>Book a consultation</Button>
       </div>
     );
   }
   ```
5. **Document in Storybook** for visual testing and documentation

## 🏗️ Architecture

### Tech Stack

- **Next.js 15.5.6** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 3.2.6** - Utility-first styling
- **Storybook 10.0.8** - Component development and documentation

### Design System Integration

Design tokens from Figma are mapped to Tailwind configuration:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'dark-charcoal': '#191A23', // From Figma
    },
    fontSize: {
      'header-title': ['60px', { lineHeight: 'normal' }], // From Figma
    },
    // ... more design tokens
  }
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Figma Desktop App (for MCP integration)
- Cursor IDE (with Figma MCP server configured)

### Installation

```bash
npm install
```

### Development

```bash
# Run Next.js dev server and Storybook
npm run dev

# Or run separately
npm run storybook  # Component development
```

### Using Figma MCP

1. Open the Figma file in Figma Desktop
2. Select a design element
3. Use Cursor's Figma MCP integration to extract design context
4. Generate components following atomic design principles

## 📚 Component Examples

### Atom: Button Component

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

### Organism: Header Component

The Header component demonstrates how atoms (Button) are composed into larger organisms:

```7:28:src/components/Header.tsx
export default function Header() {
  return (
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
  );
}
```

## 🎨 Design System Principles

1. **Atomic Hierarchy**: Build from smallest to largest components
2. **Reusability**: Atoms are used across multiple organisms
3. **Consistency**: Design tokens ensure visual harmony
4. **Documentation**: Storybook provides living documentation
5. **Type Safety**: TypeScript ensures component contracts

## 📖 Documentation

- **[Designer Guide](./DESIGNER_GUIDE.md)** - Comprehensive guide for integrating new components
- **Storybook** - Visual component documentation and testing
- **Component Stories** - Examples and variants for each component

## 🔄 Workflow Benefits

- ✅ **Design-to-Code Fidelity**: Direct extraction from Figma ensures accuracy
- ✅ **Maintainable Structure**: Atomic design promotes reusability
- ✅ **Type Safety**: TypeScript catches errors early
- ✅ **Visual Testing**: Storybook enables isolated component development
- ✅ **Design System Sync**: Single source of truth in Figma

## 🤝 Contributing

When adding new components:

1. Extract design from Figma using MCP
2. Create component following atomic design principles
3. Add Storybook stories for documentation
4. Update Tailwind config with design tokens
5. Compose into larger organisms as needed

See [DESIGNER_GUIDE.md](./DESIGNER_GUIDE.md) for detailed guidelines.

---

Built with ❤️ using Figma MCP and Atomic Design principles.
