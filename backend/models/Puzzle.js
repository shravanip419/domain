import mongoose from "mongoose";

const puzzleSchema = new mongoose.Schema({
  question: String,
  answer: String,
  hint: String,
});

export default mongoose.model("Puzzle", puzzleSchema);
