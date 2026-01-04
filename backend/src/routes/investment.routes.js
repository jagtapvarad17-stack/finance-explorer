import express from "express";
import {
  getPortfolio,
  investAsset
} from "../controllers/investment.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Get user portfolio
router.get("/", authMiddleware, getPortfolio);

// Invest credits
router.post("/invest", authMiddleware, investAsset);

export default router;
