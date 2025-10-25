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
        `http://localhost:4000/api/puzzles/weekly/${week}`
      );
      setWeeklyWinners(res.data);
      setMessage(`Weekly winners for week ${week} fetched successfully!`);
    } catch (err) {
      console.error(err);
      setMessage(" Can't fetch weekly winners!");
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

      
      const topThree = res.data.slice(0, 3);
      setMonthlyWinners(topThree);
      setMessage(` Top 3 monthly winners for weeks: ${weekArray.join(", ")}`);
    } catch (err) {
      console.error(err);
      setMessage(" Can't fetch monthly winners!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-responses-container">
        <h2 className="responses-title">Get Weekly or Monthly Winners</h2>

        <div className="responses-grid">
     
          <div className="response-card">
            <h3>Weekly Winners</h3>
            <input
              type="text"
              placeholder="Enter the Week Number"
              value={week}
              onChange={(e) => setWeek(e.target.value)}
            />
            <button onClick={fetchWeeklyWinners}>Find</button>

            {weeklyWinners.length > 0 && (
              <ul>
                {weeklyWinners.map((w, i) => (
                  <li key={i}>
                    🥇 <b>{w.name}</b> ({w.branch}) — {w.score} pts
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Monthly Winners Section */}
          <div className="response-card">
            <h3>Monthly Winners (Top 3)</h3>
            <input
              type="text"
              placeholder="Enter weeks range e.g. 1 2 3 4"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            <button onClick={fetchMonthlyWinners}>Find</button>

            {monthlyWinners.length > 0 && (
              <ul>
                {monthlyWinners.map((m, i) => (
                  <li key={i}>
                    {i === 0 && "🥇 "}
                    {i === 1 && "🥈 "}
                    {i === 2 && "🥉 "}
                    <b>{m.name}</b> ({m.branch}) — {m.monthlyTotal} pts
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {message && <p className="status-message">{message}</p>}
      </div>
    </>
  );
}
