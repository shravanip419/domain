import Puzzle from "../models/Puzzle.js";

// get all puzzles, sorted by creation date (newest first)
export const getPuzzles = async (req, res) => {
  try {
    // Sort by _id descending (-1) to ensure the latest puzzle 
    // is the first element in the array (index 0).
    const puzzles = await Puzzle.find().sort({ _id: -1 });
    res.json(puzzles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get single puzzle by ID
export const getPuzzleById = async (req, res) => {
  try {
    const puzzle = await Puzzle.findById(req.params.id);
    if (!puzzle) return res.status(404).json({ message: "Not found" });
    res.json(puzzle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// add puzzle (admin)
export const addPuzzle = async (req, res) => {
  try {
    const newPuzzle = new Puzzle(req.body);
    await newPuzzle.save();
    res.status(201).json(newPuzzle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// update puzzle
export const updatePuzzle = async (req, res) => {
  try {
    const puzzle = await Puzzle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // Check if the puzzle was found and updated
    if (!puzzle) return res.status(404).json({ message: "Puzzle not found" });
    res.json(puzzle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delete puzzle
export const deletePuzzle = async (req, res) => {
  try {
    const result = await Puzzle.findByIdAndDelete(req.params.id);
    // Check if a puzzle was actually deleted
    if (!result) return res.status(404).json({ message: "Puzzle not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};