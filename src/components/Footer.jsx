const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <a href="#top" className="footer-mark">LUMORA</a>
          <p className="footer-tag">Light reveals home.</p>
        </div>

        <div className="footer-cols">
          <div>
            <h4>Divisions</h4>
            <a href="#divisions">Properties</a>
            <a href="#divisions">Interior Design</a>
            <a href="#divisions">Furnishing</a>
            <a href="#divisions">Home Services</a>
            <a href="#divisions">Property Management</a>
          </div>
          <div>
            <h4>Studio</h4>
            <a href="#philosophy">Philosophy</a>
            <a href="#process">Process</a>
            <a href="#properties">Listings</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Reach Us</h4>
            <a href="mailto:hello@lumora.ng">hello@lumora.ng</a>
            <a href="tel:+2340000000000">+234 000 000 0000</a>
            <span className="footer-addr">Lagos, Nigeria</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {YEAR} LUMORA, a NEXCRAFT Creative Studio flagship.</span>
          <span>Built with light, structure, and care.</span>
        </div>
      </div>
    </footer>
  );
}
