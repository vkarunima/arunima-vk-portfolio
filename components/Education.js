function Col({ title, items }) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

export default function Education({ education, certifications, leadership }) {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      <Col title="Education" items={education} />
      <Col title="Certifications and learning" items={certifications} />
      <Col title="Leadership and activities" items={leadership} />
    </div>
  );
}
