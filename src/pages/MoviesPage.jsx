import { useState } from "react";
import { MOVIES } from "../movies";
import MovieCard from "../Components/MovieCard";
import "../genre-filter.css";

// MOVIES is a static import, not state — it can't change while the app is
// running, so there's no reason to rebuild this list on every render (or to
// wrap it in useMemo, which would still re-run once on mount for nothing).
// Computing it once here, when the module is first loaded, is simpler and
// cheaper than doing it inside the component.
const GENRES = [
  "All",
  ...new Set(MOVIES.flatMap((m) => m.genres.split("/").map((g) => g.trim()))),
];

export default function MoviesPage() {
  const PAGE_SIZE = 8;

  const [selectedGenre, setSelectedGenre] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Split each movie's genre string into tokens and check for an exact
  // match, rather than `m.genres.includes(selectedGenre)`. A raw substring
  // check would silently break the moment two genres share a substring —
  // e.g. a future "Rom" tag would also match every "Romance" film.
  const filteredMovies =
    selectedGenre === "All"
      ? MOVIES
      : MOVIES.filter((m) =>
          m.genres
            .split("/")
            .map((g) => g.trim())
            .includes(selectedGenre)
        );

  const visibleMovies = filteredMovies.slice(0, visibleCount);
  const hasMore = visibleCount < filteredMovies.length;

  function handleGenreSelect(genre) {
    setSelectedGenre(genre);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div className="page-wrapper">
      <header className="page-header">
        <div className="page-header__left">
          <div className="page-header__eyebrow">Personal picks</div>
          <h1 className="page-header__title">
            Movies I Watched <span>Recently</span>
          </h1>
          <p className="page-header__subtitle">
            A few films worth your time — ranked by how long I thought about them after.
          </p>
        </div>
        <div className="page-header__count">
          <span className="page-header__count-number">{MOVIES.length}</span>
          <span className="page-header__count-label">Films</span>
        </div>
      </header>

      <div className="genre-filter">
        {GENRES.map((genre) => (
          <button
            key={genre}
            className={`genre-filter__btn${selectedGenre === genre ? " genre-filter__btn--active" : ""}`}
            onClick={() => handleGenreSelect(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <main className="movies-grid">
        {visibleMovies.length > 0 ? (
          visibleMovies.map((movie) => <MovieCard key={movie.title} {...movie} />)
        ) : (
          <p className="movies-empty">No films in this category yet.</p>
        )}
      </main>

      {hasMore && (
        <div className="load-more-wrap">
          <button className="load-more-btn" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
