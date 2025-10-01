import React from "react";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="gp-wrap py-16"
    >
      {/* Accent */}
      <div className="h-1 w-24 bg-brand-gradient rounded mb-6" />

      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-start">
        {/* Copy */}
        <div>
          <h2 id="about-title" className="text-3xl font-semibold text-brand-800">
            About
          </h2>

          <p className="mt-3 text-slate-700 leading-relaxed max-w-prose">
            Hi I'm Ganesh, Thanks for visiting!
          </p>

          <ul className="mt-6 space-y-3">
            <Highlight>
              MSc AI graduate & BSc Computer Science graduate with a passion for software, AI/ML, and data.
            </Highlight>
            <Highlight>
              Projects in Web Development, AI and Data.
            </Highlight>
            <Highlight>
              Developed an automated email reminder system using Robotic Process Automation for eLearning reminders during an internship in Boston Scientific.
            </Highlight>
            <Highlight>
              Eager to contribute to solving real-world problems and always willing to learn new things.
            </Highlight>
          </ul>

          <div className="mt-8">
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl bg-brand-800 hover:bg-brand-700 text-cream px-4 py-2 shadow-subtle ring-1 ring-brand-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Quick facts card */}
        <aside className="rounded-xl border border-brand-900/10 bg-white shadow-subtle overflow-hidden">
          <div className="h-1 w-full bg-brand-gradient" />
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-4">
              {/* Optional avatar: /public/avatar.jpg */}
              <img
                src="/images/profilepic.jpg"
                alt="Ganesh Patchipala"
                loading="lazy"
                className="h-16 w-16 rounded-lg object-cover ring-1 ring-brand-900/10"
              />
              <div>
                <div className="text-base font-semibold text-slate-900">Ganesh Patchipala</div>
                <div className="text-sm text-slate-600">Ireland • Software / Data / ML/ AI</div>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              
              <Fact label="Frontend" value="React, Flutter, Tailwind" />
              <Fact label="Backend" value="Flask, Node/Express" />
              <Fact label="Data" value="MongoDB, SQL, Excel" />
              <Fact label="AI & ML" value="PyTorch, TensorFlow, OpenCV, scikit-learn" />
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Highlight({ children }) {
  return (
    <li className="relative pl-6 text-slate-800">
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-brand-800/20">
        <span className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-brand-800" />
      </span>
      {children}
    </li>
  );
}

function Fact({ label, value }) {
  return (
    <div className="rounded-lg border border-brand-900/10 bg-cream px-3 py-3">
      <dt className="text-slate-600">{label}</dt>
      <dd className="font-medium text-slate-900">{value}</dd>
    </div>
  );
}
