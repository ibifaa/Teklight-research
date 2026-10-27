import { useState } from "react";
import Icon from "./Icon.jsx";

export default function SearchPanel({ onSearch }) {
  const [query, setQuery] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");

  const submit = (event) => {
    event?.preventDefault();
    onSearch({ query, discipline, level, category });
  };

  return (
    <form className="search-panel" onSubmit={submit}>
      <label className="search-main">
        <Icon name="search" size={22} />
        <input
          aria-label="Search topics"
          placeholder="Search topics, departments, courses or keywords"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <div className="filter-row">
        <label>
          <span>Discipline</span>
          <select value={discipline} onChange={(event) => setDiscipline(event.target.value)}>
            <option value="">All disciplines</option>
            <option>Computer Science</option>
            <option>Business Administration</option>
            <option>Agriculture</option>
            <option>Accounting &amp; Finance</option>
            <option>Social Sciences</option>
            <option>Engineering</option>
          </select>
        </label>
        <label>
          <span>Academic level</span>
          <select value={level} onChange={(event) => setLevel(event.target.value)}>
            <option value="">All levels</option>
            <option>Undergraduate</option>
            <option>Postgraduate</option>
          </select>
        </label>
        <label>
          <span>Topic category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">All categories</option>
            <option>Technology</option>
            <option>Business</option>
            <option>Social research</option>
            <option>Sustainability</option>
          </select>
        </label>
        <button className="button search-button" type="submit">
          Search topics <Icon name="arrow" size={17} />
        </button>
      </div>
    </form>
  );
}
