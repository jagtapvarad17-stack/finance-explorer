import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

/* -------------------- MIDDLEWARES -------------------- */

// JSON body parser
app.use(express.json({ limit: "10mb" }));

// URL encoded parser
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Vite frontend
    credentials: true
  })
);

// Logger (development)
app.use(morgan("dev"));

/* -------------------- ROUTES -------------------- */

import authRoutes from "./routes/auth.routes.js";
import moduleRoutes from "./routes/module.routes.js";
import investmentRoutes from "./routes/investment.routes.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js";
import marketRoutes from "./routes/market.routes.js";

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/investments", investmentRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/market", marketRoutes);


// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FinQuest Backend is running 🚀"
  });
});

/* -------------------- ERROR HANDLER -------------------- */

app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

export default app;
