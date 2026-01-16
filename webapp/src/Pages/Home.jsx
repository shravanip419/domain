import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../Pages/AboutUs";
import "./Home.css";

import math1 from "../assets/math1.jpeg";
import math2 from "../assets/math2.jpeg";
import math3 from "../assets/math6.jpeg";
import math4 from "../assets/math4.jpeg";
import math5 from "../assets/math5.jpeg";
import Footer from "../Components/Footer";

const avatarData = [
  { src: math1, alt: "Mathematics illustration", bg: "pink", top: "15%", left: "10%" },
  { src: math2, alt: "Math on black background", bg: "purple", top: "5%", right: "15%" },
  { src: math3, alt: "Rubiks cube", bg: "yellow", bottom: "5%", left: "20%" },
  { src: math4, alt: "Cat studying", bg: "blue", bottom: "0%", right: "0%" },
  { src: math5, alt: "Pikachu studying", bg: "green", top: "20%", right: "30%" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <main className="hero">
        <h1>
          <span className="highlight" aria-hidden="true"></span>
          Math it!!
        </h1>

        <h2>Math builds your brain</h2>

        {/* Floating avatars */}
        <div className="avatars-container" aria-hidden="true">
          {avatarData.map((a, i) => (
            <div
              key={i}
              className={`avatar ${a.bg}`}
              style={{
                top: a.top || "auto",
                bottom: a.bottom || "auto",
                left: a.left || "auto",
                right: a.right || "auto",
              }}
            >
              <img src={a.src} alt={a.alt} />
            </div>
          ))}
        </div>

        {/* Scroll Down */}
        <a href="#about" className="scroll-down">
          Scroll down
        </a>
      </main>

      {/* ABOUT US SECTION */}
      <AboutUs />

      <Footer/>
    </>
  );
}
