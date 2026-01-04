import Leaderboard from "../models/Leaderboard.js";
import User from "../models/User.js";
import Investment from "../models/Investment.js";

/* -----------------------------------------
   CALCULATE USER SCORE
------------------------------------------*/
const calculateScore = async (userId) => {
  // Base score from credits
  const user = await User.findById(userId);
  if (!user) return 0;

  // Portfolio performance
  const investments = await Investment.find({ userId });

  const profitOrLoss = investments.reduce(
    (sum, inv) => sum + (inv.currentValue - inv.entryValue),
    0
  );

  // Simple scoring formula
  const score =
    user.credits +            // base points
    profitOrLoss * 2 +        // reward smart investing
    user.streak * 50;         // consistency bonus

  return Math.max(score, 0);
};

/* -----------------------------------------
   GET LEADERBOARD
------------------------------------------*/
export const getLeaderboard = async (req, res, next) => {
  try {
    const users = await User.find().select("_id fullName credits streak");

    // Build leaderboard data
    const leaderboardData = [];

    for (const user of users) {
      const score = await calculateScore(user._id);

      leaderboardData.push({
        userId: user._id,
        fullName: user.fullName,
        score
      });
    }

    // Sort by score DESC
    leaderboardData.sort((a, b) => b.score - a.score);

    // Assign rank & badge
    const finalLeaderboard = leaderboardData.map((entry, index) => {
      let badge = "None";
      if (index === 0) badge = "Gold";
      else if (index === 1) badge = "Silver";
      else if (index === 2) badge = "Bronze";

      return {
        rank: index + 1,
        fullName: entry.fullName,
        score: Math.round(entry.score),
        badge
      };
    });

    res.status(200).json({
      success: true,
      count: finalLeaderboard.length,
      leaderboard: finalLeaderboard
    });

  } catch (error) {
    next(error);
  }
};
