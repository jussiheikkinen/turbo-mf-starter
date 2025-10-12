# AGENTS.md

## Project overview
This is the ai-project, a Turborepo monorepo containing multiple React applications built with Rsbuild, TypeScript, and Biome. The project includes apps like app-1, app-bar, app-shell, and nav-bar, structured as workspaces under `apps/*`.

## Dev environment tips
- Use pnpm as the package manager (specified in package.json).
- Run `pnpm dev` from the root to start development servers for all apps.
- Each app has its own `dev` script: `pnpm dev --filter <app-name>` to run a specific app.
- Use `pnpm add <package> --filter <app-name>` to add dependencies to a specific workspace.
- Check the name field in each app's package.json to confirm the correct workspace name.

## Build and test commands
- Build all apps: `pnpm build` (runs `turbo run build`).
- Build a specific app: `pnpm build --filter <app-name>`.
- Check types across all: `pnpm check-types` (runs `turbo run tsc`).
- No tests are currently configured (root package.json has a placeholder test script).
- Lint and format with Biome: In each app, run `pnpm check` to lint or `pnpm format` to format.

## Code style guidelines
- Use Biome for linting and formatting (configured in each app's biome.json).
- Follow TypeScript strict mode as per tsconfig.json in each app.
- Code should be formatted with Biome before committing.
- Use Rsbuild for building, avoid direct webpack or vite configs unless necessary.

## Testing instructions
- No tests are set up yet. When adding tests, use Vitest or similar, and run via `pnpm test` in the workspace.
- Ensure builds pass with `pnpm build` before merging.
- Run `pnpm check-types` to verify TypeScript.

## PR instructions
- Title format: [<app-name>] <Description>
- Always run `pnpm build` and `pnpm check-types` before committing.
- Format code with `pnpm format` in affected workspaces.