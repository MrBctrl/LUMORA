import useReveal from '../hooks/useReveal';
import { divisions } from '../data';

function Card({ d, i }) {
  const ref = useReveal();
  return (
    <li ref={ref} className="reveal division-card" style={{ transitionDelay: `${i * 90}ms` }}>
      <div className="division-top">
        <span className="division-code">{d.code}</span>
        <span className="division-tag">{d.tag}</span>
      </div>
      <h3 className="division-name">{d.name}</h3>
      <p className="division-desc">{d.desc}</p>
    </li>
  );
}

export default function Divisions() {
  const headRef = useReveal();
  return (
    <section className="divisions" id="divisions">
      <div className="container">
        <div ref={headRef} className="reveal section-head">
          <p className="eyebrow">What We Do</p>
          <h2>Everywhere you'd normally call five people. <span className="serif-italic">We're one.</span></h2>
          <p className="section-lede">
            Most people piece a home together out of strangers: an agent, a designer, a
            furniture shop, a mover, someone's cousin who "knows a guy" for repairs. LUMORA
            replaces all of that with one team that already knows the property and knows you.
          </p>
        </div>

        <ol className="division-grid">
          {divisions.map((d, i) => <Card key={d.code} d={d} i={i} />)}
        </ol>
      </div>
    </section>
  );
}
