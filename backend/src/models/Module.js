import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  category: {
    type: String,
    enum: ["Budgeting", "Emergency Fund", "Credit Score", "Stocks"],
    required: true
  },

  creditReward: {
    type: Number,
    required: true
  },

  difficulty: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    default: "Beginner"
  }

}, { timestamps: true });

export default mongoose.model("Module", moduleSchema);
