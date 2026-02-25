import "./HeroLeft.css";

function HeroLeft() {
  return (
    <div className="hero-left">
      <h1>LIVE YOUR DAY WITH MUSIC</h1>
      <p>
        Make your day more lively with a variety of amazing music that
        nobody else has ever heard.
      </p>

      <div className="hero-buttons">
        <button className="primary-btn">Get Started</button>
        <button className="secondary-btn">View Plans</button>
      </div>

      <div className="hit-music">
        <h3>Hit's Music</h3>
        <div className="music-cards">
          <div className="music-card card-pop">
            <div className="card-figure">🎤</div>
            <span>Pop Hits</span>
          </div>
          <div className="music-card card-rap">
            <div className="card-figure">🎧</div>
            <span>Rap Hits</span>
          </div>
          <div className="music-card card-seasonal">
            <div className="card-figure">🎻</div>
            <span>Seasonal Hits</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroLeft;