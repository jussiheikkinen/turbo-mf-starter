# Turbo MF Starter

A Turborepo monorepo starter with React applications using Rsbuild and Module Federation for micro-frontend architecture.

## Project Overview

This project demonstrates a scalable micro-frontend setup using Turborepo for monorepo management, Rsbuild for fast builds, and Module Federation for runtime code sharing between applications.

## Architecture

The monorepo contains four React applications:

- **app-shell** (Host): Main application that consumes remote components from other apps
- **app-1** (Remote): Exposes an App component
- **app-bar** (Remote): Exposes an App component
- **nav-bar** (Remote): Exposes an App component

All apps run on separate ports and communicate via Module Federation.

## Tech Stack

- **Build Tool**: Rsbuild (based on Rspack)
- **Monorepo**: Turborepo with pnpm
- **Frontend**: React 19 with TypeScript
- **Module Federation**: @module-federation/rsbuild-plugin
- **Linting/Formatting**: Biome
- **Package Manager**: pnpm

## Features

- ⚡ Fast development with Rsbuild and hot reloading
- 🔗 Module Federation for micro-frontend architecture
- 📦 Monorepo management with Turborepo
- 🎯 TypeScript with federated type sharing
- 🛠️ Automated linting and formatting with Biome
- 🚀 Optimized builds with Rsbuild

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd turbo-mf-starter

# Install dependencies
pnpm install
```

### Development

Start all applications in development mode:

```bash
pnpm dev
```

This will start:
- app-shell on http://localhost:3000 (opens browser)
- app-1 on http://localhost:3001
- app-bar on http://localhost:3002
- nav-bar on http://localhost:3003

The app-shell will dynamically load and render components from the remote applications.

### Building

Build all applications:

```bash
pnpm build
```

Build specific app:

```bash
pnpm build --filter <app-name>
```

### Type Checking

Check types across all apps:

```bash
pnpm check-types
```

### Linting and Formatting

Check code with Biome:

```bash
pnpm check
```

Format code with Biome:

```bash
pnpm format
```

## Module Federation Setup

### Remote Applications

Each remote app exposes its `App` component:

```typescript
// module-federation.config.ts
export default pluginModuleFederation({
  name: 'app_1', // Valid identifier
  exposes: {
    './App': './src/App.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  dts: true, // Enable type sharing
});
```

### Host Application

The host consumes remote components:

```typescript
// module-federation.config.ts
export default pluginModuleFederation({
  name: 'app-shell',
  remotes: {
    app1: 'app_1@http://localhost:3001/mf-manifest.json',
    appbar: 'app_bar@http://localhost:3002/mf-manifest.json',
    navbar: 'nav_bar@http://localhost:3003/mf-manifest.json',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  dts: true,
});
```

### TypeScript Configuration

For type sharing in the host:

```json
// apps/app-shell/tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "*": ["./@mf-types/*"]
    }
  },
  "include": ["src", "./@mf-types/*"]
}
```

## Project Structure

```
turbo-mf-starter/
├── apps/
│   ├── app-shell/          # Host application
│   ├── app-1/             # Remote application
│   ├── app-bar/           # Remote application
│   └── nav-bar/           # Remote application
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

Each app contains:
- `src/` - Source code
- `rsbuild.config.ts` - Build configuration
- `module-federation.config.ts` - MF configuration
- `tsconfig.json` - TypeScript config
- `package.json` - Dependencies

## Scripts

- `pnpm dev` - Start all apps in development
- `pnpm build` - Build all apps
- `pnpm check-types` - Type check all apps
- `pnpm check` - Lint all apps with Biome
- `pnpm format` - Format all apps with Biome

## Development Workflow

1. Make changes to remote apps
2. Remote apps automatically expose updated components
3. Host app dynamically loads new versions
4. TypeScript provides full IntelliSense for remote components

## Contributing

1. Follow the existing code style (Biome formatting)
2. Run `pnpm check-types` before committing
3. Test MF integration by running `pnpm dev`

## License

ISC
