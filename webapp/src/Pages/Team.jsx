import React from "react";
import { motion } from "framer-motion";
import "./Team.css";
import teamBanner from "../assets/team-banner.png"; // replace with your uploaded image path

// Import member photos
import maya from "../assets/maya.png";
// import ted from "../assets/ted.png";
// import ella from "../assets/ella.png";
// import daniel from "../assets/daniel.png";

const teamMembers = [
  {
    name: "MAYA",
    role: "Brand Marketing",
    img: maya,
  },
  {
    name: "TED",
    role: "Strategic Planning",
    img: maya,
  },
  {
    name: "ELLA",
    role: "Social Media Marketing",
    img: maya,
  },
  {
    name: "DANIEL",
    role: "Digital Marketing",
    img: maya,
  },
];

const Team = () => {
  return (
    <div className="team-container">
      {/* Top Banner */}
      <div className="team-banner">
        <img src={teamBanner} alt="Team Banner" />
      </div>

      {/* Section Title */}
      <div className="team-title">
        <h1>Meet Our Team</h1>
      </div>

      {/* Cards Grid */}
      <div className="cards-grid">
        {teamMembers.map((member, index) => (
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
            />
            <h3 className="mini-name">{member.name}</h3>
            <p className="mini-role">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
