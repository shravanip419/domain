import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import './AdminResponses.css';

const API_BASE_URL = 'http://localhost:4000/api/responses';

export default function AdminResponses() {
    const [responses, setResponses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { userRole, authToken } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect if not admin
        if (userRole !== 'admin') {
            navigate('/');
            return;
        }

        const fetchResponses = async () => {
            try {
                // Must send the authentication token in the request header
                const response = await axios.get(API_BASE_URL, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                setResponses(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching responses:', err);
                setError('Failed to load user responses. Check server connection or authorization.');
                setLoading(false);
            }
        };

        if (userRole === 'admin') {
            fetchResponses();
        }
    }, [userRole, authToken, navigate]);

    if (userRole !== 'admin') return null; // Already redirecting, but ensure nothing renders briefly

    if (loading) return <div className="admin-responses-container"><p>Loading submissions...</p></div>;

    return (
        <>
            <Navbar />
            <div className="admin-responses-container">
                <h2 className="responses-title">All Puzzle Submissions</h2>
                {error && <p className="responses-error">{error}</p>}
                
                {responses.length === 0 ? (
                    <p>No submissions have been recorded yet.</p>
                ) : (
                    <div className="responses-grid">
                        {responses.map((response) => (
                            <div key={response._id} className="response-card">
                                <h3>Puzzle ID: {response.puzzleId.slice(0, 8)}...</h3>
                                <p><strong>Submitted By:</strong> {response.username}</p>
                                <p><strong>User Answer:</strong> "{response.userAnswer}"</p>
                                <p><strong>Correct:</strong> {response.isCorrect ? '✅ Yes' : '❌ No'}</p>
                                <p className="timestamp">Time: {new Date(response.createdAt).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
