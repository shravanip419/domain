import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },


  scores: {
    type: Map,
    of: Number,
    default: {},
  },

  totalScore: { type: Number, default: 0 },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


leaderboardSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});


leaderboardSchema.methods.updateTotalScore = function () {
  this.totalScore = Array.from(this.scores.values()).reduce(
    (sum, score) => sum + (score || 0),
    0
  );
};

export const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);
