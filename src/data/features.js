// Plain data module - the sort of content layer a maintainable
// Lovable export keeps separate from presentation so non-developers
// can update copy without touching components.
export const features = [
  {
    title: "Portable build",
    body: "Standard Vite output (dist/). No Lovable runtime dependency, so any static host serves it.",
  },
  {
    title: "Git-driven deploys",
    body: "Push to main and the host rebuilds automatically. Roll back by reverting a commit.",
  },
  {
    title: "Easy to maintain",
    body: "Components, routes and content are split into small modules so updates stay low-risk.",
  },
];
