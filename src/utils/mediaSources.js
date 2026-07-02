import { MOVIES } from "../movies";
import { TV_SERIES } from "../tvSeries";
import { ANIME } from "../anime";

export const MEDIA_SOURCES = {
  movie: { items: MOVIES, label: "Movie", basePath: "/movies" },
  tv: { items: TV_SERIES, label: "TV Series", basePath: "/tv-series" },
  anime: { items: ANIME, label: "Anime", basePath: "/anime" },
};
