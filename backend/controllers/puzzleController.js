
import { Puzzle, Response } from '../models/Puzzle.js';


// Get all puzzles
export const getPuzzles = async (req, res) => {
  try {
    const puzzles = await Puzzle.find();
    res.json(puzzles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching puzzles' });
  }
};

// Get a single puzzle by ID
export const getPuzzleById = async (req, res) => {
  try {
    const puzzle = await Puzzle.findById(req.params.id);
    if (!puzzle) return res.status(404).json({ message: 'Puzzle not found' });
    res.json(puzzle);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching puzzle' });
  }
};

// Add a new puzzle (admin only)
export const addPuzzle = async (req, res) => {
  try {
    const { question, answer, hint } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: 'Question and answer are required' });
    }

    const newPuzzle = new Puzzle({
      question,
      answer,
      hint,
    });

    const savedPuzzle = await newPuzzle.save();
    res.status(201).json(savedPuzzle);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error adding puzzle' });
  }
};

// Update puzzle by ID (admin only)
export const updatePuzzle = async (req, res) => {
  try {
    const puzzle = await Puzzle.findById(req.params.id);
    if (!puzzle) return res.status(404).json({ message: 'Puzzle not found' });

    const { question, answer, hint } = req.body;
    if (question) puzzle.question = question;
    if (answer) puzzle.answer = answer;
    if (hint) puzzle.hint = hint;

    const updatedPuzzle = await puzzle.save();
    res.json(updatedPuzzle);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error updating puzzle' });
  }
};

// Delete puzzle by ID (admin only)
export const deletePuzzle = async (req, res) => {
  try {
    const puzzle = await Puzzle.findById(req.params.id);
    if (!puzzle) return res.status(404).json({ message: 'Puzzle not found' });

    await puzzle.remove();
    res.json({ message: 'Puzzle deleted successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error deleting puzzle' });
  }
};
