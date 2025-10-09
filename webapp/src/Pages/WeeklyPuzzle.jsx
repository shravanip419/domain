import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { AuthContext } from '../context/AuthContext'; // NEW
import "./WeeklyPuzzle.css";
import Navbar from "../components/Navbar"; 

const API_BASE_URL = "http://localhost:4000/api/puzzles";

export default function WeeklyPuzzle() {
    // Get user state from context
    const { userRole, authToken, username } = useContext(AuthContext); // NEW
    const isAdmin = userRole === 'admin'; // NEW: Determine admin status dynamically

    const [puzzles, setPuzzles] = useState([]); 
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [showHint, setShowHint] = useState(false);
    const [loading, setLoading] = useState(true);
  
    const navigate = useNavigate(); 

    const fetchPuzzles = () => {
        setLoading(true);
        // Include Authorization header for protected routes if needed later
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
        // Must send auth token for deletion to be allowed by backend
        await axios.delete(`${API_BASE_URL}/${id}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        
        setPuzzles(puzzles.filter(p => p._id !== id));
        setFeedback("✅ Puzzle deleted successfully!");

    } catch (error) {
        console.error("Error deleting puzzle:", error);
        setFeedback("❌ Failed to delete puzzle. (Check backend token validation)");
    }
  };

  const checkAnswer = async (puzzleId, correctAnswer) => { // ADDED puzzleId and made function async
    if (!correctAnswer || !userAnswer.trim()) {
        setFeedback("Please enter an answer.");
        return;
    }

    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase();
    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer; // Determine correctness

    setFeedback(isCorrect ? "✅ Correct! Saving submission..." : "❌ Oops! Saving submission...");
    
    // --- NEW: Submit response to backend ---
    try {
        // Your backend needs a POST /api/responses route to handle this
        await axios.post('http://localhost:4000/api/responses', {
            puzzleId,
            userAnswer: userAnswer.trim(),
            isCorrect
        }, {
            headers: {
                // We need to send the token so the backend knows *who* submitted the answer
                'Authorization': `Bearer ${authToken}` 
            }
        });
        
        // Final feedback update
        setFeedback(isCorrect ? "✅ Correct! Submission saved." : "❌ Oops! Try again. Submission recorded.");
        setUserAnswer('');

    } catch (error) {
        console.error("Error saving submission:", error);
        setFeedback(`❌ Error saving submission: ${error.response?.data?.message || 'Server error.'}`);
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
                {/* Updated checkAnswer to pass puzzle ID */}
              <button onClick={() => checkAnswer(puzzle._id, puzzle.answer)} className="btn">
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
