import greatestHitsImg from "./assets/greatest-hits.jpg";
import queenOfChessImg from "./assets/queen-of-chess.jpg";
import scottPilgrimVsTheWorldImg from "./assets/scott-pilgrim-vs-the-world.jpg";
import fiveHundredDaysOfSummerImg from "./assets/five-hundred-days-of-summer.jpg";
import dallasBuyersClub from "./assets/dallas-buyers-club.jpg";
import snowden from "./assets/snowden.jpg";

export const MOVIES = [
  {
    image: queenOfChessImg,
    title: "Queen of Chess (2026)",
    genres: "Documentary",
    length: "N/A", // TODO: fill in real runtime
    rating: 10,
    synopsis:
      "Hungarian chess prodigy Judit Polgár challenges champion Garry Kasparov and her controlling father over 15 years, breaking gender barriers to become the greatest female player ever.",
    imdbUrl: "https://www.imdb.com/title/tt39162904",
  },
  {
    image: fiveHundredDaysOfSummerImg,
    title: "500 Days of Summer (2009)",
    genres: "Romance/Comedy",
    length: "95 min",
    rating: 10,
    synopsis:
      "Tom revisits the approximate one year he shared with Summer, the girl he thought he could spend the rest of his life with. She, on the other hand, does not believe in relationships or boyfriends.",
    imdbUrl: "https://www.imdb.com/title/tt1022603",
  },
  {
    image: greatestHitsImg,
    title: "The Greatest Hits (2024)",
    genres: "Romance/Musical",
    length: "94 min",
    rating: 8,
    synopsis:
      "Harriet discovers certain songs can transport her back in time. While she relives the past through romantic memories with her former boyfriend, her time travelling interferes with a burgeoning new love interest in the present.",
    imdbUrl: "https://www.imdb.com/title/tt2015349",
  },
  {
    image: scottPilgrimVsTheWorldImg,
    title: "Scott Pilgrim vs. the World (2010)",
    genres: "Action/Comedy",
    length: "112 min",
    rating: 7,
    synopsis:
      "Scott Pilgrim meets Ramona and instantly falls in love with her. But when he meets one of her exes at a band competition, he realises that he has to deal with all seven of her exes to woo her.",
    imdbUrl: "https://www.imdb.com/title/tt0446029",
  },
  {
    image: dallasBuyersClub,
    title: "Dallas Buyers Club (2013)",
    genres: "Drama",
    length: "117 min",
    rating: 8.5,
    synopsis:
      "In 1985 Dallas, electrician and hustler Ron Woodroof works around the system to help AIDS patients get the medication they need after he is diagnosed with the disease.",
    imdbUrl: "https://www.imdb.com/title/tt0790636/",
  },
  {
    image: snowden,
    title: "Snowden (2016)",
    genres: "Thriller/Action",
    length: "134 min",
    rating: 6.5,
    synopsis:
      "The NSA's illegal surveillance techniques are leaked to the public by one of the agency's employees, Edward Snowden, in the form of thousands of classified documents distributed to the press.",
    imdbUrl: "https://www.imdb.com/title/tt3774114/",
  },
];
