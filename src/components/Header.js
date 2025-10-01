import React from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("about");

  // Scroll spy
  React.useEffect(() => {
    const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean);
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.05, 0.25, 0.5, 0.75] }
    );

    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const NavLink = ({ id, label }) => (
    <a
      href={`#${id}`}
      onClick={() => setOpen(false)}
      className={[
        "px-2 py-1 rounded-md transition",
        "text-cream/90 hover:text-cream",
        active === id ? "underline underline-offset-8 decoration-2" : "hover:bg-white/5",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-cream/80"
      ].join(" ")}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-brand-gradient text-cream shadow-subtle">
      <div className="gp-wrap">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <a
            href="#top"
            className="font-semibold tracking-tight hover:opacity-90 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cream/80"
          >
            Ganesh Patchipala
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map(n => <NavLink key={n.id} {...n} />)}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cream/80"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
              {open ? (
                <path d="M18.3 5.71L12 12.01l6.3 6.3-1.42 1.41L10.59 13.4 4.29 19.7 2.88 18.29l6.3-6.3-6.3-6.3L4.29 4.29l6.3 6.3 6.3-6.3z" />
              ) : (
                <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden pb-4">
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map(n => (
                <li key={n.id}>
                  <NavLink {...n} />
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
