import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  credits: {
    type: Number,
    default: 1000 // starting virtual credits
  },

  rank: {
    type: String,
    default: "Beginner"
  },

  completedModules: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Module"
  }],

  streak: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

export default mongoose.model("User", userSchema);
