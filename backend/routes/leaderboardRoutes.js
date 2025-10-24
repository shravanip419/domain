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


router.get('/', getAllParticipants);


router.get('/:id', getParticipantById);


router.post('/update', addOrUpdateWeeklyScore);


router.get('/weekly/:weekNo', getWeeklyWinners);


router.post('/monthly', getMonthlyLeaderboard);


router.delete('/:id', deleteParticipant);

export default router;
