import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Login.css';
import Navbar from '../components/Navbar';

const API_BASE_URL = 'http://localhost:4000/api/auth/login';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        setError('');

        try {
            // Note: Your backend needs a new route (POST /api/auth/login) to handle this
            const response = await axios.post(API_BASE_URL, { username, password });
            
            const { token, user } = response.data;

            // Save token and user data (including role) in the context
            login(token, user.username, user.role);

            // Redirect user based on their role after successful login
            if (user.role === 'admin') {
                navigate('/admin/responses');
            } else {
                navigate('/puzzle');
            }

        } catch (err) {
            console.error('Login error:', err);
            setError('Invalid credentials or server error. Please try again.');
        }
    };

    return (<> <Navbar />
        <div className="login-container">
            <h2 className="login-title">Sign In to Solve Puzzles</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username (e.g., admin or user)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password (e.g., 12345)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="login-error">{error}</p>}
                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
        </>
    );
}
