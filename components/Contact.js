export default function Contact({ p }) {
  const links = [["LinkedIn", p.linkedin], ["GitHub", p.github]].filter((l) => l[1]);
  return (
    <div>
      <p className="max-w-xl text-lg">Open to internships and entry-level roles in machine learning and software engineering.</p>
      <a href={`mailto:${p.email}`} className="mt-4 inline-block break-all font-display text-2xl font-semibold underline decoration-box underline-offset-4 sm:text-3xl">{p.email}</a>
      <p className="mt-4 text-muted">{p.phone} · {p.location}</p>
      <p className="mt-2 flex gap-5">
        {links.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-box">{l}</a>)}
      </p>
    </div>
  );
}
