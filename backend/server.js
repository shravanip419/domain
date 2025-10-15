import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'; // for .env variables
import puzzleRoutes from './routes/puzzleRoutes.js';
import authRoutes from './routes/authRoutes.js'; 
import { upload } from './config/cloudinaryConfig.js'; // 👈 Cloudinary setup

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
app.use(
  cors({
    origin: 'http://localhost:5173', // your React dev server
  })
);
app.use(express.json());

// Base route
app.get('/', (req, res) => {
  res.send('✨ API is running with Cloudinary integration...');
});

// Puzzle routes
app.use('/api/puzzles', puzzleRoutes);

app.use('/api/auth', authRoutes); 

// ---------------- CLOUDINARY UPLOAD ROUTE ---------------- //
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
    console.error('❌ Upload failed:', error);
    res.status(500).json({ success: false, message: 'Image upload failed' });
  }
});
// ---------------------------------------------------------- //

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
