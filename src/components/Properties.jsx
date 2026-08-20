import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { categories, categoryOrder } from '../listingsData';

function CategoryCard({ catKey, i }) {
  const ref = useReveal();
  const cat = categories[catKey];
  const count = cat.items.length;
  return (
    <li ref={ref} className="reveal category-card" style={{ transitionDelay: `${i * 90}ms` }}>
      <Link to={`/listings/${catKey}`} className="category-card-link">
        <div className="category-image" style={{ background: cat.items[0].tone }}>
          <span className="category-count">{count}+ listed</span>
        </div>
        <div className="category-body">
          <h3>{cat.label}</h3>
          <p>{cat.intro}</p>
          <span className="category-cta">Browse {cat.label} →</span>
        </div>
      </Link>
    </li>
  );
}

export default function Properties() {
  const headRef = useReveal();
  return (
    <section className="properties" id="properties">
      <div className="container">
        <div ref={headRef} className="reveal section-head section-head-split">
          <div>
            <p className="eyebrow">Everything We List</p>
            <h2>Houses, apartments, buildings and land.</h2>
          </div>
          <p className="section-lede">
            Whatever kind of place you're after, pick a category and filter it down to
            exactly what fits. Someone from our team has visited every listing in person.
          </p>
        </div>

        <ul className="category-grid">
          {categoryOrder.map((key, i) => <CategoryCard key={key} catKey={key} i={i} />)}
        </ul>
      </div>
    </section>
  );
}
