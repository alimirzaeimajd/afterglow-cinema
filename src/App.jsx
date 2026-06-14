import "./App.css";
import { MOVIES } from "./movies";
import MovieCard from "./Components/MovieCard";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState();

  const genres = MOVIES.map((movie) => {
    return movie.genres;
  });
  console.log(genres);

  function handleSelect(selectedButton) {
    setSelectedGenre(selectedButton);
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

      <main className="movies-grid">
        {MOVIES.map((movie, index) => (
          <MovieCard key={movie.title} {...movie} index={index} />
        ))}
      </main>

      <div>
        {genres.map((genre) => {
          return (
            <button key={genre} onClick={() => handleSelect(genre)}>
              {genre}
            </button>
          );
        })}

        {!selectedGenre ? <p>please select a genre!</p> : null}
        {selectedGenre ? <p>{selectedGenre}</p> : null}
      </div>
    </div>
  );
}

export default App;
