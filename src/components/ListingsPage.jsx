import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories, categoryOrder } from '../listingsData';
import ListingModal from './ListingModal';

export default function ListingsPage() {
  const { category } = useParams();
  const data = categories[category];
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  useEffect(() => {
    setActiveFilter('All');
    setSelected(null);
    window.scrollTo(0, 0);
  }, [category]);

  if (!data) {
    return (
      <div className="listings-missing">
        <div className="container">
          <p className="eyebrow">Not Found</p>
          <h1>We don't have a category by that name.</h1>
          <Link to="/" className="btn btn-primary">Back Home</Link>
        </div>
      </div>
    );
  }

  const items = activeFilter === 'All' ? data.items : data.items.filter((i) => i.tag === activeFilter);

  return (
    <div className="listings-page">
      <header className="listings-top">
        <div className="container listings-top-inner">
          <Link to="/" className="listings-back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 2 L4 8 L10 14" stroke="currentColor" strokeWidth="1.5" /></svg>
            LUMORA
          </Link>
          <div className="listings-crumbs">
            {categoryOrder.map((key) => (
              <Link
                key={key}
                to={`/listings/${key}`}
                className={key === category ? 'listings-crumb active' : 'listings-crumb'}
              >
                {categories[key].label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <section className="listings-hero">
        <div className="container">
          <p className="eyebrow eyebrow-dark">Browse {data.label}</p>
          <h1>{data.label}</h1>
          <p className="listings-intro">{data.intro}</p>
        </div>
      </section>

      <nav className="listings-filters" aria-label={`Filter ${data.label}`}>
        <div className="container listings-filters-inner">
          {data.filters.map((f) => (
            <button
              key={f}
              className={f === activeFilter ? 'filter-chip active' : 'filter-chip'}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </nav>

      <section className="listings-grid-section">
        <div className="container">
          <p className="listings-count">{items.length} {items.length === 1 ? data.singular.toLowerCase() : data.label.toLowerCase()} found</p>
          <ul className="listings-grid">
            {items.map((item) => (
              <li key={item.id} className="listing-card" onClick={() => setSelected(item)}>
                <div className="listing-image" style={{ background: item.tone }}>
                  <span className="listing-tag">{item.tag}</span>
                </div>
                <div className="listing-body">
                  <div className="listing-row">
                    <h3>{item.name}</h3>
                  </div>
                  <p className="listing-location">{item.location}</p>
                  <p className="listing-price">{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          {items.length === 0 && (
            <p className="listings-empty">Nothing under this filter right now. Try a different one, or send us what you're looking for.</p>
          )}
        </div>
      </section>

      <ListingModal listing={selected} onClose={closeModal} />
    </div>
  );
}
