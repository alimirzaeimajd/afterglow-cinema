import { NavLink } from "react-router-dom";
import "../navbar.css";

const NAV_LINKS = [
  { to: "/", label: "Movies" },
  { to: "/tv-series", label: "TV Series" },
  { to: "/anime", label: "Anime" },
  { to: "/lists", label: "Lists" },
  { to: "/blog", label: "Blog" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <span className="navbar__brand">MyWatchlist</span>
        <div className="navbar__links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `navbar__link${isActive ? " navbar__link--active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
