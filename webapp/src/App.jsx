import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import Home from "./Pages/Home";
import Team from "./pages/Team";
import Faculty from "./Pages/Faculty";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Faculty" element={<Faculty />} />
        
        
       </Routes>
    </Router>
  );
}
