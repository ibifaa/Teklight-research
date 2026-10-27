import { useState } from "react";
import MaterialCard from "../components/MaterialCard.jsx";
import { materials } from "../data/topics.js";

const categories = ["All materials", "Methodology guides", "Templates", "Data analysis", "Sample documents", "Referencing"];

export default function MaterialsPage({ go }) {
  const [activeCategory, setActiveCategory] = useState("All materials");
  const allMaterials = [...materials, ...materials];
  const filteredMaterials = allMaterials.filter((material) => {
    if (activeCategory === "All materials") return true;
    if (activeCategory === "Methodology guides") return material.category === "Guide";
    if (activeCategory === "Templates") return material.category === "Template";
    if (activeCategory === "Data analysis") return material.category === "Tutorial";
    return true;
  });

  return (
    <main className="page-main">
      <div className="page-hero container"><span className="eyebrow">Practical research library</span><h1>Research materials</h1><p>Guides, templates, and tutorials designed to support learning at every stage.</p></div>
      <div className="container">
        <div className="category-pills">{categories.map(category => <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
        <div className="material-grid marketplace">{filteredMaterials.map((material, i) => <MaterialCard key={`${material.title}-${i}`} material={material} go={go} />)}</div>
      </div>
    </main>
  );
}
