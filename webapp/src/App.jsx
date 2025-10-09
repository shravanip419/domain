import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./Pages/LeaderBoard";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Faculty from "./Pages/Faculty";
import WeeklyPuzzle from "./Pages/WeeklyPuzzle";
import AdminPuzzle from "./Pages/AdminPuzzle"; 
import Login from "./Pages/Login";
import AdminResponses from "./Pages/AdminResponses";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import './App.css'; 


export default function App() {
  return (
    <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faculty" element={<Faculty />} />
             <Route path="/login" element={<Login />} />

                {/* --- PROTECTED ROUTES --- */}
                
                {/* User/Admin can access Puzzles */}
                <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
                    <Route path="/puzzle" element={<WeeklyPuzzle />} />
                </Route>

                {/* Only Admin can access Add Puzzle */}
                <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                    <Route path="/admin/add-puzzle" element={<AdminPuzzle />} /> 
                </Route>

                {/* Only Admin can access Responses */}
                <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                    <Route path="/admin/responses" element={<AdminResponses />} /> 
                </Route>
          </Routes>
        </Router>
    </AuthProvider>
  );
}
