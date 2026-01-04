import Module from "../models/Module.js";
import User from "../models/User.js";
import Wallet from "../models/Wallet.js";

/* -----------------------------------------
   GET ALL LEARNING MODULES
------------------------------------------*/
export const getAllModules = async (req, res, next) => {
  try {
    const modules = await Module.find().sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      count: modules.length,
      data: modules
    });
  } catch (error) {
    next(error);
  }
};

/* -----------------------------------------
   COMPLETE MODULE & REWARD CREDITS
------------------------------------------*/
export const completeModule = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { moduleId } = req.params;

    // Find module
    const module = await Module.findById(moduleId);
    if (!module) {
      return res.status(404).json({
        success: false,
        message: "Module not found"
      });
    }

    // Find user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Check if already completed
    if (user.completedModules.includes(moduleId)) {
      return res.status(400).json({
        success: false,
        message: "Module already completed"
      });
    }

    // Reward credits
    user.credits += module.creditReward;
    user.completedModules.push(moduleId);
    user.streak += 1;

    await user.save();

    // Update wallet
    const wallet = await Wallet.findOne({ userId });

    wallet.balance += module.creditReward;
    wallet.transactions.push({
      type: "MODULE_REWARD",
      amount: module.creditReward,
      description: `Completed module: ${module.title}`
    });

    await wallet.save();

    res.status(200).json({
      success: true,
      message: "Module completed successfully",
      reward: module.creditReward,
      totalCredits: user.credits
    });

  } catch (error) {
    next(error);
  }
};
