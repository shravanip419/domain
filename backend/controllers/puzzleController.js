const express = require('express');
const { 
    getPuzzles, 
    getPuzzleById, 
    addPuzzle, 
    updatePuzzle, 
    deletePuzzle 
} = require('../controllers/puzzleController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Public Routes (no login required)
router.get('/', getPuzzles);
router.get('/:id', getPuzzleById);

// Admin Protected Routes (requires login and 'admin' role)
// POST route to add a new puzzle
router.post('/', protect, admin, addPuzzle);

// PUT route to update an existing puzzle (Requires Admin Role)
// NOTE: We don't have a frontend for this yet, but the route is protected.
router.put('/:id', protect, admin, updatePuzzle);

// DELETE route to delete a puzzle
router.delete('/:id', protect, admin, deletePuzzle);

module.exports = router;
