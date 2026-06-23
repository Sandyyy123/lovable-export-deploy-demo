import { useState } from "react";
import { Link } from "react-router-dom";
import FeatureCard from "./components/FeatureCard.jsx";
import { features } from "./data/features.js";

// This is a standard Lovable-style page: it is the kind of component
// Lovable generates. The point of this repo is that NOTHING here is
// locked to Lovable's runtime - it is plain React + Vite and runs
// anywhere once exported.
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="page">
      <header className="hero">
        <h1>
          Built in <span className="accent">Lovable</span>, hosted anywhere
        </h1>
        <p className="sub">
          This app was generated in Lovable, exported to GitHub, and deploys to
          Vercel or Netlify with zero code changes.
        </p>
        <nav className="nav">
          <Link to="/about">About the export workflow &rarr;</Link>
        </nav>
      </header>

      <section className="counter">
        <button onClick={() => setCount((c) => c + 1)}>
          Interactivity check: clicked {count} times
        </button>
      </section>

      <section className="grid">
        {features.map((f) => (
          <FeatureCard key={f.title} title={f.title} body={f.body} />
        ))}
      </section>
    </main>
  );
}
