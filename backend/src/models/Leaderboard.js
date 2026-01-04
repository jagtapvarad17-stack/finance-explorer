import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  score: {
    type: Number,
    required: true
  },

  rankPosition: {
    type: Number
  },

  badge: {
    type: String,
    enum: ["None", "Bronze", "Silver", "Gold"],
    default: "None"
  }

});

export default mongoose.model("Leaderboard", leaderboardSchema);
