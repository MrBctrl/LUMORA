import { useEffect } from 'react';
import ImageFrame from './ImageFrame';

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
          <img
              src="/lumora-logo.png"
              alt="Lumora logo"
              className="listings-logo" />
        </button>

        <ImageFrame src={listing.image} alt={listing.name} tone={listing.tone} className="modal-image">
          <span className="modal-tag">{listing.tag}</span>
        </ImageFrame>

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
