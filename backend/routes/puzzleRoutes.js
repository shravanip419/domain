import express from "express";
import {
  getPuzzles,
  getPuzzleById,
  addPuzzle,
  updatePuzzle,
  deletePuzzle,
} from "../controllers/puzzleController.js";

const router = express.Router();

router.get("/", getPuzzles);
router.get("/:id", getPuzzleById);
router.post("/", addPuzzle);
router.put("/:id", updatePuzzle);
router.delete("/:id", deletePuzzle);

export default router;
