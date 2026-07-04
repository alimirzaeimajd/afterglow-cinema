import { Link } from "react-router-dom";
import "../not-found.css";

export default function NotFoundPage() {
  return (
    <div className="page-wrapper not-found">
      <div className="not-found__flicker" aria-hidden="true" />

      <div className="not-found__reel" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="not-found__reel-svg">
          <circle cx="50" cy="50" r="46" className="not-found__reel-ring" />
          <circle cx="50" cy="50" r="10" className="not-found__reel-hub" />
          <circle cx="50" cy="22" r="9" className="not-found__reel-hole" />
          <circle cx="76" cy="62" r="9" className="not-found__reel-hole" />
          <circle cx="24" cy="62" r="9" className="not-found__reel-hole" />
        </svg>
      </div>

      <p className="not-found__eyebrow">Scene missing</p>
      <h1 className="not-found__code">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
      <h2 className="not-found__title">This reel snapped.</h2>
      <p className="not-found__text">
        The page you're looking for was either never shot, or it's on the cutting room floor.
      </p>

      <Link to="/" className="not-found__btn">
        ← Back to the screening room
      </Link>
    </div>
  );
}
