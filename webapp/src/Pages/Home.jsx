import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

import math1 from "../assets/math1.jpeg";
import math2 from "../assets/math2.jpeg";
import math3 from "../assets/math6.jpeg";
import math4 from "../assets/math4.jpeg";
import math5 from "../assets/math5.jpeg";

const avatarData = [
  { src: math1, alt: "White bg mathematics written on it", bg: "pink", top: "15%", left: "10%" },
  { src: math2, alt: "maths written on a black background", bg: "purple", top: "2%", right: "15%" },
  { src: math3, alt: "rubriks cube with black bg", bg: "yellow", bottom: "3%", left: "20%" },
  { src: math4, alt: "Cat", bg: "blue", bottom: "0%", right: "0%" },
  { src: math5, alt: "pikachu", bg: "green", top: "20%", right: "30%" },
];

export default function Home() {
  return (
    <>
    
      <Navbar />

      <main role="main">
        <h1>
          <span className="highlight" aria-hidden="true"></span>
          Math it!!
        </h1>
        <h2>Math builds your brain</h2>

        {/* Floating avatars */}
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
