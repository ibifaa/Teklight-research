import Icon from "./Icon.jsx";

export default function MaterialCard({ material, go }) {
  return (
    <article className="material-card">
      <div className="document-art">
        <span>{material.category}</span><i /><i /><i />
      </div>
      <div className="material-content">
        <div className="card-top">
          <span className={material.paid ? "tag paid" : "tag free"}>{material.paid ? "Paid resource" : "Free resource"}</span>
          <span className="price">{material.price}</span>
        </div>
        <h3>{material.title}</h3>
        <p>{material.meta}</p>
        <button className="link-button" onClick={() => go("material", material.title)} type="button">
          View material <Icon name="arrow" size={16} />
        </button>
      </div>
    </article>
  );
}
