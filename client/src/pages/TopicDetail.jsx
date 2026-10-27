import Icon from "../components/Icon.jsx";
import { topics } from "../data/topics.js";

export default function TopicDetail({ go, topicId = 1 }) {
  const topic = topics.find(item => item.id === topicId) || topics[0];

  return (
    <main className="page-main detail-page">
      <div className="container breadcrumb"><button onClick={() => go("topics")}>Explore topics</button><Icon name="chevron" size={14} /><span>Topic details</span></div>
      <div className="container detail-grid">
        <article>
          <div className="detail-tags"><span className="tag">{topic.discipline}</span><span className="tag neutral">{topic.level}</span></div>
          <h1>{topic.title}</h1>
          <p className="lead">{topic.description} This sample direction can be refined to fit a specific institution, population, or learning context.</p>
          <div className="content-block"><h2>Topic overview</h2><p>This topic creates room to evaluate the opportunities and challenges associated with this research area. A strong study would define its key concepts and use measurable indicators appropriate to the research question.</p></div>
          <div className="content-block"><h2>Why this research matters</h2><p>Grounded research can help institutions, organisations, and communities make informed decisions and improve practice.</p></div>
          <div className="content-block"><h2>Suggested research questions</h2><ol><li>What are the main patterns or experiences associated with this topic?</li><li>What relationship exists between the key variables being investigated?</li><li>What practical or ethical concerns should researchers consider?</li></ol></div>
        </article>
        <aside className="detail-aside">
          <div className="guidance-card"><small>NEED HELP REFINING THIS IDEA?</small><h3>Turn a broad direction into a focused study.</h3><p>Request responsible guidance on scope, methodology, or questionnaire design.</p><button className="button" onClick={() => alert("Guidance requests will be available when the backend is implemented.")}>Request guidance <Icon name="arrow" size={17} /></button><button className="button secondary" onClick={() => alert("Saved topics will be available when student accounts are implemented.")}><Icon name="bookmark" size={17} /> Save topic</button></div>
          <button className="back-link" onClick={() => go("materials")}>Explore related materials <Icon name="arrow" size={16} /></button>
        </aside>
      </div>
    </main>
  );
}
