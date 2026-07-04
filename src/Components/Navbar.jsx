import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../navbar.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/movies", label: "Movies" },
  { to: "/tv-series", label: "TV Series" },
  { to: "/anime", label: "Anime" },
  { to: "/lists", label: "Lists" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu when the route changes — done during render,
  // not in an effect, since we're just reacting to a prop-like value
  // (location.pathname), not syncing with anything external. Tracking
  // "previous pathname" in state and comparing on every render is the
  // pattern React docs recommend for this; calling setState here is
  // safe because it's conditional, so it can't loop.
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setMenuOpen(false);
  }

  // Theme application touches the DOM (document.documentElement) and
  // localStorage — both external systems — so this one legitimately
  // belongs in an effect.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Same reasoning: locking body scroll is a DOM side effect.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <span className="navbar__brand">Afterglow Cinema</span>

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

        <div className="navbar__actions">
          <button
            className="navbar__theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile-menu${menuOpen ? " navbar__mobile-menu--open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
