import React from "react";
import { motion } from "framer-motion";
import "./Faculty.css";
import { FaUserCircle, FaGlobe, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar"; 

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

  const AdvisorData = [
    {
      name: "Sanchita Warade",
      role: "Advisor",
      img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455448/atharva_1_sftkyt.png"
    },
    {
      name: "Sarvesh Tikekar",
      role: "Advisor",
      img: "Provides support and encouragement for learning initiatives.",
    },
    {
      name: "Aibal Konuparamban",
      role: "Advisor",
      img: "Provides support and encouragement for learning initiatives.",
    },
    {
      name: "Arkaprabha Gosh",
      role: "Advisor",
      img: "Provides support and encouragement for learning initiatives.",
    },
  ];
  return (
    <div className="faculty-page">
      <Navbar />

      {/* Header Section */}
      <header className="faculty-header">
        <h1>Our Faculty Co-ordinator</h1>
        <p>Meet the dedicated faculty coordinators of the DOMAIN Maths Club.</p>
      </header>

      <section className="faculty-grid">
        {facultyData.map((f, i) => (
          <div key={i} className="faculty-card">
            <FaUserCircle className="faculty-icon" />
            <div className="faculty-info">
              <h3>{f.name}</h3>
              <h4>{f.role}</h4>
              <p>{f.img}</p>
            </div>
          </div>
        ))}
      </section>

      <header className="faculty-header">
        <h1>Our Advisors</h1>
        <p>Meet the dedicated Student advisors of the DOMAIN Maths Club.</p>
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
