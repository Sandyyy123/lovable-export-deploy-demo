import { Link } from "react-router-dom";

// Second route - proves client-side routing works after export.
// The SPA rewrite rules in vercel.json and netlify.toml are what make
// this route resolve on a refresh when hosted externally.
export default function About() {
  const steps = [
    "Build the app in Lovable as usual.",
    "Connect the Lovable project to GitHub (one-time) so every change syncs to this repo.",
    "Vercel/Netlify watches the repo and rebuilds on every push.",
    "Custom domain, env vars and SSL are managed on the host, not in Lovable.",
  ];
  return (
    <main className="page">
      <header className="hero">
        <h1>The export-and-host workflow</h1>
      </header>
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
      <Link to="/">&larr; Back home</Link>
    </main>
  );
}
