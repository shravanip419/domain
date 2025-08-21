import React, { useState } from "react";
import "./WeeklyPuzzle.css";
import Navbar from "../components/Navbar"; 

export default function WeeklyPuzzle() {
  const puzzle = {
    question:
      "I am a three-digit number. My tens digit is five more than my ones digit, and my hundreds digit is eight less than my tens digit. What number am I?",
    answer: "194",
    hint: "Think about the relationship between hundreds, tens, and ones."
  };

  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showHint, setShowHint] = useState(false);

  const checkAnswer = () => {
    if (userAnswer.trim() === puzzle.answer) {
      setFeedback("🎉 Correct! You cracked it!");
    } else {
      setFeedback("❌ Oops! Try again.");
    }
  };

  return (
    <>
    <Navbar/>
    
    <div className="puzzle-container">
      <h2 className="title">Weekly Puzzle</h2>
      <p className="question">{puzzle.question}</p>

      <input
        type="text"
        placeholder="Enter your answer"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className="answer-input"
      />

      <div className="buttons">
        <button onClick={checkAnswer} className="btn">
          Submit
        </button>
        <button
          onClick={() => setShowHint(!showHint)}
          className="btn hint-btn"
        >
          {showHint ? "Hide Hint" : "Show Hint"}
        </button>
      </div>

      {showHint && <p className="hint">💡 Hint: {puzzle.hint}</p>}
      {feedback && <p className="feedback">{feedback}</p>}
    </div>
    </>
    
  );
  
}
