# Figma Design Tokens

This document contains all design tokens extracted from the Figma design file.

**Source**: [Positivus Landing Page Design](https://www.figma.com/design/r0J523hnCWW51EkP8r13I0/Positivus-Landing-Page-Design--Community-?node-id=25-145&m=dev)

**Extracted via**: Figma MCP Desktop  
**Last Updated**: 2024-12-19

---

## ✅ Figma MCP Connection Status

**Status**: ✅ **CONNECTED** - Successfully retrieved tokens from Figma design

---

## 🎨 Color Tokens

| Token Name | Hex Value | Usage in Tailwind |
|------------|-----------|-------------------|
| `Black` | `#000000` | `bg-black`, `text-black` |
| `Green` | `#B9FF66` | `bg-green`, `text-green` |
| `White` | `#ffffff` | `bg-white`, `text-white` |
| `Dark` | `#191A23` | `bg-dark`, `text-dark` |
| `Grey` | `#F3F3F3` | `bg-grey`, `text-grey` |
| `Placeholder` | `#898989` | `bg-placeholder`, `text-placeholder` |

**Legacy Support**: `dark-charcoal` is also available as an alias for `Dark` (`#191A23`)

---

## 📝 Typography Tokens

### Desktop Typography

| Token | Size | Weight | Line Height | Font Family | Tailwind Class |
|-------|------|--------|-------------|-------------|----------------|
| `h1` | 60px | 500 (Medium) | 100% | Space Grotesk | `text-h1` |
| `h2` | 40px | 500 (Medium) | 100% | Space Grotesk | `text-h2` |
| `h3` | 30px | 500 (Medium) | 100% | Space Grotesk | `text-h3` |
| `h4` | 20px | 500 (Medium) | 100% | Space Grotesk | `text-h4` |
| `p` | 18px | 400 (Regular) | 100% | Space Grotesk | `text-p` |

### Mobile Typography

| Token | Size | Weight | Line Height | Font Family | Tailwind Class |
|-------|------|--------|-------------|-------------|----------------|
| `h1-mob` | 43px | 500 (Medium) | 100% | Space Grotesk | `text-h1-mob` |
| `h2-mob` | 36px | 500 (Medium) | 100% | Space Grotesk | `text-h2-mob` |
| `h3-mob` | 26px | 500 (Medium) | 100% | Space Grotesk | `text-h3-mob` |
| `h4-mob` | 18px | 500 (Medium) | 100% | Space Grotesk | `text-h4-mob` |
| `p-mob` | 16px | 400 (Regular) | 24px | Space Grotesk | `text-p-mob` |

---

## 📁 Token Files

1. **JSON Format**: `src/tokens/figma-tokens.json` - Raw token data in JSON format
2. **TypeScript Format**: `src/tokens/index.ts` - TypeScript exports with type definitions
3. **Tailwind Config**: `tailwind.config.js` - Integrated into Tailwind theme for utility classes

---

## 💻 Usage Examples

### Using Colors

```tsx
// Tailwind utility classes
<div className="bg-green text-dark">
  Content
</div>

// Programmatic access
import { figmaTokens } from '@/tokens';
const greenColor = figmaTokens.colors.green; // '#B9FF66'
```

### Using Typography

```tsx
// Desktop typography
<h1 className="text-h1 font-space-grotesk">Heading 1</h1>
<h2 className="text-h2 font-space-grotesk">Heading 2</h2>

// Mobile typography (use with responsive classes)
<h1 className="text-h1-mob md:text-h1 font-space-grotesk">Responsive Heading</h1>

// Programmatic access
import { figmaTokens } from '@/tokens';
const h1Size = figmaTokens.typography.desktop.h1.size; // 60
```

---

## 🔄 Updating Tokens

To update tokens from Figma:

1. Open the Figma design file
2. Select the node containing design tokens
3. Use Figma MCP to extract tokens:
   ```bash
   # Via Cursor AI with Figma MCP
   "Get tokens from Figma design [URL]"
   ```
4. Tokens will be automatically synced to:
   - `src/tokens/figma-tokens.json`
   - `src/tokens/index.ts`
   - `tailwind.config.js`

---

## 📊 Token Summary

- **Total Colors**: 6
- **Total Typography Tokens**: 10 (5 desktop + 5 mobile)
- **Font Family**: Space Grotesk (all typography)
- **Font Weights**: 400 (Regular), 500 (Medium)

