export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-scene" aria-hidden="true">
        <div className="hero-beam" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <p className="eyebrow hero-eyebrow">· Property &amp; Living</p>
        <h1 className="hero-title">
          Light reveals <em>home.</em>
        </h1>
        <p className="hero-sub">
          Whether you're buying, renting or leasing, land or a full building, LUMORA finds
          the place, sets it up, moves you in, and keeps it running afterward. One team,
          not five different people to chase.
        </p>
        <div className="hero-actions">
          <a href="#properties" className="btn btn-on-dark">View Properties</a>
          <a href="#divisions" className="btn btn-ghost hero-ghost">Explore Divisions</a>
        </div>

        <div className="hero-stats">
          <div><strong>5</strong><span>Services, one team</span></div>
          <div><strong>120+</strong><span>Moves handled</span></div>
          <div><strong>Lagos</strong><span>Nigeria and beyond</span></div>
        </div>
      </div>

      <a href="#divisions" className="hero-scroll" aria-label="Scroll to divisions">
        <span className="hero-scroll-line" />
        Scroll
      </a>
    </section>
  );
}
