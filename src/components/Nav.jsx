import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#divisions', label: 'Divisions' },
  { href: '#properties', label: 'Properties' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''} ${open ? 'nav-open' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-mark" onClick={() => setOpen(false)}>
          <span className="nav-mark-glyph" aria-hidden="true">
            <img
              src="images/lumora-logo.png"
              alt="Lumora logo"
              className="listings-logo" />
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary nav-cta">Book a Consultation</a>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className="nav-mobile-wrap">
        <div className="nav-mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-on-dark" onClick={() => setOpen(false)}>Book a Consultation</a>
        </div>
      </div>
    </header>
  );
}
