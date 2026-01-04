import Investment from "../models/Investment.js";
import Wallet from "../models/Wallet.js";
import User from "../models/User.js";

/* -----------------------------------------
   GET USER PORTFOLIO
------------------------------------------*/
export const getPortfolio = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const investments = await Investment.find({ userId }).sort({
      createdAt: -1
    });

    const totalInvested = investments.reduce(
      (sum, inv) => sum + inv.investedAmount,
      0
    );

    const currentValue = investments.reduce(
      (sum, inv) => sum + inv.currentValue,
      0
    );

    res.status(200).json({
      success: true,
      totalInvested,
      currentValue,
      profitOrLoss: currentValue - totalInvested,
      investments
    });
  } catch (error) {
    next(error);
  }
};

/* -----------------------------------------
   INVEST IN AN ASSET
------------------------------------------*/
export const investAsset = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { assetName, assetType, amount } = req.body;

    if (!assetName || !assetType || !amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid investment data"
      });
    }

    // Fetch wallet
    const wallet = await Wallet.findOne({ userId });
    if (!wallet || wallet.balance < amount) {
      return res.status(400).json({
        success: false,
        message: "Insufficient balance"
      });
    }

    // Simulated market price
    const entryValue = amount;

    // AI sentiment logic (mocked, Gemini-ready)
    const sentiments = ["Bullish", "Bearish", "Neutral"];
    const aiSentiment =
      sentiments[Math.floor(Math.random() * sentiments.length)];

    let multiplier = 1;
    if (aiSentiment === "Bullish") multiplier = 1.1;
    if (aiSentiment === "Bearish") multiplier = 0.9;

    const currentValue = Math.round(entryValue * multiplier);

    // Save investment
    const investment = await Investment.create({
      userId,
      assetName,
      assetType,
      investedAmount: amount,
      entryValue,
      currentValue,
      aiSentiment
    });

    // Update wallet
    wallet.balance -= amount;
    wallet.transactions.push({
      type: "INVESTMENT",
      amount: -amount,
      description: `Invested in ${assetName}`
    });

    await wallet.save();

    // Update user credits
    await User.findByIdAndUpdate(userId, {
      $inc: { credits: -amount }
    });

    res.status(201).json({
      success: true,
      message: "Investment successful",
      investment
    });

  } catch (error) {
    next(error);
  }
};
