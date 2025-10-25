import express from 'express';
import {
  getAllParticipants,
  getParticipantById,
  addOrUpdateWeeklyScore,
  getWeeklyWinners,
  getMonthlyLeaderboard,
  deleteParticipant
} from '../controllers/Lbcontroller.js';

const router = express.Router();



router.get('/weekly/:weekNo', getWeeklyWinners);
router.post('/monthly', getMonthlyLeaderboard);
router.get('/', getAllParticipants);
router.post('/update', addOrUpdateWeeklyScore);
router.get('/:id', getParticipantById);
router.delete('/:id', deleteParticipant);


export default router;
