import { useState } from 'react';

/**
 * Shows a gradient placeholder behind an <img>. If the image src is missing
 * (until you drop a real photo into /public/images/...), the <img> silently
 * hides and the gradient shows through, so the site never breaks.
 */
export default function ImageFrame({ src, alt, tone, className = '', children }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`img-frame ${className}`} style={{ background: tone }}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="img-frame-img"
          onError={() => setFailed(true)}
        />
      )}
      {children}
    </div>
  );
}
