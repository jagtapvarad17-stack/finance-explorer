import express from "express";
import {
  getLeaderboard
} from "../controllers/leaderboard.controller.js";

const router = express.Router();

// Get leaderboard rankings
router.get("/", getLeaderboard);

export default router;
