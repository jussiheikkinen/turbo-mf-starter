# Component Library

A shared component library built with shadcn/ui, Tailwind CSS v4, and Vite.

## Features

- 🎨 **Tailwind CSS v4** - Modern CSS-first configuration
- 🧩 **shadcn/ui** - Beautiful, accessible components
- ⚡ **Vite** - Fast build and development
- 📦 **TypeScript** - Full type safety
- 🎭 **Dark mode** - Built-in theme support

## Installation

In your consuming app:

```bash
pnpm add component-library --filter your-app
```

## Usage

### Import Components

```tsx
import { Button } from 'component-library';

function App() {
  return <Button variant="default">Click me</Button>;
}
```

### Import Styles (Automatic)

Styles are automatically included when you import the library. No additional CSS import needed.

### Import Styles (Manual)

If you need to import styles separately:

```tsx
import 'component-library/styles';
```

## Available Components

- **Button** - Versatile button component with multiple variants
  - Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
  - Sizes: `default`, `sm`, `lg`, `icon`

## Utilities

- **cn()** - Utility for merging Tailwind classes with `clsx` and `tailwind-merge`

```tsx
import { cn } from 'component-library';

const className = cn('text-base', isActive && 'font-bold');
```

## Development

```bash
# Build the library
pnpm build --filter component-library

# Watch mode for development
pnpm dev --filter component-library

# Type checking
pnpm check-types --filter component-library
```

## Adding New Components

Use shadcn CLI to add new components:

```bash
cd packages/component-library
npx shadcn@latest add [component-name]
```

Then export them from `lib/index.ts`.