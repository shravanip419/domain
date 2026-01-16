import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Leaderboard from "./Pages/LeaderBoard";
import Team from "./Pages/Team";
import Faculty from "./Pages/Faculty";
import WeeklyPuzzle from "./Pages/WeeklyPuzzle";
import AdminPuzzle from "./Pages/AdminPuzzle"; 
import Login from "./Pages/Login";
import AdminResponses from "./Pages/AdminResponses";
import Event from "./Pages/Event";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import "./App.css"; 

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 🌐 Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/weekly-puzzle" element={<WeeklyPuzzle />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/events" element={<Event />} />
          <Route path="/login" element={<Login />} />

          {/* 🔐 Protected Routes (User + Admin) */}
          <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
            {/* add user-only routes here later */}
          </Route>

          {/* 🔐 Admin Only Routes */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/add-puzzle" element={<AdminPuzzle />} />
            <Route path="/admin/responses" element={<AdminResponses />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
