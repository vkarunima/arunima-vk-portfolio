export default function Projects({ items }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {items.map((p, i) => {
        const rows = [["Problem", p.problem], ["Solution", p.solution], ["My role", p.role], ["Outcome", p.outcome]].filter((r) => r[1]);
        return (
          <article key={p.name} className={`frame ${i === 0 ? "md:col-span-2" : ""}`}>
            <p className="text-sm text-muted">{p.tag}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold">{p.name}</h3>
            <dl className="mt-4 space-y-3 text-sm leading-relaxed">
              {rows.map(([k, v]) => (
                <div key={k} className="sm:grid sm:grid-cols-[5.5rem_1fr] sm:gap-3">
                  <dt className="font-medium text-muted">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            {p.tech && <p className="mt-4 border-t border-line pt-3 text-sm text-muted">{p.tech.join(", ")}</p>}
          </article>
        );
      })}
    </div>
  );
}
