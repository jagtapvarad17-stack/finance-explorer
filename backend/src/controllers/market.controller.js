import MarketNews from "../models/MarketNews.js";

/* -----------------------------------------
   GET MARKET NEWS (AI ENHANCED)
------------------------------------------*/
export const getMarketNews = async (req, res, next) => {
  try {
    const news = await MarketNews.find()
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: news.length,
      data: news
    });
  } catch (error) {
    next(error);
  }
};

/* -----------------------------------------
   REFRESH MARKET NEWS (ADMIN / CRON)
------------------------------------------*/
export const refreshMarketNews = async (req, res, next) => {
  try {
    /**
     * ⚠️ NOTE:
     * This is MOCK DATA for hackathon/demo.
     * Later, replace this block with:
     * 1. Real News API
     * 2. Gemini API sentiment analysis
     */

    const mockNews = [
      {
        headline: "Markets rally as inflation shows signs of cooling",
        source: "FinQuest AI",
        sentiment: "Bullish",
        aiSummary:
          "Cooling inflation may lead to stable interest rates, supporting equity markets.",
        affectedAssets: [
          { assetName: "Stocks", impactLevel: "High" },
          { assetName: "ETFs", impactLevel: "Medium" }
        ]
      },
      {
        headline: "Crypto market faces volatility after regulatory concerns",
        source: "FinQuest AI",
        sentiment: "Bearish",
        aiSummary:
          "Uncertainty around crypto regulations could trigger short-term market corrections.",
        affectedAssets: [
          { assetName: "Crypto", impactLevel: "High" }
        ]
      },
      {
        headline: "Bond yields remain steady amid global economic slowdown",
        source: "FinQuest AI",
        sentiment: "Neutral",
        aiSummary:
          "Stable bond yields suggest cautious investor sentiment during economic uncertainty.",
        affectedAssets: [
          { assetName: "Bonds", impactLevel: "Medium" }
        ]
      }
    ];

    // Clear old news
    await MarketNews.deleteMany();

    // Insert new AI-enhanced news
    await MarketNews.insertMany(mockNews);

    res.status(201).json({
      success: true,
      message: "Market news refreshed successfully",
      count: mockNews.length
    });

  } catch (error) {
    next(error);
  }
};
