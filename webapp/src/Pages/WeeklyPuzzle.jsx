// web/src/Pages/WeeklyPuzzle.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./WeeklyPuzzle.css";
import Navbar from "../components/Navbar"; 

const API_BASE_URL = "http://localhost:4000/api/puzzles";

export default function WeeklyPuzzle() {
  const [puzzles, setPuzzles] = useState([]); 
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [isAdmin, setIsAdmin] = useState(true); 

  const navigate = useNavigate(); 

    const fetchPuzzles = () => {
        setLoading(true);
        axios.get(API_BASE_URL) 
            .then((res) => {
                setPuzzles(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching puzzles:", err);
                setFeedback("Error: Could not connect to the puzzle server.");
                setLoading(false);
            });
    };

  useEffect(() => {
        fetchPuzzles();
  }, []);

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
    setFeedback("");
    setShowHint(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this puzzle?")) {
        return;
    }

    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
        
        setPuzzles(puzzles.filter(p => p._id !== id));
        setFeedback("✅ Puzzle deleted successfully!");

    } catch (error) {
        console.error("Error deleting puzzle:", error);
        setFeedback("❌ Failed to delete puzzle.");
    }
  };

  const checkAnswer = (correctAnswer) => {
    if (!correctAnswer) return;

    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase();

    if (normalizedUserAnswer === normalizedCorrectAnswer) {
      setFeedback("✅ Correct! You cracked it!");
    } else {
      setFeedback("❌ Oops! Try again.");
    }
  };

  const handleAddPuzzleClick = () => {
    navigate("/admin/add-puzzle"); 
  };

  const renderPuzzles = () => {
    if (loading) {
      return <p>Loading puzzles...</p>;
    }
    
    if (puzzles.length === 0) {
        if (isAdmin) {
            return (
                <p>
                    No puzzles available. Click the '+' button to add the first one.
                </p>
            );
        }
        return <p>No puzzles are available right now. Check back soon!</p>;
    }

    return puzzles.map((puzzle, index) => (
      <div key={puzzle._id || index} className="single-puzzle-card"> 
            
            <p className="question">Puzzle {puzzles.length - index}: {puzzle.question}</p> 

            <input
              type="text"
              placeholder="Enter your answer"
              value={userAnswer}
              onChange={handleAnswerChange}
              className="answer-input"
            />

            <div className="buttons">
              <button onClick={() => checkAnswer(puzzle.answer)} className="btn">
                Submit
              </button>
              <button
                onClick={() => setShowHint(!showHint)}
                className="btn hint-btn"
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>

                {isAdmin && (
                    <button 
                        onClick={() => handleDelete(puzzle._id)} 
                        className="btn delete-btn"
                    >
                        Delete
                    </button>
                )}
            </div>

            {showHint && <p className="hint">💡 Hint: {puzzle.hint}</p>}
            {feedback && <p className="feedback">{feedback}</p>}
          </div>
    ));
  };

  return (
    <>
      <Navbar />
      <div className="puzzle-container">
            <div className="title-bar"> 
                <h2 className="title">All Puzzles</h2>
                {isAdmin && (
                    <button
                        className="btn add-puzzle-btn"
                        onClick={handleAddPuzzleClick}
                        title="Add New Puzzle"
                    >
                        +
                    </button>
                )}
            </div>
            {renderPuzzles()}
            {!loading && feedback && <p className="feedback">{feedback}</p>} 
      </div>
    </>
  );
}