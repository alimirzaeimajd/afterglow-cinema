import { useState } from "react";
import { MOVIES } from "../movies";
import MovieCard from "../Components/MovieCard";
import "../genre-filter.css";

export default function MoviesPage() {
  const PAGE_SIZE = 8;

  const [selectedGenre, setSelectedGenre] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredMovies =
    selectedGenre === "All" ? MOVIES : MOVIES.filter((m) => m.genres.includes(selectedGenre));

  const visibleMovies = filteredMovies.slice(0, visibleCount);
  const hasMore = visibleCount < filteredMovies.length;

  function handleGenreSelect(genre) {
    setSelectedGenre(genre);
    setVisibleCount(PAGE_SIZE);
  }

  const genres = [
    "All",
    ...new Set(MOVIES.flatMap((m) => m.genres.split("/").map((g) => g.trim()))),
  ];

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
        {genres.map((genre) => (
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
          visibleMovies.map((movie, index) => (
            <MovieCard key={movie.title} {...movie} index={index} />
          ))
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
