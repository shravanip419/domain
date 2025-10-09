import mongoose from "mongoose";

const puzzleSchema = new mongoose.Schema({
  question: String,
  answer: String,
  hint: String,
});

const responseSchema = new mongoose.Schema({
    puzzleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Puzzle', required: true },
    username: { type: String, required: true }, // or userId
    userAnswer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Puzzle", puzzleSchema);
