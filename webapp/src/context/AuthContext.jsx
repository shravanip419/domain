import React, { createContext, useState, useEffect } from 'react';

// 1. Create the Context
export const AuthContext = createContext();

// 2. Create the Provider Component
export const AuthProvider = ({ children }) => {
    // Initialize state from localStorage for persistence across refreshes
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('authToken') ? true : false
    );
    const [authToken, setAuthToken] = useState(
        localStorage.getItem('authToken') || null
    );
    const [username, setUsername] = useState(
        localStorage.getItem('username') || null
    );
    const [userRole, setUserRole] = useState(
        localStorage.getItem('userRole') || 'guest' // Default role is guest
    );

    // Login function
    const login = (token, user, role) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('username', user);
        localStorage.setItem('userRole', role);

        setIsAuthenticated(true);
        setAuthToken(token);
        setUsername(user);
        setUserRole(role);
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        localStorage.removeItem('userRole');

        setIsAuthenticated(false);
        setAuthToken(null);
        setUsername(null);
        setUserRole('guest');
    };
    
    // Check local storage on mount
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('username');
        const role = localStorage.getItem('userRole');

        if (token && user && role) {
            setIsAuthenticated(true);
            setAuthToken(token);
            setUsername(user);
            setUserRole(role);
        }
    }, []);

    const value = {
        isAuthenticated,
        authToken,
        username,
        userRole,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
