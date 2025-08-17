import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import math1 from "../assets/math1.jpeg";
import math2 from "../assets/math2.jpeg";
import math3 from "../assets/math31.jpeg";
import math4 from "../assets/math4.jpeg";
import math5 from "../assets/math5.jpeg";

const navItems = [
  { label: "About Us", path: "/about", subItems: ["Sub 1", "Sub 2"] },
  { label: "Weekly Puzzles", path: "/puzzles" },
  { label: "Leaderboard", path: "/leaderboard" },
  { label: "FACULTY", path: "/faculty" },
  { label: "Team", path: "/team" },
  { label: "Contacts", path: "/contacts" },
];

const avatarData = [
  { src: math1, alt: "White bg mathematics written on it", bg: "pink", top: "15%", left: "10%" },
  { src: math2, alt: "maths written on a black background", bg: "purple", top: "2%", right: "15%" },
  { src: math3, alt: "rubriks cube with black bg", bg: "yellow", bottom: "3%", left: "20%" },
  { src: math4, alt: "Cat", bg: "blue", bottom: "0%", right: "0%" },
  { src: math5, alt: "pikachu", bg: "green", top: "40%", right: "18%" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav aria-label="Primary">
        <div className="logo" aria-label="Domain logo">
          Domain
        </div>

        {/* 👇 Hamburger menu toggle */}
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

        {/* 👇 Nav list */}
        <ul className={menuOpen ? "show" : ""}>
          {navItems.map((item, i) => (
            <li key={i} tabIndex="0" aria-haspopup={item.subItems ? "true" : undefined}>
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

        {/* (optional right controls) */}
        {/* 
        <div className="right-controls">
          <button className="login-btn" aria-label="Login to your account">
            Login
          </button>
        </div> 
        */}
      </nav>

      <main role="main">
        <h1>
          <span className="highlight" aria-hidden="true"></span>
          Math it!!
        </h1>
        <h2>Math builds your brain</h2>

        <div className="avatars-container" aria-hidden="true">
          {avatarData.map((a, i) => {
            const style = {
              top: a.top || "auto",
              bottom: a.bottom || "auto",
              left: a.left || "auto",
              right: a.right || "auto",
            };
            const className = `avatar ${a.bg}`;
            return (
              <div className={className} style={style} key={i}>
                <img
                  src={a.src}
                  alt={a.alt}
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
            );
          })}
        </div>

        <div className="scroll-down" aria-label="Scroll down indicator">
          Scroll down
        </div>
      </main>
    </>
  );
}
