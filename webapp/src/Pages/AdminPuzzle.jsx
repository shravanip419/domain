import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./WeeklyPuzzle.css";

export default function AdminPuzzle() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [hint, setHint] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:4000/api/puzzles", { question, answer, hint });
      setMessage("✅ Puzzle added successfully!");
      setQuestion("");
      setAnswer("");
      setHint("");
    } catch (err) {
      setMessage("❌ Failed to add puzzle.");
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="puzzle-container">
        <h2 className="title">Add a New Weekly Puzzle</h2>

        <input
          type="text"
          placeholder="Enter puzzle question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="answer-input"
        />
        <input
          type="text"
          placeholder="Enter answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="answer-input"
        />
        <input
          type="text"
          placeholder="Enter hint"
          value={hint}
          onChange={(e) => setHint(e.target.value)}
          className="answer-input"
        />

        <button onClick={handleSubmit} className="btn">
          Add Puzzle
        </button>

        {message && <p className="feedback">{message}</p>}
      </div>
    </>
  );
}
