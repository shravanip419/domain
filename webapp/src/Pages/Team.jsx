import React from "react";
import { motion } from "framer-motion";
import "./Team.css";
// import teamBanner from "https://res.cloudinary.com/dztzai54z/image/upload/v1760462045/69upscale_upscayl_uxaaf1.jpg"; // replace with your uploaded image path
import Navbar from "../components/Navbar"; 


const teamMembers = [
  {
    name: "Kapil Labde",
    role: "Chairperson",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455452/kapil_rdspkk.png",
  },
  {
    name: "Piyush Mistry",
    role: "Vice Chairperson",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455479/piyush_jx5pcf.png",
  },
  {
    name: "Himanshu Firke",
    role: "PR Head",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455457/himanshu_qeljaj.png",
  },
  {
    name: "Aditya Menon",
    role: "Puzzle Head",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455455/aditya_flnrc8.png",
  },
  
  {
    name: "Yash Patil",
    role: "Finance Head",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/v1760539925/Yash_Patil_rgtpxh.png",
  },
  {
    name: "Saumya Onnya",
    role: "Coordination Head",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455478/saumya_mo4tqm.png",
  },
  {
    name: "Krushnali Mungekar",
    role: "Design Head",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455472/krushnali_shevpg.png",
  },
  {
    name: "Shaun",
    role: "Ideation Head",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455483/shaun_koy432.png",
  },
  
  
  
  {
    name: "Ankita Gadre",
    role: "PR Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455480/ankita_ittlvb.png",
  },
  {
    name: "Aayush Pulkundwar",
    role: "PR Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455441/aayush_d8mw2y.png",
  },
  {
    name: "Arsia Huller",
    role: "PR Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455450/arsia_uuuiqo.png",
  },
 
  
  {
    name: "Aditya Sabnis",
    role: "Puzzle Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455464/sabnis_mva1lv.png",
  },
  {
    name: "xyz",
    role: "Puzzle Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455477/puzzle2_k6knle.png",
  },
  {
    name: "xyz",
    role: "Puzzle Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455445/puzzle4_rqnghv.png",
  },
  {
    name: "xyz",
    role: "Puzzle Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455444/puzzle1_hspcin.png",
  },
  {
    name: "xyz",
    role: "Puzzle Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455460/puzzle3_fnvsxm.png",
  },
  {
    name: "Shravani Pokale",
    role: "Finance Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455483/shravani_j3klrx.png",
  },
  {
    name: "Zayyan Shaikh",
    role: "Finance Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455488/zayyan_zf2es7.png",
  },

   {
    name: "Jaeden D'Souza",
    role: "Coordination Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455458/jaeden_aiqktu.png",
  },
  {
    name: "Clive",
    role: "Coordination Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455466/clive_stcwcm.png",
  },
  
  {
    name: "Liston D'Souza",
    role: "Design Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455474/liston_ffrnnp.png",
  },
  {
    name: "Tanvi Patil",
    role: "Design Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455495/tanvi_dq1mc3.png",
  },
  {
    name: "Rex",
    role: "Design Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455464/rex_rvfrn9.png",
  },
  
  {
    name: "Atharva Jahagirdar",
    role: "Ideation Team",
    img: "https://res.cloudinary.com/dztzai54z/image/upload/f_auto,q_auto,w_400/v1760455448/atharva_1_sftkyt.png",
  },


];

const Team = () => {
  return (<>
    <Navbar />
    
    <div className="team-container">
    
      
      <div className="team-banner">
        <img src="https://res.cloudinary.com/dztzai54z/image/upload/v1760462045/69upscale_upscayl_uxaaf1.jpg" 
        alt="Team Banner" />
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
              loading="lazy"
            />
            <h3 className="mini-name">{member.name}</h3>
            <p className="mini-role">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
     </>
  );
};

export default Team;
