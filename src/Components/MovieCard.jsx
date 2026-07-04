import "../App.css";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../blogs";
import { slugify } from "../utils/slugify";

export default function MovieCard({ image, title, genres, length, rating, imdbUrl }) {
  const slug = slugify(title);
  const hasBlogPost = Boolean(BLOG_POSTS[slug]);

  return (
    <article className="movie-card">
      <div className="movie-card__img-wrap">
        <img className="movie-card__img" src={image} alt={title} />
      </div>
      <div className="movie-card__body">
        <h2 className="movie-card__title">{title}</h2>

        {rating != null && (
          <p className="movie-card__rating">
            {rating}/10 <span className="movie-card__star">★</span>
          </p>
        )}

        <div className="movie-card__meta">
          <span className="movie-card__genre">{genres}</span>
          {length && <span className="movie-card__length">{length}</span>}
        </div>

        <div className="movie-card__actions">
          <a className="movie-card__imdb-btn" href={imdbUrl} target="_blank" rel="noreferrer">
            IMDb
          </a>
          {hasBlogPost && (
            <Link className="movie-card__blog-btn" to={`/blog/${slug}`}>
              Review
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
