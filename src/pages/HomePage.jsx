import { Link } from "react-router-dom";
import { MOVIES } from "../movies";

export default function HomePage() {
  return (
    <div className="page-wrapper home-hero">
      <div className="page-header__eyebrow">Afterglow Cinema</div>
      <h1 className="page-header__title">
        A running record of what <span>stayed with me</span>
      </h1>
      <p className="page-header__subtitle home-hero__subtitle">
        Movies, shows, and anime I've actually watched — with honest ratings and the
        occasional write-up when something's worth unpacking.
      </p>
      <div className="home-hero__actions">
        <Link to="/movies" className="load-more-btn">
          Browse {MOVIES.length} films
        </Link>
        <Link to="/blog" className="movie-card__blog-btn home-hero__secondary">
          Read the blog
        </Link>
      </div>
    </div>
  );
}
