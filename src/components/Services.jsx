import useReveal from '../hooks/useReveal';
import { services } from '../data';

function Row({ s, i }) {
  const ref = useReveal();
  return (
    <li ref={ref} className="reveal service-row" style={{ transitionDelay: `${i * 80}ms` }}>
      <span className="service-name">{s.name}</span>
      <span className="service-desc">{s.desc}</span>
    </li>
  );
}

export default function Services() {
  const headRef = useReveal();
  return (
    <section className="services">
      <div className="container">
        <div ref={headRef} className="reveal services-head">
          <div>
            <p className="eyebrow">Home Services, In Full</p>
            <h2>Moving in shouldn't mean five phone calls.</h2>
          </div>
          <p className="section-lede">
            You just signed for a new place. Now you need it cleaned, wired, plumbed and
            moved into, usually all in the same week. This is the part LUMORA was built to
            take off your hands.
          </p>
        </div>

        <ul className="service-list">
          {services.map((s, i) => <Row key={s.name} s={s} i={i} />)}
        </ul>
      </div>
    </section>
  );
}
