import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  balance: {
    type: Number,
    required: true
  },

  transactions: [
    {
      type: {
        type: String,
        enum: ["MODULE_REWARD", "INVESTMENT", "PROFIT", "LOSS"],
        required: true
      },
      amount: Number,
      description: String,
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]

});

export default mongoose.model("Wallet", walletSchema);
