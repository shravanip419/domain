import React from "react";

const navItems = [
  { label: "About Us", subItems: ["Sub 1", "Sub 2"] },
  { label: "Weekly Puzzles" },
  { label: "Leaderboard" },
  { label: "FACULTY" },
  { label: "Team" },
  { label: "Contacts" },
];
import math1 from "../assets/math1.jpeg";
import math2 from "../assets/math2.jpeg";
import math3 from "../assets/math31.jpeg";
import math4 from "../assets/math4.jpeg";
import math5 from "../assets/math5.jpeg";


const avatarData = [
  {
    src: math1,
    alt: "White bg mathematics written on it",
    bg: "pink",
    top: "15%",
    left: "10%",
  },
  {
    src: math2,
    alt: "Cartoon red panda girl with blonde hair wearing a gray dress holding a pink heart",
    bg: "purple",
    top: "5%",
    right: "15%",
  },
  {
    src: math3,
    alt: "rubriks cube with black bg",
    bg: "yellow",
    bottom: "3%",
    left: "20%",
  },
  {
    src: math4,
    alt: "Cat",
    bg: "blue",
    bottom: "0%",
    right: "0%",
  },
  {
    src: math5,
    alt: "pikachu",
    bg: "green",
    top: "40%",
    right: "20%",
  },
];


export default function Home() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body,html,#root {
          margin: 0; padding: 0; height: 100%;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #141418 15%, #462366 75%);
          color: #fff;
          overflow-x: hidden;
        }
        nav {
          display: flex;
          align-items: center;
          padding: 1rem 4vw;
          font-weight: 600;
          font-size: 0.95rem;
          user-select: none;
          position: relative;
          z-index: 10;
        }
        nav .logo {
          flex: 0 0 auto;
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          cursor: default;
          letter-spacing: 0.06em;
        }
        nav ul {
          flex: 1 1 auto;
          list-style: none;
          display: flex;
          gap: 1.5rem;
          margin-left: 2rem;
          padding-left: 0;
        }
        nav ul li {
          position: relative;
          cursor: pointer;
          padding: 0.2rem 0.2rem;
          color: #ddd;
          transition: color 0.3s ease;
        }
        nav ul li:hover, nav ul li:focus-within {
          color: #b7aefc;
        }
        nav ul li ul {
          position: absolute;
          top: 110%;
          left: 0;
          background: #2b264d;
          border-radius: 6px;
          box-shadow: 0 6px 20px rgba(23,0,72,0.8);
          list-style: none;
          padding: 0.5rem 0;
          min-width: 8rem;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          z-index: 20;
        }
        nav ul li:hover > ul, nav ul li:focus-within > ul {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        nav ul li ul li {
          padding: 0.3rem 1rem;
          color: #ccc;
          white-space: nowrap;
        }
        nav ul li ul li:hover, nav ul li ul li:focus {
          color: white;
          background: #7c67f6;
        }
        nav .right-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #bbb;
          font-size: 0.9rem;
          font-weight: 600;
        }
        nav .login-btn {
          background: linear-gradient(90deg, #ffaa29, #ea7c1c);
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          transition: box-shadow 0.3s ease;
          box-shadow: 0 0 15px 2px #f89e1a;
        }
        nav .login-btn:hover, nav .login-btn:focus {
          box-shadow: 0 0 25px 4px #fcbf49;
        }
        main {
          position: relative;
          height: calc(100vh - 56px);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 30vw ;
        }
        main h1 {
          font-size: 5vw;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: white;
          max-width: 600px;
          line-height: 1.1;
          position: relative;
          margin: 0;
          user-select: none;
        }
        main h1 .highlight {
          position: absolute;
          width: 240px;
          height: 70px;
          border: 2px solid #aa97f5;
          border-radius: 90px;
          top: 40%;
          left: -0.4ch;
          transform: rotate(2deg);
          pointer-events: none;
        }
        main h2 {
          margin-top: 0.25rem;
          font-size: 3vw;
          font-weight: 800;
          color: #8a86c3;
          max-width: 650px;
          border-right: 3px solid #cda8ff;
          white-space: nowrap;
          overflow: hidden;
          animation: typing 3s steps(20) forwards;
          user-select: none;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .avatars-container {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          overflow: visible;
          z-index: 1;
        }
        .avatar {
          position: absolute;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 0 15px 3px rgba(255,255,255,0.32);
          overflow: hidden;
          transition: transform 0.3s ease;
          cursor: default;
          user-select: none;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f0f0f0;
        }
        .avatar:hover {
          transform: scale(1.15);
          box-shadow: 0 0 25px 6px rgba(255,255,255,0.6);
          z-index: 99;
        }
        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
        }
        .avatar.pink { background: #ff9de2; border-color: #e07eff; }
        .avatar.purple { background: #a76de0; border-color: #7131db; }
        .avatar.yellow { background: #f3f48b; border-color: #dbce53; }
        .avatar.blue { background: #74a7fc; border-color: #3071db; }
        .avatar.green { background: #85e08f; border-color: #3eb530; }
        .scroll-down {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #bbb;
          user-select: none;
          cursor: default;
          text-align: center;
        }
        .scroll-down::after {
          content: "⬇";
          display: block;
          font-size: 1.6rem;
          margin-top: -5px;
          animation: bounce 1.5s infinite ease-in-out alternate;
        }
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(6px); }
        }
        @media (max-width: 720px) {
          main h1 {
            font-size: 8vw;
          }
          main h2 {
            font-size: 5vw;
            border-right: 2.5px solid #cda8ff;
          }
          .avatar {
            width: 90px;
            height: 90px;
          }
        }
      `}</style>
      <nav aria-label="Primary">
        <div className="logo" aria-label="Domain logo">
          Domain
        </div>
        <ul>
          {navItems.map((item, i) => (
            <li key={i} tabIndex="0" aria-haspopup={item.subItems ? "true" : undefined}>
              {item.label}
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
          <div>ENG</div>
          <button className="login-btn" aria-label="Login to your account">
            Login
          </button>
        </div>
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
    position: "absolute",
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


