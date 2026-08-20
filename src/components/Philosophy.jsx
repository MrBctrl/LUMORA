import useReveal from '../hooks/useReveal';

const VALUES = [
  { name: 'Trust', desc: 'If we tell you something about a property, you can act on it without double checking.' },
  { name: 'Craftsmanship', desc: 'We think about the small details early, not as an afterthought once the big stuff is done.' },
  { name: 'Warmth', desc: 'Nice does not have to mean cold. We lean on real materials and real light.' },
  { name: 'Transformation', desc: 'We judge our own work by how different a space feels once we are done.' },
  { name: 'Simplicity', desc: 'One person to call, from your first question to the day you move in.' },
];

export default function Philosophy() {
  const ref = useReveal();
  const valuesRef = useReveal();
  return (
    <section className="philosophy" id="philosophy">
      <div className="philosophy-beam" aria-hidden="true" />
      <div className="container philosophy-inner">
        <div ref={ref} className="reveal philosophy-copy">
          <p className="eyebrow eyebrow-dark">Our Philosophy</p>
          <h2 className="philosophy-title">
            A house is just structure.<br />
            <span className="serif-italic">Light is what turns it into home.</span>
          </h2>
          <p className="philosophy-text">
            Our mark is a beam finding its way through an opening, because that's the moment
            any space stops being four walls and starts feeling like somewhere you'd want to
            be. We chase that same feeling through everything we do, in how a listing gets
            photographed, how a room gets arranged around its windows, and how a home is
            looked after so it never loses that first impression.
          </p>
        </div>

        <ul ref={valuesRef} className="reveal values-list">
          {VALUES.map((v) => (
            <li key={v.name} className="value-row">
              <span className="value-name">{v.name}</span>
              <span className="value-desc">{v.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
