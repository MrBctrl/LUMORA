import useReveal from '../hooks/useReveal';
import { process } from '../data';

function Step({ s, i }) {
  const ref = useReveal();
  return (
    <li ref={ref} className="reveal process-step" style={{ transitionDelay: `${i * 100}ms` }}>
      <div className="process-time">
        <span className="process-dot" style={{ '--pos': i }} />
        <span>{s.time}</span>
      </div>
      <h3>{s.step}</h3>
      <p>{s.desc}</p>
    </li>
  );
}

export default function Process() {
  const headRef = useReveal();
  return (
    <section className="process" id="process">
      <div className="container">
        <div ref={headRef} className="reveal section-head">
          <p className="eyebrow">How We Work</p>
          <h2>One day, followed <span className="serif-italic">start to finish.</span></h2>
          <p className="section-lede">
            We named these stages after how light actually moves through a day, from that
            first morning conversation to an evening where you're finally settled in, and
            we're still just a call away.
          </p>
        </div>

        <div className="process-arc" aria-hidden="true"><span /></div>

        <ol className="process-list">
          {process.map((s, i) => <Step key={s.step} s={s} i={i} />)}
        </ol>
      </div>
    </section>
  );
}
