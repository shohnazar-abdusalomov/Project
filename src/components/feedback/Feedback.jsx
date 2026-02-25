
import "./Feedback.css";

function Feedback() {
  return (
    <div className="container">

      {/* ── Chap qizil yarim doira ── */}
      <div className="deco deco--left" />

      {/* ── O'ng yuqori kichik doira ── */}
      <div className="deco deco--right-top" />

      {/* ── O'ng pastki sariq doira ── */}
      <div className="deco deco--right-bottom" />

      {/* ── Sarlavha ── */}
      <h2 className="feedback__title">
        Don't take our word for it.<br />
        Take theirs...
      </h2>

      {/* ── Mijoz kartasi ── */}
      <div className="feedback__card">

        {/* Chap — qiz rasmi */}
        <div className="feedback__img-wrap">
          <img
            className="feedback__img"
            src="https://i.pravatar.cc/400?img=47"
            alt="Tanya Singer"
          />
        </div>

        {/* O'ng — matn */}
        <div className="feedback__text">
          <p className="feedback__name">Tanya Singer</p>
          <p className="feedback__role">Director of Digital Marketing</p>
          <p className="feedback__quote">
            Your product helped us to<br />
            learn about our customers,<br />
            intimately.
          </p>
        </div>

      </div>

      {/* ── Brendlar — 4 ta alohida box ── */}
      <div className="feedback__brands">

        {/* Box 1 — Pepsi */}
        <div className="brand-box">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/320px-Pepsi_2023.svg.png"
            alt="Pepsi"
            className="brand-logo brand-logo--pepsi"
          />
          <span className="pepsi-label">PEPSI</span>
        </div>

        {/* Box 2 — Yashil doira (BWF logo) */}
        <div className="brand-box">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/07/BWF_logo.svg/240px-BWF_logo.svg.png"
            alt="Brand"
            className="brand-logo brand-logo--circle"
          />
        </div>

        {/* Box 3 — Twitch */}
        <div className="brand-box brand-box--twitch">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twitch_logo.svg/320px-Twitch_logo.svg.png"
            alt="Twitch"
            className="brand-logo brand-logo--twitch"
          />
        </div>

        {/* Box 4 — More customers */}
        <div className="brand-box brand-box--more">
          <a className="feedback__more" href="#">More customers</a>
        </div>

      </div>

    </div>
  );
}

export default Feedback;