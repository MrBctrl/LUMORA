import useReveal from '../hooks/useReveal';
import { testimonials } from '../data';

export default function Testimonials() {
  const ref = useReveal();
  return (
    <section className="testimonials">
      <div className="container">
        <div ref={ref} className="reveal testimonial-grid">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="testimonial-card">
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
