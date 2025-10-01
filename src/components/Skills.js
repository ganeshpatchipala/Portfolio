import React from "react";
import { SKILL_GROUPS } from "./data.js";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="gp-wrap py-16"
    >
      <header className="mb-8">
        <p className="text-sm tracking-widest text-brand-700 uppercase">Capabilities</p>
        <h2 id="skills-title" className="text-3xl font-semibold text-brand-800">
          Skills & Technologies
        </h2>
        <p className="mt-2 max-w-3xl text-slate-700">
          A toolset that I've acquired over the years for building clean UIs, reliable backends, and practical AI features.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <article
            key={group.title}
            className="relative rounded-xl border border-brand-900/10 bg-white shadow-subtle"
          >
            {/* Accent hairline */}
            <div className="h-1 w-full bg-brand-gradient rounded-t-xl" />

            <div className="p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-800/10 text-brand-800"
                >
                  {group.icon}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
              </div>

              {group.note && (
                <p className="mb-4 text-sm text-slate-600">{group.note}</p>
              )}

              <ul className="flex flex-wrap gap-2">
                {group.items.map((name) => (
                  <li key={name}>
                    <span
                      className="inline-flex items-center rounded-lg border border-brand-900/10
                                 bg-cream px-3 py-1.5 text-sm text-slate-800 transition-colors
                                 hover:bg-brand-800 hover:text-cream hover:border-brand-800
                                 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                      tabIndex={0}
                    >
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
