# lovable-export-deploy-demo

A Lovable-style **Vite + React** app, exported and configured so it runs on
**independent hosting** (Vercel, Netlify, Cloudflare Pages, or any static host)
with no Lovable runtime lock-in. This is a reference for the exact workflow an
Upwork client asked for: *build in Lovable, host it elsewhere, keep it easy to
maintain and update.*

## Why this matters

Lovable generates a clean, standard Vite app. That means the build output is just
static files (`dist/`) and the source is plain React. Once you connect the Lovable
project to GitHub, you own the code and can deploy it anywhere. Nothing in this
repo depends on Lovable's servers at runtime.

## The export-and-host workflow

1. **Build in Lovable** as usual.
2. **Connect Lovable to GitHub** (one-time). Every change you make in Lovable
   syncs as a commit to your repo.
3. **Point a host at the repo.** Vercel or Netlify watches `main` and rebuilds on
   every push. Build command `npm run build`, output directory `dist`.
4. **Manage domain, env vars and SSL on the host**, not in Lovable. The included
   `vercel.json` / `netlify.toml` add the SPA rewrite so client-side routes
   (e.g. `/about`) resolve on a hard refresh.
5. **Maintain and update** by editing in Lovable (auto-syncs) or directly in the
   repo (Lovable pulls changes back). Roll back any release by reverting a commit.

## Project structure

```
index.html              Vite entry
vite.config.js          portable build config (base "/")
src/
  main.jsx              React + react-router bootstrap
  App.jsx              home route
  components/
    FeatureCard.jsx    presentational component
    About.jsx          /about route (proves routing survives export)
  data/
    features.js        content layer kept separate for easy edits
  index.css            dark theme
vercel.json             Vercel build + SPA rewrite
netlify.toml            Netlify build + SPA redirect
.github/workflows/build.yml   CI: installs, builds, checks dist/
```

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview  # serve the production build
```

## Deploy

**Vercel:** import the repo, framework preset "Vite", build `npm run build`,
output `dist`. `vercel.json` handles the SPA rewrite.

**Netlify:** "Add new site" from the repo. `netlify.toml` sets build, publish
and the SPA redirect automatically.

Both rebuild automatically on every push to `main`.

---
Reference build by Dr. Sandeep Grover.
