import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./WeeklyPuzzle.css";

export default function AdminLeaderboard() {
  // Admin list
  const Admins = [{ title: "Adithya" ,password :"1333"},];

  // Admin auth state
  const [admin, setAdmin] = useState(false);
  const [adminName, setAdminName] = useState("");
  const[adpass ,setadpass] = useState("")
  const [authMessage, setAuthMessage] = useState("");

  // Form state
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [weekNo, setWeekNo] = useState("");
  const [score, setScore] = useState("");
  const [message, setMessage] = useState("");

  const verifyAdmin = () => {
    const trimmedName = adminName.trim().toLowerCase();
    const trimmedpass = adpass.trim().toLowerCase()
    const isAdmin = Admins.some(
      (a) => a.title.toLowerCase() === trimmedName && a.password.toLocaleLowerCase
    );

    if (isAdmin) {
      setAdmin(true);
      setAuthMessage("");
    } else {
      setAdmin(false);
      setAuthMessage(" You are not authorized to access this page.");
    }
  };

  const handleSubmit = async () => {
    try {
      if (!name || !branch || !year || !weekNo || score === "") {
        setMessage("⚠ Please fill all fields before submitting!");
        return;
      }

      await axios.post("http://localhost:4000/api/puzzles/update", {
        name,
        branch,
        year,
        weekNo: parseInt(weekNo),
        score: parseInt(score),
      });

      setMessage(" Score updated successfully!");
      setName("");
      setBranch("");
      setYear("");
      setWeekNo("");
      setScore("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to update score.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="puzzle-container">
        {!admin ? (
          <>
            <h2 className="title">Admin Login</h2>

            <input
              type="text"
              placeholder="Enter your name"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
              className="answer-input"
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={adpass}
              onChange={(e) => setadpass(e.target.value)}
              className="answer-input"
            />
            <br />
            <button onClick={verifyAdmin} className="btn">
              Enter
            </button>

            {authMessage && <p className="feedback">{authMessage}</p>}
          </>
        ) : (
          <>
            <h2 className="title">Update Weekly Puzzle Leaderboard</h2>

            <input
              type="text"
              placeholder="Participant Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="answer-input"
            />

            <input
              type="text"
              placeholder="Department / Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="answer-input"
            />

            <input
              type="text"
              placeholder="Year of Study (e.g. SE, TE, BE)"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="answer-input"
            />

            <input
              type="number"
              placeholder="Week Number (e.g. 1, 2, 3, 4)"
              value={weekNo}
              onChange={(e) => setWeekNo(e.target.value)}
              className="answer-input"
            />

            <input
              type="number"
              placeholder="Score"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="answer-input"
            />

            <button onClick={handleSubmit} className="btn">
              Submit / Update
            </button>

            {message && <p className="feedback">{message}</p>}
          </>
        )}
      </div>
    </>
  );
}
