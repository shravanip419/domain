import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Math It!!</h3>

        <p>
          Where logic meets creativity!!  
          Think smarter. Solve better. Have fun doing math.
        </p>

        
        <span className="footer-line"></span>

        <p className="footer-copy">
          © {new Date().getFullYear()} Domain Math Club · All rights reserved
        </p>
      </div>
    </footer>
  );
}
