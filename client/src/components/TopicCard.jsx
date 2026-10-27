import Icon from "./Icon.jsx";

export default function TopicCard({ topic, go }) {
  return (
    <article className="topic-card">
      <div className="card-top">
        <span className="tag">{topic.discipline}</span>
        <button className="icon-button" aria-label={`Save ${topic.title}`} type="button" onClick={() => alert("Saving topics will be available when student accounts are implemented.")}>
          <Icon name="bookmark" size={18} />
        </button>
      </div>
      <h3>{topic.title}</h3>
      <p>{topic.description}</p>
      <div className="topic-meta"><span>{topic.level}</span><span>{topic.area}</span></div>
      <button className="link-button" onClick={() => go("topic", topic.id)} type="button">
        View topic details <Icon name="arrow" size={16} />
      </button>
    </article>
  );
}
