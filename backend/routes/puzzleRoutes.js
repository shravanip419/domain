import express from 'express';
import { getPuzzles, getPuzzleById, addPuzzle, updatePuzzle, deletePuzzle } from '../controllers/puzzleController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getPuzzles);
router.get('/:id', getPuzzleById);

// Admin routes
router.post('/', protect, admin, addPuzzle);
router.put('/:id', protect, admin, updatePuzzle);
router.delete('/:id', protect, admin, deletePuzzle);

export default router;
