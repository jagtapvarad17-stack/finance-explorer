import express from "express";
import {getAllModules,completeModule} from "../controllers/module.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Get all learning modules
router.get("/", authMiddleware, getAllModules);

// Complete a module
router.post("/complete/:moduleId", authMiddleware, completeModule);

export default router;
