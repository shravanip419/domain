import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "About Us", path: "/about", subItems: ["Sub 1", "Sub 2"] },
  { label: "Weekly Puzzles", path: "/puzzles" },
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
        Domain
      </div>

      {/* Hamburger toggle */}
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

      {/* Nav items */}
      <ul className={menuOpen ? "show" : ""}>
        {navItems.map((item, i) => (
          <li
            key={i}
            tabIndex="0"
            aria-haspopup={item.subItems ? "true" : undefined}
          >
            <Link to={item.path} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
            {item.subItems && (
              <ul aria-label={`${item.label} submenu`}>
                {item.subItems.map((sub, idx) => (
                  <li key={idx} tabIndex="-1">
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

     <div className="right-controls">
       <Link to="/" className="login-btn">Home</Link>
      </div> 
    </nav>
  );
}
