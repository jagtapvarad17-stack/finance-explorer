import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  assetName: {
    type: String,
    required: true
  },

  assetType: {
    type: String,
    enum: ["ETF", "Stock", "Crypto", "Bond"],
    required: true
  },

  investedAmount: {
    type: Number,
    required: true
  },

  entryValue: {
    type: Number,
    required: true
  },

  currentValue: {
    type: Number,
    required: true
  },

  aiSentiment: {
    type: String,
    enum: ["Bullish", "Bearish", "Neutral"],
    required: true
  }

}, { timestamps: true });

export default mongoose.model("Investment", investmentSchema);
