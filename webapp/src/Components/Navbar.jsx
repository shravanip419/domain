import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "About Us", path: "/about" }, 
  { label: "Weekly Puzzles", path: "/admin/add-puzzle" }, 
  { label: "Leaderboard", path: "/leaderboard" },
  { label: "Faculty", path: "/faculty" },
  { label: "Team", path: "/team" },
  { label: "Contacts", path: "/contacts" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav aria-label="Primary">
      {/* Logo */}
      <div className="logo" aria-label="Domain logo">
        <Link to="/" className="DomainLogo">Domain</Link>
      </div>

      {/* Hamburger Menu for small screens */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Nav Links */}
      <ul className={menuOpen ? "show" : ""}>
        {navItems.map((item, i) => (
          <li key={i} tabIndex="0">
            <Link to={item.path} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
