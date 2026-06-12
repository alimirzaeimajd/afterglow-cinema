# 🎬 Movies I Watched Recently

A personal movie blog built with React and Vite. Displays a curated list of recently watched films with their genre, synopsis, and a direct link to their IMDb page.

## Preview

> Dark themed, responsive movie cards — desktop shows a featured layout, mobile switches to a compact horizontal card.

## Tech Stack

- [React](https://react.dev/) — UI components
- [Vite](https://vitejs.dev/) — development server and build tool
- CSS custom properties — theming and design tokens

## Getting Started

**Install dependencies**
```bash
npm install
```

**Start the dev server**
```bash
npm run dev
```

**Build for production**
```bash
npm run build
```

## Project Structure

```
src/
├── assets/         # Movie poster images
├── App.jsx         # Main app and MovieCard component
├── App.css         # All styles
└── movies.js       # Movie data (title, genre, synopsis, IMDb link)
```

## Adding a New Movie

Open `src/movies.js` and add a new object to the `MOVIES` array:

```js
{
  image: yourImageImport,
  title: "Movie Title (Year)",
  genres: "Genre",
  synopsis: "Short description of the movie.",
  imdbUrl: "https://www.imdb.com/title/tt0000000",
}
```
