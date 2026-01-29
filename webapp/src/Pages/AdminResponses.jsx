import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./AdminResponses.css";

export default function AdminResponses() {
  const [week, setWeek] = useState("");
  const [month, setMonth] = useState("");
  const [message, setMessage] = useState("");
  const [weeklyWinners, setWeeklyWinners] = useState([]);
  const [monthlyWinners, setMonthlyWinners] = useState([]);

  const fetchWeeklyWinners = async () => {
    try {
      const res = await axios.get(
        `https://domain-deploy.onrender.com/api/puzzles/weekly/${week}`
      );
      setWeeklyWinners(res.data);
      setMessage(`Weekly winners for week ${week} fetched successfully!`);
    } catch (err) {
      console.error(err);
      setMessage("Can't fetch weekly winners!");
    }
  };

  const fetchMonthlyWinners = async () => {
    try {
      const weekArray = month
        .split(" ")
        .map((num) => parseInt(num))
        .filter((n) => !isNaN(n));

      const res = await axios.post(
        `http://localhost:4000/api/puzzles/monthly`,
        { weeks: weekArray }
      );

      setMonthlyWinners(res.data.slice(0, 3));
      setMessage("Top 3 monthly winners fetched successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Can't fetch monthly winners!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="admin-responses-container">
        <h2 className="responses-title">
          Get Weekly or Monthly Winners
        </h2>

        <div className="responses-grid">

          {/* ===== WEEKLY CARD ===== */}
          <div className="response-column">
            <div className="response-card">
              <h3>Weekly Winners</h3>

              <div className="card-controls">
                <input
                  type="text"
                  placeholder="Enter the Week Number"
                  value={week}
                  onChange={(e) => setWeek(e.target.value)}
                />

                <button onClick={fetchWeeklyWinners}>
                  Find Weekly Winners
                </button>

                {weeklyWinners.length > 0 && (
                  <ul className="winner-list">
                    {weeklyWinners.map((w, i) => (
                      <li key={i}>
                        🏅 <strong>{w.name}</strong> ({w.branch}) — {w.score} pts
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* ===== MONTHLY CARD ===== */}
          <div className="response-column">
            <div className="response-card">
              <h3>Monthly Winners (Top 3)</h3>

              <div className="card-controls">
                <input
                  type="text"
                  placeholder="Enter weeks e.g. 1 2 3 4"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />

                <button onClick={fetchMonthlyWinners}>
                  Find Monthly Winners
                </button>

                {monthlyWinners.length > 0 && (
                  <ul className="winner-list">
                    {monthlyWinners.map((m, i) => (
                      <li key={i}>
                        {i === 0 && "🥇 "}
                        {i === 1 && "🥈 "}
                        {i === 2 && "🥉 "}
                        <strong>{m.name}</strong> ({m.branch}) —{" "}
                        {m.monthlyTotal} pts
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

        </div>

        {message && <p className="status-message">{message}</p>}
      </div>
    </>
  );
}
