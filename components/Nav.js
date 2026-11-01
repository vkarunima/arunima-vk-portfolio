import ThemeToggle from "./ThemeToggle";

const links = [["Projects", "#projects"], ["Experience", "#experience"], ["Skills", "#skills"], ["Education", "#education"], ["Contact", "#contact"]];

export default function Nav({ name }) {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-lg font-semibold">{name}</a>
        <nav className="flex items-center gap-5 text-sm text-muted">
          {links.map(([l, h]) => (
            <a key={h} href={h} className={`hover:text-fg ${l === "Contact" ? "" : "hidden md:inline"}`}>{l}</a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
