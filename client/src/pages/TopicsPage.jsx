import { useMemo, useState } from "react";
import Icon from "../components/Icon.jsx";
import TopicCard from "../components/TopicCard.jsx";
import { topics } from "../data/topics.js";

export default function TopicsPage({ go, initialFilters = {} }) {
  const [query, setQuery] = useState(initialFilters.query || "");
  const [discipline, setDiscipline] = useState(
    topics.some(t => t.discipline === initialFilters.discipline) ? initialFilters.discipline : ""
  );
  const [level, setLevel] = useState(initialFilters.level || "");
  const [sort, setSort] = useState("relevant");

  const filtered = useMemo(() => {
    const results = topics.filter((topic) => {
      const matchesDiscipline = !discipline || topic.discipline === discipline;
      const matchesLevel = !level || topic.level === level;
      const haystack = `${topic.title} ${topic.description} ${topic.discipline} ${topic.area}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query.toLowerCase());
      return matchesDiscipline && matchesLevel && matchesQuery;
    });
    if (sort === "title") results.sort((a, b) => a.title.localeCompare(b.title));
    return results;
  }, [query, discipline, level, sort]);

  const clearFilters = () => {
    setQuery("");
    setDiscipline("");
    setLevel("");
  };

  return (
    <main className="page-main">
      <div className="page-hero container">
        <span className="eyebrow">Research topic catalogue</span>
        <h1>Explore research topics</h1>
        <p>Search demonstration ideas across disciplines and find a useful starting point for your own inquiry.</p>
      </div>
      <div className="container catalogue-layout">
        <aside className="filters">
          <div className="filter-heading"><strong>Refine results</strong><button onClick={clearFilters} type="button">Clear filters</button></div>
          <label>Discipline<select value={discipline} onChange={e => setDiscipline(e.target.value)}><option value="">All disciplines</option>{[...new Set(topics.map(t => t.discipline))].map(d => <option key={d}>{d}</option>)}</select></label>
          <label>Academic level<select value={level} onChange={e => setLevel(e.target.value)}><option value="">All levels</option><option>Undergraduate</option><option>Postgraduate</option></select></label>
        </aside>
        <section className="catalogue">
          <div className="catalogue-tools">
            <label className="catalogue-search"><Icon name="search" size={19} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search within research topics" /></label>
            <select aria-label="Sort topics" value={sort} onChange={e => setSort(e.target.value)}><option value="relevant">Most relevant</option><option value="title">Title A–Z</option></select>
          </div>
          <div className="result-line"><strong>{filtered.length} topic {filtered.length === 1 ? "idea" : "ideas"}</strong><span>Showing demonstration content</span></div>
          {filtered.length ? <div className="catalogue-grid">{filtered.map(topic => <TopicCard key={topic.id} topic={topic} go={go} />)}</div> : (
            <div className="empty-state"><span><Icon name="search" size={28} /></span><h2>No topics found</h2><p>Try a broader keyword or clear your current filters.</p><button className="button secondary" onClick={clearFilters}>Clear filters</button></div>
          )}
        </section>
      </div>
    </main>
  );
}
