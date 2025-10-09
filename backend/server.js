const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Fix 1: Change import to require for all routes
const puzzleRoutes = require('./routes/puzzleRoutes');
const authRoutes = require('./routes/authRoutes'); // New auth route

// dotenv is highly recommended for environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/puzzledb';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/puzzles', puzzleRoutes);
app.use('/api/auth', authRoutes); // NEW: Authentication routes

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
