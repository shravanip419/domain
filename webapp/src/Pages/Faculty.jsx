import React from "react";
import { motion } from "framer-motion";
import "./Faculty.css";
import { FaUserCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Faculty() {
  const facultyData = [
    {
      name: "Prof. Revathy S",
      role: "Professor",
    },
    {
      name: "Prof. Manisha Seksaria",
      role: "Assistant Professor",
      img: "https://res.cloudinary.com/dztzai54z/image/upload/v1769001153/manishamaam_wq9mtj.jpg",
    },
  ];

  const AdvisorData = [
    {
      name: "Sanchita Warade",
      role: "Advisor",
      img: "https://res.cloudinary.com/dztzai54z/image/upload/v1769001281/Screenshot_2026-01-18_164916_roklop.png",
    },
    {
      name: "Sarvesh Tikekar",
      role: "Advisor",
      img: "https://res.cloudinary.com/dztzai54z/image/upload/v1769001280/Screenshot_2026-01-18_170658_uopkka.png",
    },
    {
      name: "Aibal Konuparamban",
      role: "Advisor",
      img: "https://res.cloudinary.com/dztzai54z/image/upload/v1769001281/Screenshot_2026-01-18_170712_tytpzj.png",
    },
    {
      name: "Arkaprabha Gosh",
      role: "Advisor",
      img: "https://res.cloudinary.com/dztzai54z/image/upload/v1769001279/Screenshot_2026-01-18_170718_p4b7y1.png",
    },
  ];

  return (
    <div className="faculty-page">
      <Navbar />

      {/* Faculty Section */}
      <header className="faculty-header">
        <h1>Our Faculty Co-ordinator</h1>
        <p>Meet the dedicated faculty coordinators of the DOMAIN Maths Club.</p>
      </header>

      <section className="faculty-grid">
        {facultyData.map((f, i) => (
          <div key={i} className="faculty-card">
            {f.img ? (
              <img src={f.img} alt={f.name} className="faculty-photo" />
            ) : (
              <FaUserCircle className="faculty-icon" />
            )}
            <div className="faculty-info">
              <h3>{f.name}</h3>
              <h4>{f.role}</h4>
            </div>
          </div>
        ))}
      </section>

      {/* Advisor Section */}
      <header className="faculty-header">
        <h1>Our Advisors</h1>
        <p>Meet the dedicated student advisors of the DOMAIN Maths Club.</p>
      </header>

      <div className="cards-grid">
        {AdvisorData.map((member, index) => (
          <motion.div
            key={index}
            className="mini-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="member-photo"
              loading="lazy"
            />
            <h3 className="mini-name">{member.name}</h3>
            <p className="mini-role">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
