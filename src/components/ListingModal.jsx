import { useEffect } from 'react';

export default function ListingModal({ listing, onClose }) {
  useEffect(() => {
    if (!listing) return;

    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [listing, onClose]);

  if (!listing) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2 L16 16 M16 2 L2 16" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>

        <div className="modal-image" style={{ background: listing.tone }}>
          <span className="modal-tag">{listing.tag}</span>
        </div>

        <div className="modal-body">
          <h3 id="modal-title">{listing.name}</h3>
          <p className="modal-location">{listing.location}</p>
          <p className="modal-price">{listing.price}</p>
          <p className="modal-blurb">{listing.blurb}</p>

          <div className="modal-actions">
            <a href="/#contact" className="btn btn-primary">Enquire About This</a>
            <a href="/#contact" className="btn btn-ghost">Ask About Moving In</a>
          </div>
        </div>
      </div>
    </div>
  );
}
