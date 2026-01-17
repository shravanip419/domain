import React, { useState } from "react";
import "./Event.css";

// local image imports (keep yours)
import event11 from "../assets/event1.1.jpeg"
import event12 from "../assets/event1.2.jpeg";
import event13 from "../assets/event1.3.jpeg";
import event14 from "../assets/event1.4.jpeg";
import event15 from "../assets/event1.5.jpeg";
import event16 from "../assets/event1.6.jpeg";
import event21 from "../assets/event2.1.jpg";
import event22 from "../assets/event2.2.jpg";
import event23 from "../assets/event2.3.jpg";
import event24 from "../assets/event2.4.jpg";
import event25 from "../assets/event2.5.jpg";
import Navbar from "../components/Navbar";

const events = [
  {
    title: "TechQuest 2025",
    images: [event11, event12, event13, event14, event15, event16],
    desc: "TechQuest is DBIT’s annual treasure hunt organized by the Student Council, where every club brings its own creative twist to fun and challenging puzzles. The Maths Domain adds a thrilling edge with logic-driven clues and problem-solving adventures that test wit, teamwork, and speed.",
  },
  {
    title: "Calculator Workshop",
    images: [event21, event22, event23, event24, event25],
    desc: "A hands-on session designed to unlock the full potential of scientific and programmable calculators. Participants learn shortcuts, smart tricks, and advanced functions to solve complex mathematical problems efficiently and elevate their computational skills. Fun Games were also conducted where each and every student participated with great enthusiasm!!",
  },
];

const Event = () => {
  // Initialize as an array of zeros matching events length
  const [currentImage, setCurrentImage] = useState(() =>
    events.map(() => 0)
  );

  const handlePrev = (index) => {
    const total = events[index].images.length;
    setCurrentImage((prev) => {
      const next = [...prev];
      // ensure we have a valid number (should be, because we initialized)
      const curr = Number.isInteger(next[index]) ? next[index] : 0;
      next[index] = (curr - 1 + total) % total;
      return next;
    });
  };

  const handleNext = (index) => {
    const total = events[index].images.length;
    setCurrentImage((prev) => {
      const next = [...prev];
      const curr = Number.isInteger(next[index]) ? next[index] : 0;
      next[index] = (curr + 1) % total;
      return next;
    });
  };

  return (
  <>
  <Navbar/>
    <div className="event-page">
      <h1 className="event-title">Events Conducted in 2025 By Domain</h1>
      <div className="event-grid">
        {events.map((event, index) => {
          const current = currentImage[index] ?? 0;
          return (
            <div key={index} className="event-card">
              <div className="carousel-container">
                <button
                  className="arrow left"
                  onClick={() => handlePrev(index)}
                  aria-label={`Previous image for ${event.title}`}
                >
                  ❮
                </button>

                <img
                  src={event.images[current]}
                  alt={`${event.title} ${current + 1}`}
                  className="event-img"
                />

                <button
                  className="arrow right"
                  onClick={() => handleNext(index)}
                  aria-label={`Next image for ${event.title}`}
                >
                  ❯
                </button>
              </div>

              <div className="event-info">
                <h2>{event.title}</h2>
                <p>{event.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Event;
