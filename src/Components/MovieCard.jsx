import "../App.css";

export default function MovieCard({
  image,
  title,
  genres,
  synopsis,
  imdbUrl,
  index,
}) {
  return (
    <article className="movie-card">
      <div className="movie-card__img-wrap">
        <img className="movie-card__img" src={image} alt={title} />
      </div>
      <div className="movie-card__body">
        <span className="movie-card__num">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="movie-card__genre">{genres}</span>
        <h2 className="movie-card__title">{title}</h2>
        <hr className="movie-card__divider" />
        <p className="movie-card__synopsis">{synopsis}</p>
        <a
          className="movie-card__imdb-btn"
          href={imdbUrl}
          target="_blank"
          rel="noreferrer"
        >
          View on IMDb ↗
        </a>
      </div>
    </article>
  );
}
