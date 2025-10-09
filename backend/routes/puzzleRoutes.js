const express = require('express');
const {
  getPuzzles,
  getPuzzleById,
  addPuzzle,
  updatePuzzle,
  deletePuzzle,
} = require("../controllers/puzzleController.js");
const { protect, admin } = require('../middleware/authMiddleware.js'); // NEW IMPORT

const router = express.Router();

// Public routes (anyone can view puzzles)
router.get("/", getPuzzles);
router.get("/:id", getPuzzleById);

// Admin-only routes: Protected with 'protect' (logged in) and 'admin' (role check)
router.post("/", protect, admin, addPuzzle);      // Only admin can add
router.put("/:id", protect, admin, updatePuzzle);  // Only admin can update
router.delete("/:id", protect, admin, deletePuzzle); // Only admin can delete

module.exports = router;
export default router;