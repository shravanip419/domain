import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// Load environment variables using the ES Module approach
import 'dotenv/config'; 

// Import routes using ES Module syntax (note the required .js extension for local files)
import puzzleRoutes from './routes/puzzleRoutes.js';
// import authRoutes from './routes/authRoutes.js';

// Initialize the application
const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/puzzledb';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Middleware
app.use(cors({
    // Make sure this origin matches your frontend development server
    origin: 'http://localhost:5173', 
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/puzzles', puzzleRoutes);
app.use('/api/auth', authRoutes); // Authentication routes

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
