export default function Skills({ items }) {
  return (
    <dl className="border-b border-line">
      {items.map((s) => (
        <div key={s.group} className="border-t border-line py-4 sm:grid sm:grid-cols-[12rem_1fr] sm:gap-6">
          <dt className="font-medium">{s.group}</dt>
          <dd className="text-muted">{s.items}</dd>
        </div>
      ))}
    </dl>
  );
}
