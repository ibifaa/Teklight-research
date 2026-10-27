
import Icon from "./Icon.jsx";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Project topics", "topics"],
      ["Research materials", "materials"],
      ["Data analysis", "services"],
    ],
  },
  {
    title: "Research support",
    links: [
      ["Research methodology", "services"],
      ["Statistical analysis", "services"],
      ["Questionnaire design", "services"],
    ],
  },
];

export default function Footer({ go }) {
  return (
    <footer className="bg-[#102b46] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                go?.("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#36c6b0]">
                <Icon name="chart" size={24} />
              </span>

              <span>
                <span className="block text-xl font-bold tracking-tight">
                  TekLight
                </span>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-300">
                  Research & Data Analysis
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
              Helping students explore research ideas, access useful academic
              resources, and understand their data.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-sm font-bold text-white">
                {group.title}
              </h3>

              <ul className="space-y-3">
                {group.links.map(([label, destination]) => (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => go?.(destination)}
                      className="text-left text-sm text-slate-300 transition-colors hover:text-[#36c6b0]"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-5 text-sm font-bold text-white">
              Need research support?
            </h3>

            <p className="text-sm leading-7 text-slate-300">
              Get guidance on research methods, data preparation, analysis,
              and interpretation.
            </p>

            <button
              type="button"
              onClick={() => go?.("services")}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#36c6b0] px-4 py-3 text-sm font-semibold text-[#102b46] transition hover:bg-[#63dfca]"
            >
              Explore our services
              <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} TekLight Research & Data Analysis.
              All rights reserved.
            </p>

            <p>Supporting learning. Encouraging original research.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
