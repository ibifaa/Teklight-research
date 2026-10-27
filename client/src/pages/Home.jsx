import Icon from "../components/Icon.jsx";
import SearchPanel from "../components/SearchPanel.jsx";
import SectionHead from "../components/SectionHead.jsx";
import TopicCard from "../components/TopicCard.jsx";
import MaterialCard from "../components/MaterialCard.jsx";
import { topics, disciplines, materials } from "../data/topics.js";

export default function Home({ go }) {
  const handleSearch = (filters) => go("topics", filters);

  return (
    <main>
      
<section
  className="relative isolate overflow-hidden bg-gradient-to-br from-[#f4f8fc] via-[#f8faff] to-[#edf8f7]"
  style={{
    backgroundImage: `
      radial-gradient(circle, rgba(40,100,240,0.10) 1px, transparent 1px),
      linear-gradient(120deg, #f4f8fc 0%, #f8faff 55%, #edf8f7 100%)
    `,
    backgroundSize: "24px 24px, 100% 100%",
  }}
>
  <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-12 pt-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:pb-16 lg:pt-20">
    {/* Hero copy */}
    <div className="relative z-10">
      <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#008b83]">
        <span className="h-px w-7 bg-[#008b83]" />
        Research clarity starts here
      </div>

      <h1 className="max-w-[650px] font-serif text-5xl font-bold leading-[0.99] tracking-[-0.045em] text-[#102b46] sm:text-6xl lg:text-[68px] xl:text-[74px]">
        Find your research
        <span className="mt-1 block font-serif italic text-[#2864f0]">
          direction.
        </span>
      </h1>

      <p className="mt-7 max-w-[570px] text-base leading-8 text-[#526782] sm:text-lg">
        Explore thoughtful research topics, access useful academic
        resources, and get professional research and data-analysis support.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => go("topics")}
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#2864f0] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(40,100,240,0.18)] transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Explore project topics
          <Icon name="arrow" size={18} />
        </button>

        <button
          type="button"
          onClick={() => go("materials")}
          className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#cbd8e8] bg-white/90 px-5 py-3 text-sm font-semibold text-[#102b46] transition hover:border-[#2864f0] hover:bg-white"
        >
          Browse research materials
        </button>
      </div>

      <div className="mt-7 flex max-w-[510px] items-start gap-3 text-xs leading-5 text-[#65758b]">
        <span className="mt-0.5 shrink-0 text-[#008b83]">
          <Icon name="shield" size={19} />
        </span>
        <p>
          <strong className="font-semibold text-[#102b46]">
            Built for responsible research.
          </strong>{" "}
          Resources are designed to support learning, not replace your
          original work.
        </p>
      </div>
    </div>

    {/* Research dashboard illustration */}
    <div
      className="relative mx-auto flex min-h-[340px] w-full max-w-[570px] items-center justify-center sm:min-h-[400px] lg:min-h-[440px]"
      aria-label="Illustration of a research analytics dashboard"
      role="img"
    >
      <div className="absolute left-[15%] top-[8%] h-[75%] w-[75%] rounded-full bg-[#b9d2ff]/50 blur-3xl" />
      <div className="absolute right-[5%] top-[20%] h-48 w-48 rounded-full bg-[#b7eee5]/30 blur-3xl" />

      {/* Dashboard window */}
      <div className="relative z-10 w-[91%] translate-x-2 rotate-[1deg] overflow-hidden rounded-2xl border border-[#d6e2f1] bg-white/95 shadow-[0_28px_65px_rgba(28,65,112,0.13)] sm:w-[85%]">
        <div className="flex h-12 items-center justify-between border-b border-[#e3eaf3] px-5">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#dbe5f0]" />
            <span className="h-2 w-2 rounded-full bg-[#dbe5f0]" />
            <span className="h-2 w-2 rounded-full bg-[#dbe5f0]" />
          </div>
          <span className="text-[8px] font-bold tracking-[0.18em] text-[#8a9bb4]">
            RESEARCH WORKSPACE
          </span>
        </div>

        <div className="grid min-h-[245px] grid-cols-[76px_1fr] sm:min-h-[265px] sm:grid-cols-[95px_1fr]">
          <div className="space-y-4 border-r border-[#e3eaf3] bg-[#f8fafc] px-4 py-7">
            <span className="block h-1.5 w-full rounded-full bg-[#8bbdff]" />
            <span className="block h-1.5 w-full rounded-full bg-[#e0e7f0]" />
            <span className="block h-1.5 w-full rounded-full bg-[#e0e7f0]" />
            <span className="block h-1.5 w-full rounded-full bg-[#e0e7f0]" />
          </div>

          <div className="min-w-0 px-5 py-7 sm:px-7">
            <p className="text-[8px] font-medium tracking-[0.16em] text-[#8194b1]">
              ANALYSIS OVERVIEW
            </p>

            <h2 className="mt-2 text-base font-bold text-[#102b46] sm:text-lg">
              Research insights
            </h2>

            <div className="mt-6 flex h-[115px] items-end gap-2 border-b border-[#dce6f3] px-1 sm:gap-3">
              {[38, 57, 49, 78, 64, 94].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-[4px] bg-gradient-to-t from-[#8bbaff] to-[#397df5]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            <div className="mt-3 flex justify-between">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <span
                  key={item}
                  className="h-1 w-5 rounded-full bg-[#e6edf6]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating research step */}
      <div className="absolute left-0 top-[10%] z-20 flex items-center gap-3 rounded-xl border border-[#e0e8f2] bg-white px-3 py-3 shadow-[0_12px_30px_rgba(24,54,91,0.10)] sm:left-[-1%] sm:px-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e0edff] text-xs font-bold text-[#2864f0]">
          01
        </span>
        <div>
          <p className="text-[11px] font-bold text-[#102b46]">
            Define the question
          </p>
          <p className="mt-1 text-[9px] text-[#71829a]">
            Build a focused foundation
          </p>
        </div>
      </div>

      {/* Floating evidence card */}
      <div className="absolute bottom-[2%] right-0 z-20 flex items-center gap-3 rounded-xl border border-[#e0e8f2] bg-white px-3 py-3 shadow-[0_12px_30px_rgba(24,54,91,0.10)] sm:bottom-[0%] sm:right-[-1%] sm:px-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#d4faf1] text-[#008b83]">
          <Icon name="check" size={17} />
        </span>
        <div>
          <p className="text-[11px] font-bold text-[#102b46]">
            Evidence organised
          </p>
          <p className="mt-1 text-[9px] text-[#71829a]">
            Ready for interpretation
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Topic search panel */}
  <div className="relative z-20 mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-10 lg:pb-16">
    <div className="rounded-2xl border border-[#d9e4f2] bg-white/95 p-4 shadow-[0_12px_35px_rgba(16,43,70,0.06)] sm:p-5">
      <SearchPanel onSearch={handleSearch} />
    </div>
  </div>
</section>



      <section className="section disciplines">
        <div className="container">
          <SectionHead eyebrow="Explore fields" title="Browse by discipline" copy="Start with your area of study and discover ideas worth investigating." action={<button className="link-button" onClick={() => go("topics")}>View all disciplines <Icon name="arrow" size={16} /></button>} />
          <div className="discipline-grid">
            {disciplines.map(([name, label, number]) => (
              <button className="discipline-card" key={name} onClick={() => go("topics", { discipline: name })} type="button">
                <span className="discipline-number">{number}</span>
                <span className="discipline-icon">{label.slice(0, 1)}</span>
                <strong>{name}</strong><Icon name="chevron" size={18} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <SectionHead eyebrow="Topic inspiration" title="Featured research directions" copy="Demonstration topics to help you explore relevant and researchable ideas." action={<button className="button secondary compact" onClick={() => go("topics")}>Explore all topics</button>} />
          <div className="topic-grid">{topics.slice(0, 3).map(topic => <TopicCard key={topic.id} topic={topic} go={go} />)}</div>
          <p className="sample-note">These are sample topic ideas for exploration. Suitability and supervisor approval will depend on your institution and research context.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Research library" title="Tools for every stage of your work" copy="Practical, clearly described materials that help you learn and move forward." action={<button className="link-button" onClick={() => go("materials")}>Browse the library <Icon name="arrow" size={16} /></button>} />
          <div className="material-grid">{materials.map(material => <MaterialCard key={material.title} material={material} go={go} />)}</div>
        </div>
      </section>

      <section id="services" className="service-section">
        <div className="container service-grid">
          <div>
            <span className="eyebrow teal">Work with an analyst</span>
            <h2>Expert support when your research needs a closer look.</h2>
            <p>Get clear, professional guidance with methods, data preparation, analysis, and interpretation—while keeping your work authentically yours.</p>
            <button className="button teal-button" onClick={() => alert("Service requests will be connected when the backend is implemented.")}>Request a service <Icon name="arrow" size={18} /></button>
          </div>
          <div className="service-list">
            {["SPSS & statistical analysis", "Excel data analysis", "Research methodology consultation", "Questionnaire design", "Results interpretation", "Research data preparation"].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong><Icon name="arrow" size={16} /></div>)}
          </div>
        </div>
      </section>

      <section className="section how-section">
        <div className="container">
          <SectionHead eyebrow="Simple and transparent" title="From question to progress" />
          <div className="steps">
            {["Search for a topic or resource", "Review the details and price", "Complete secure checkout", "Access materials from your account"].map((step, i) => (
              <div key={step}><span>0{i + 1}</span><h3>{step}</h3><p>{["Use focused filters to narrow down relevant ideas.", "Know exactly what is included before you decide.", "Preview a straightforward, protected payment flow.", "Keep your purchased resources organised in one place."][i]}</p></div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
