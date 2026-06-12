import "./App.css";
import "./App.css";
import { MOVIES } from "./movies";

function MovieCard({ image, title, genres, synopsis, imdbUrl, index }) {
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

function App() {
  return (
    <div className="page-wrapper">
      <header className="page-header">
        <div className="page-header__left">
          <div className="page-header__eyebrow">Personal picks</div>
          <h1 className="page-header__title">
            Movies I Watched <span>Recently</span>
          </h1>
          <p className="page-header__subtitle">
            A few films worth your time — ranked by how long I thought about
            them after.
          </p>
        </div>
        <div className="page-header__count">
          <span className="page-header__count-number">{MOVIES.length}</span>
          <span className="page-header__count-label">Films</span>
        </div>
      </header>

      <main className="movies-grid">
        {MOVIES.map((movie, index) => (
          <MovieCard key={movie.title} {...movie} index={index} />
        ))}
      </main>
    </div>
  );
}

export default App;
