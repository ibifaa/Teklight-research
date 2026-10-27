import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { materials } from "../data/topics.js";

export default function MaterialDetail({ go, materialTitle }) {
  const [checkout, setCheckout] = useState(false);
  const material = materials.find(item => item.title === materialTitle) || materials[0];

  return (
    <main className="page-main detail-page">
      <div className="container breadcrumb"><button onClick={() => go("materials")}>Research materials</button><Icon name="chevron" size={14} /><span>Resource details</span></div>
      <div className="container material-detail">
        <div className="book-cover"><small>TEKLIGHT RESEARCH SERIES</small><span>01</span><h2>{material.title}</h2><p>Practical resources to support your academic research.</p></div>
        <article>
          <span className={material.paid ? "tag paid" : "tag free"}>{material.paid ? "Paid resource" : "Free resource"}</span>
          <h1>{material.title}</h1>
          <p className="lead">A student-friendly resource designed to help you develop your research skills and make informed academic decisions.</p>
          <div className="includes"><h3>Resource information</h3>{["Practical learning resource", "Clear explanations and guidance", "Designed to support independent work", "Use in line with your institution's academic integrity policy"].map(item => <p key={item}><Icon name="check" size={17} />{item}</p>)}</div>
          <div className="purchase-bar"><div><small>{material.paid ? "ONE-TIME PURCHASE" : "NO COST"}</small><strong>{material.price}</strong><span>{material.meta}</span></div><button className="button" onClick={() => material.paid ? setCheckout(true) : alert("Free download access will be connected when the backend is implemented.")}>{material.paid ? "Purchase securely" : "Get resource"} <Icon name="arrow" size={17} /></button></div>
          <p className="secure-copy"><Icon name="shield" size={17} /> Checkout preview only. No real payment or download is connected.</p>
        </article>
      </div>
      {checkout && <div className="modal-backdrop" onClick={() => setCheckout(false)} role="presentation"><div className="modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title" onClick={event => event.stopPropagation()}><button className="modal-close" aria-label="Close checkout" onClick={() => setCheckout(false)}><Icon name="close" /></button><span className="eyebrow">Checkout preview</span><h2 id="checkout-title">Review your order</h2><div className="order-line"><span>{material.title}<small>Digital resource</small></span><strong>{material.price}</strong></div><div className="total"><span>Total</span><strong>{material.price}</strong></div><button className="button full" onClick={() => alert("Paystack checkout will be integrated in a later development stage.")}>Continue to secure payment</button><p>This is a design prototype. Payment and account access are not connected.</p></div></div>}
    </main>
  );
}
