import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'; // for .env variables
import leaderboardRoutes from "./routes/leaderboardRoutes.js"
import authRoutes from './routes/authRoutes.js'; 
import { upload } from './config/cloudinaryConfig.js'; 

// Initialize app
const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/puzzledb';

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.log('❌ MongoDB connection error:', err));

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://domain-deploy1.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

// Base route
app.get('/', (req, res) => {
  res.send('✨ API is running with Cloudinary integration...');
});

// leaderboard routes
app.use('/api/puzzles', leaderboardRoutes);

app.use('/api/auth', authRoutes); 
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file || !req.file.path) {
      return res.status(400).json({ success: false, message: 'No image uploaded' });
    }

    res.json({
      success: true,
      imageUrl: req.file.path, // 🌩️ Cloudinary-hosted image URL
    });
  } catch (error) {
    console.error(' Upload failed:', error);
    res.status(500).json({ success: false, message: 'Image upload failed' });
  }
});
// ---------------------------------------------------------- //

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
