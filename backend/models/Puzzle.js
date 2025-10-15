import mongoose from "mongoose";

// Puzzle Schema
const puzzleSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  hint: { type: String, default: '' },
});

// Response Schema
const responseSchema = new mongoose.Schema({
  puzzleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Puzzle', required: true },
  username: { type: String, required: true }, // or userId if you want
  userAnswer: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Export both models
export const Puzzle = mongoose.model("Puzzle", puzzleSchema);
export const Response = mongoose.model("Response", responseSchema);
