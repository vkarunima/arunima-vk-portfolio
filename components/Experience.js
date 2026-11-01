export default function Experience({ items }) {
  return items.map((e) => (
    <article key={e.company} className="border-l-2 border-box pl-5">
      <h3 className="font-display text-xl font-semibold">{e.role}, {e.company}</h3>
      <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed">
        {e.points.map((pt) => <li key={pt}>{pt}</li>)}
      </ul>
    </article>
  ));
}
