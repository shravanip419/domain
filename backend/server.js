import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import puzzleRoutes from "./routes/puzzleRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Error:", err));

app.use("/api/puzzles", puzzleRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
