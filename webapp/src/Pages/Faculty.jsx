import React from "react";
import "./Faculty.css";
import { FaUserCircle, FaGlobe, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar"; // ✅ using shared navbar

export default function Faculty() {
  const facultyData = [
    {
      name: "Prof. Revathy S",
      role: "Professor",
      desc: "Dedicated mentor guiding students in the DOMAIN Maths Club.",
    },
    {
      name: "Prof. Manisha Seksaria",
      role: "Assistant Professor",
      desc: "Provides support and encouragement for learning initiatives.",
    },
  ];

  return (
    <div className="faculty-page">
      {/* ✅ Reusable Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="faculty-header">
        <h1>Our Faculty Co-ordinator</h1>
        <p>Meet the dedicated faculty coordinators of the DOMAIN Maths Club.</p>
      </header>

      {/* Faculty Cards */}
      <section className="faculty-grid">
        {facultyData.map((f, i) => (
          <div key={i} className="faculty-card">
            <FaUserCircle className="faculty-icon" />
            <div className="faculty-info">
              <h3>{f.name}</h3>
              <h4>{f.role}</h4>
              <p>{f.desc}</p>
              <div className="socials">
                <a href="#"><FaGlobe /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="mailto:professor@gmail.com"><FaEnvelope /></a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
