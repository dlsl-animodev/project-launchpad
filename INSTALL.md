# Install & Preview (from CI artifact)

This document explains how to retrieve the build artifact produced by the repository's CI and run a local preview using the files included in the artifact.

Prerequisites (on Windows using bash):

- Node.js 20+ installed
- pnpm (v8+) installed globally: `npm install -g pnpm@8`
- GitHub permissions to download artifacts from the repository's Actions runs

Steps

1. Download the artifact from the GitHub Actions run

- Open the workflow run for the commit/PR in GitHub (Actions tab) and download the `preview-build` artifact. Save and extract it into a folder, e.g. `./preview-artifact`.

2. From the project root (where this README is) open a bash terminal and copy or move the extracted artifact directory into the project workspace. Example:

```bash
# assuming the artifact was extracted to ~/Downloads/preview-artifact
mv ~/Downloads/preview-artifact ./preview-artifact
cd preview-artifact
```

3. Install a minimal server to serve the built Next.js output

The artifact contains the `.next` build output and the `public` folder. To preview a Next.js build you can either:

- Use `next start` from the original project (recommended):

  - Copy the artifact contents into the root of a local clone of this repository (so `package.json` and source files exist), then run:

  ```bash
  pnpm install --frozen-lockfile
  pnpm run start
  ```

  - This will run the production server and serve the built output on http://localhost:3000 by default.

- Or run a simple static server for purely static assets (if your site is fully static):

  ```bash
  # install a static server if you don't have one
  pnpm add -g serve
  serve -s public -l 3000
  ```

Notes

- The artifact produced by CI intentionally contains the compiled `.next` folder and `public` assets to allow quick previews. Some features (server-side code, API routes) may require the full repository and `next start` to run correctly.
- If you need to reproduce the exact runtime environment, clone the repo at the same commit, install dependencies with pnpm and run `pnpm run start` after the artifact is placed in the repo root.

Troubleshooting

- If `pnpm run start` fails with missing modules, ensure you ran `pnpm install` in the repository root.
- If the site shows blank pages or runtime errors, check the browser console and server logs for missing environment variables or server-only features.
