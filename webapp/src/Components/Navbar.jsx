import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "About Us", type: "scroll", target: "about" },
 // { label: "Weekly Puzzles", type: "route", path: "/weekly-puzzle" },
  { label: "Leaderboard", type: "route", path: "/leaderboard" },
  { label: "Faculty", type: "route", path: "/faculty" },
  { label: "Team", type: "route", path: "/team" },
  { label: "Events", type: "route", path: "/events" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  function NavigationHandler() {
    navigate("/Adminverify");
  }

  function handleScroll(target) {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav aria-label="Primary">
      {/* Logo */}
      <div className="logo" onDoubleClick={NavigationHandler}>
        <Link to="/" className="DomainLogo">Domain</Link>
      </div>

      {/* Hamburger */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        role="button"
        tabIndex={0}
      >
        ☰
      </div>

      {/* Nav Links */}
      <ul className={menuOpen ? "show" : ""}>
        {navItems.map((item, i) => (
          <li key={i}>
            {item.type === "route" ? (
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="nav-scroll"
                onClick={() => handleScroll(item.target)}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
