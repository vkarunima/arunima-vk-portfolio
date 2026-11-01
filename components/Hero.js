export default function Hero({ p }) {
  return (
    <section id="top" className="pb-6 pt-14 sm:pt-24">
      <div className="relative">
        <span className="hero-in absolute -top-7 left-0 bg-box px-2 py-1 text-xs font-medium text-bg">{p.name}, {p.title}</span>
        <div className="hero-box p-6 sm:p-12">
          <div className="hero-in">
            <h1 className="font-display text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">{p.name}</h1>
            <p className="mt-2 text-xl text-muted sm:text-2xl">{p.title}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed">{p.statement}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="bg-box px-5 py-2.5 font-medium text-bg hover:opacity-90">View projects</a>
              <a href="#contact" className="border border-line px-5 py-2.5 font-medium hover:border-box">Get in touch</a>
            </div>
            <ul className="mt-10 max-w-2xl space-y-1 border-t border-line pt-5 text-sm text-muted">
              {p.facts.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
