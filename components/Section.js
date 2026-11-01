export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-16 py-14 sm:py-20">
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
