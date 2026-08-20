import { useState } from 'react';
import useReveal from '../hooks/useReveal';

export default function CTA() {
  const ref = useReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="cta" id="contact">
      <div className="container">
        <div ref={ref} className="reveal cta-panel">
          <div className="cta-copy">
            <p className="eyebrow eyebrow-dark">Start The Conversation</p>
            <h2>Tell us what you need, we'll take it from there.</h2>
            <p className="cta-sub">
              Looking for a place, need help settling into one, or just want someone to
              handle the upkeep. Send one message and it lands with the right team.
            </p>
          </div>

          {sent ? (
            <div className="cta-success" role="status">
              <h3>Message received.</h3>
              <p>A member of the LUMORA team will reach out within one business day.</p>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="cta-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your full name" />
              </div>
              <div className="cta-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@email.com" />
              </div>
              <div className="cta-field">
                <label htmlFor="interest">Interested In</label>
                <select id="interest" name="interest" defaultValue="Properties">
                  <option>Properties</option>
                  <option>Interior Design</option>
                  <option>Furnishing</option>
                  <option>Home Services</option>
                  <option>Property Management</option>
                </select>
              </div>
              <div className="cta-field cta-field-wide">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="3" placeholder="Tell us a little about what you're looking for" />
              </div>
              <button type="submit" className="btn btn-on-dark cta-submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
