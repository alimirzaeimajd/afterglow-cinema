# 🎬 Afterglow Cinema

A personal movie, TV, and anime journal — a curated record of what I've watched,
with ratings, genre filtering, and the occasional write-up when something's
worth unpacking.

## Preview

> Dark themed by default with a light mode toggle. Cards, filters, and pages
> are all responsive down to mobile.

## Tech Stack

- [React](https://react.dev/) — UI components
- [React Router](https://reactrouter.com/) — client-side routing
- [Vite](https://vitejs.dev/) — development server and build tool
- Plain CSS with custom properties — theming (dark/light) and design tokens

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
├── assets/             # Movie/show posters
├── Components/         # MovieCard, Navbar
├── pages/              # One component per route
├── utils/
│   ├── slugify.js       # title -> URL slug, used for blog routing
│   └── mediaSources.js  # maps a blog post's `type` to its data + base path
├── movies.js           # Movie data
├── tvSeries.js         # TV data (in progress)
├── anime.js            # Anime data (in progress)
├── blogs.js            # Blog post content, keyed by slug
├── App.jsx             # Route definitions
├── Layout.jsx          # Navbar + <Outlet /> shell
└── App.css, navbar.css, etc.  # Styles, split by feature area
```

## Routes

| Path           | Page                             |
| -------------- | --------------------------------- |
| `/`            | Home                               |
| `/movies`      | Movies grid, with genre filter     |
| `/tv-series`   | TV series (in progress)             |
| `/anime`       | Anime (in progress)                  |
| `/lists`       | Curated lists (in progress)           |
| `/blog`        | Blog index                             |
| `/blog/:slug`  | Individual blog post                    |
| `/contact`     | Contact form                             |
| `*`            | 404                                       |

## Adding a New Movie

Open `src/movies.js` and add a new object to the `MOVIES` array:

```js
{
  image: yourImageImport,
  title: "Movie Title (Year)",
  genres: "Genre",       // "/"-separated, e.g. "Action/Comedy"
  length: "112 min",
  rating: 8.5,             // out of 10, optional
  synopsis: "Short description of the movie.",
  imdbUrl: "https://www.imdb.com/title/tt0000000",
}
```

## Adding a Blog Post / Review

1. Add an entry to `BLOG_POSTS` in `src/blogs.js`, keyed by the same slug
   `slugify()` would generate from the movie/show title.
2. Set its `type` to `"movie"`, `"tv"`, or `"anime"` — this is how
   `mediaSources.js` knows which data file and back-link to use.
3. If the movie has a matching entry in `movies.js` (by title), its poster
   and a "Review" button will show up automatically on the movie card.
