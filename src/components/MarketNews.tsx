import { ArrowRight, Bot, ExternalLink, TrendingDown, TrendingUp, Zap } from "lucide-react";
import { Button } from "./ui/button";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./AnimatedCard";
import { motion } from "framer-motion";

const newsItems = [
  {
    title: "Fed Signals Potential Rate Cuts in 2024",
    source: "Financial Times",
    time: "2 hours ago",
    impact: "bullish" as const,
    aiInsight: "Historically, rate cuts have led to a 12% average increase in equity markets within 6 months.",
  },
  {
    title: "Tech Giants Report Strong Q4 Earnings",
    source: "Bloomberg",
    time: "4 hours ago",
    impact: "bullish" as const,
    aiInsight: "Tech sector momentum suggests a good time to consider increasing TECH ETF allocation.",
  },
  {
    title: "Oil Prices Surge Amid Geopolitical Tensions",
    source: "Reuters",
    time: "6 hours ago",
    impact: "bearish" as const,
    aiInsight: "Energy sector volatility may present short-term risk. Consider reviewing GRNE holdings.",
  },
  {
    title: "Crypto Markets Show Signs of Recovery",
    source: "CoinDesk",
    time: "8 hours ago",
    impact: "bullish" as const,
    aiInsight: "Bitcoin's technical indicators suggest potential upside. CRYP fund may benefit.",
  },
];

const MarketNews = () => {
  return (
    <section id="news" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent)/0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Insights</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Market News & Analysis
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Stay informed with real-time news and AI-generated insights that 
                influence your simulated investment outcomes.
              </p>
            </div>
            
            <Button variant="outline">
              View All News
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.map((news, index) => (
            <AnimatedCard key={news.title} index={index}>
              <motion.div
                whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
                className="group h-full rounded-2xl bg-gradient-card border border-border p-6 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-muted-foreground">{news.source}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{news.time}</span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                      news.impact === 'bullish' 
                        ? 'bg-gain/20 text-gain' 
                        : 'bg-loss/20 text-loss'
                    }`}
                  >
                    {news.impact === 'bullish' ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {news.impact}
                  </motion.div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <motion.div 
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0"
                  >
                    <Bot className="w-4 h-4 text-accent-foreground" />
                  </motion.div>
                  <div>
                    <p className="text-xs font-medium text-primary mb-1">AI Insight</p>
                    <p className="text-sm text-muted-foreground">{news.aiInsight}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    Read More
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketNews;
