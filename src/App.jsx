import "./App.css";
import { MOVIES } from "./movies";
import MovieCard from "./Components/MovieCard";

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
