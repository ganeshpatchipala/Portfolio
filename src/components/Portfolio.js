import React from "react";
import { PROJECTS } from "./projects.js";

export default function Portfolio() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(null);

  // ESC to close
  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const openModal = (project) => {
    setActive(project);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
    setTimeout(() => setActive(null), 200);
  };

  const isWip = (p) => (p.status || "").toLowerCase() === "wip" || (p.status || "").toLowerCase() === "in progress";

  return (
    <section id="projects" aria-labelledby="projects-title" className="gp-wrap py-16">
      <header className="mb-8">
        <p className="text-sm tracking-widest text-brand-700 uppercase">Work</p>
        <h2 id="projects-title" className="text-3xl font-semibold text-brand-800">Portfolio</h2>
        <p className="mt-2 max-w-3xl text-slate-700">
          Selected projects across UI, backend, and applied ML. Click a card to play a demo or view progress.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="group relative rounded-xl border border-brand-900/10 bg-white shadow-subtle overflow-hidden cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`Open ${isWip(p) ? "progress for" : "demo for"} ${p.title}`}
            onClick={() => openModal(p)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openModal(p)}
          >
            <div className="h-1 w-full bg-brand-gradient" />

            {/* Status ribbon (top-left) */}
            {isWip(p) && (
              <span className="absolute left-2 top-2 z-10 rounded-md bg-brand-800 text-cream text-xs px-2 py-1 shadow-subtle">
                In Progress
              </span>
            )}

            {/* Poster image */}
            <div className="aspect-video bg-brand-800/5 overflow-hidden">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="h-full w-full grid place-items-center text-brand-800/60 text-sm">No image</div>
              )}
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              {p.subtitle && <p className="text-sm text-slate-600 mt-0.5">{p.subtitle}</p>}
              <p className="mt-2 text-sm text-slate-700">{p.blurb}</p>

              {/* Tech chips */}
              {p.tech?.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t}>
                      <span className="inline-flex rounded-md border border-brand-900/10 bg-cream px-2.5 py-1 text-xs text-slate-800 transition-colors hover:bg-brand-800 hover:text-cream hover:border-brand-800">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Progress bar for WIP */}
              {isWip(p) && typeof p.progress === "number" && (
                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-cream border border-brand-900/10 overflow-hidden">
                    <div
                      className="h-full bg-brand-gradient"
                      style={{ width: `${Math.max(0, Math.min(100, p.progress))}%` }}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={p.progress}
                      role="progressbar"
                    />
                  </div>
                  <div className="mt-1 text-xs text-slate-600">{p.progress}% complete</div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-4 inline-flex items-center rounded-xl px-3 py-1.5 text-sm shadow-subtle ring-1 ring-brand-900/10
                              transition-colors
                              bg-brand-800/90 text-cream group-hover:bg-brand-800">
                {isWip(p) && !p.video ? "View progress" : "Play demo"}
              </div>
            </div>
          </article>
        ))}
      </div>

{/* Modal */}
{open && active && (
  <div
    className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-[1px] flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    aria-label={`${active.title} ${isWip(active) && !active.video ? "progress" : "demo"} modal`}
    onClick={closeModal}
  >
    <div
      // ⛔ remove overflow-hidden and cap height via an inner scroller
      className="relative max-w-4xl w-full rounded-xl border border-white/10 shadow-subtle bg-white"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closeModal}
        className="absolute right-3 top-3 z-10 inline-flex items-center justify-center rounded-md bg-black/50 text-white px-2 py-1 text-sm hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        aria-label="Close"
      >
        ✕
      </button>

      <div className="h-1 w-full bg-brand-gradient" />

      {/* scrollable content area */}
      <div className="max-h-[85vh] overflow-y-auto">
        {/* WIP view (no video) */}
        {isWip(active) && !active.video ? (
          <div className="p-6">
            {/* Constrain poster size */}
            <div className="mb-4 rounded-lg overflow-hidden border border-brand-900/10 bg-cream">
              {active.image ? (
                <img
                  src={active.image}
                  alt={`${active.title} poster`}
                  className="w-full h-auto max-h-[50vh] object-contain"
                />
              ) : (
                <div className="aspect-video grid place-items-center text-slate-500">
                  No preview available
                </div>
              )}
            </div>

            {/* Progress bar */}
            {typeof active.progress === "number" && (
              <div className="mb-4">
                <div className="h-2 w-full rounded-full bg-cream border border-brand-900/10 overflow-hidden">
                  <div
                    className="h-full bg-brand-gradient"
                    style={{ width: `${Math.max(0, Math.min(100, active.progress))}%` }}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={active.progress}
                  />
                </div>
                <div className="mt-1 text-xs text-slate-600">{active.progress}% complete</div>
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              {active.done?.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-brand-800">Completed</h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                    {active.done.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              )}
              {active.next?.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-brand-800">Next up</h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
                    {active.next.map((n) => <li key={n}>{n}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Video view
          <div className="bg-black">
            <video
              key={active.title}
              controls
              autoPlay
              playsInline
              // keep video within viewport
              className="w-full h-auto max-h-[75vh]"
              poster={active.image || undefined}
            >
              <source src={active.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="bg-white p-4 text-sm text-slate-800">
              <strong>{active.title}</strong>
              {active.subtitle ? ` — ${active.subtitle}` : null}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
)}

    </section>
  );
}
