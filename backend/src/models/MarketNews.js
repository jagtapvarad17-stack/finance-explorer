import mongoose from "mongoose";

const marketNewsSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true
  },

  source: {
    type: String,
    required: true
  },

  sentiment: {
    type: String,
    enum: ["Bullish", "Bearish", "Neutral"],
    required: true
  },

  aiSummary: {
    type: String,
    required: true
  },

  affectedAssets: [
    {
      assetName: String,
      impactLevel: {
        type: String,
        enum: ["Low", "Medium", "High"]
      }
    }
  ]

}, { timestamps: true });

export default mongoose.model("MarketNews", marketNewsSchema);
