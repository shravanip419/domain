import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./Pages/LeaderBoard";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Faculty from "./Pages/Faculty";
import WeeklyPuzzle from "./Pages/WeeklyPuzzle";
import AdminPuzzle from "./Pages/AdminPuzzle"; 
import './App.css'; 


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faculty" element={<Faculty />} />
        
        {/* CHANGED: Route now matches the shorter '/puzzle' path */}
        <Route path="/puzzle" element={<WeeklyPuzzle />} /> 
        
        <Route path="/admin/add-puzzle" element={<AdminPuzzle />} /> 
      </Routes>
    </Router>
  );
}
