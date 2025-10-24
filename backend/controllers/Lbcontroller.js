import { Leaderboard } from "../models/Leaderboard.js";


export const getAllParticipants = async (req, res) => {
  try {
    const participants = await Leaderboard.find().sort({ totalScore: -1 });
    res.json(participants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching leaderboard" });
  }
};
export const getParticipantById = async (req, res) => {
  try {
    const participant = await Leaderboard.findById(req.params.id);
    if (!participant)
      return res.status(404).json({ message: "Participant not found" });
    res.json(participant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching participant" });
  }
};


export const addOrUpdateWeeklyScore = async (req, res) => {
  try {
    const { name, branch, year, weekNo, score } = req.body;
    if (!name || !branch || !year || !weekNo || score === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const weekKey = `week${weekNo}`;
    let participant = await Leaderboard.findOne({ name, branch, year });

    if (participant) {
      participant.scores.set(weekKey, score);
      participant.updateTotalScore();
      await participant.save();
      return res.json({ message: `Updated ${name} for ${weekKey}`, participant });
    } else {
      participant = new Leaderboard({
        name,
        branch,
        year,
        scores: { [weekKey]: score },
      });
      participant.updateTotalScore();
      await participant.save();
      return res
        .status(201)
        .json({ message: `Added new participant ${name}`, participant });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error updating score" });
  }
};


export const getWeeklyWinners = async (req, res) => {
  try {
    const { weekNo } = req.params;
    const weekKey = `scores.week${weekNo}`;

    const winners = await Leaderboard.find()
      .sort({ [weekKey]: -1 })
      .limit(3);

    const formatted = winners.map((p) => ({
      name: p.name,
      branch: p.branch,
      year: p.year,
      score: p.scores.get(`week${weekNo}`) || 0,
    }));

    res.json(formatted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching weekly winners" });
  }
};
export const getMonthlyLeaderboard = async (req, res) => {
  try {
    const { weeks } = req.body; // e.g., { weeks: [1, 2, 3, 4] }
    if (!weeks || !Array.isArray(weeks) || weeks.length === 0) {
      return res.status(400).json({ message: "Weeks array required" });
    }

    const participants = await Leaderboard.find();

    const results = participants.map((p) => {
      let monthlyTotal = 0;
      weeks.forEach((w) => {
        monthlyTotal += p.scores.get(`week${w}`) || 0;
      });
      return {
        name: p.name,
        branch: p.branch,
        year: p.year,
        monthlyTotal,
      };
    });

    results.sort((a, b) => b.monthlyTotal - a.monthlyTotal);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching monthly leaderboard" });
  }
};


export const deleteParticipant = async (req, res) => {
  try {
    const participant = await Leaderboard.findById(req.params.id);
    if (!participant)
      return res.status(404).json({ message: "Participant not found" });

    await participant.deleteOne();
    res.json({ message: "Participant deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error deleting participant" });
  }
};
