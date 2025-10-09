import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./Pages/LeaderBoard";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Faculty from "./Pages/Faculty";
import Puzzle from "./Pages/WeeklyPuzzle";
import AdminPuzzle from "./Pages/AdminPuzzle"; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/admin" element={<AdminPuzzle />} /> 
      </Routes>
    </Router>
  );
}
