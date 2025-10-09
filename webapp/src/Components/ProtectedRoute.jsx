

import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// Component to protect routes based on authentication status and optionally role
const ProtectedRoute = ({ allowedRoles }) => {
    const { isAuthenticated, userRole, loading } = useContext(AuthContext);

    // If still loading context data, just return null (or a spinner component if you have one)
    if (loading) return null; 

    if (!isAuthenticated) {
        // Not logged in, redirect to login page
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        // Logged in, but role is not allowed, redirect to home
        return <Navigate to="/" replace />;
    }

    // Authenticated and authorized
    return <Outlet />;
};

export default ProtectedRoute;
