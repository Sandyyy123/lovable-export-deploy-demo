// A small presentational component, kept in its own module so the
// project mirrors how a real exported Lovable app is structured.
export default function FeatureCard({ title, body }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}
