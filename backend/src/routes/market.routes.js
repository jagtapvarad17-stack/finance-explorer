import express from "express";
import {
  getMarketNews,
  refreshMarketNews
} from "../controllers/market.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Get market news with AI insights
router.get("/news", authMiddleware, getMarketNews);

// Refresh market news (admin / cron)
router.post("/refresh", refreshMarketNews);

export default router;
