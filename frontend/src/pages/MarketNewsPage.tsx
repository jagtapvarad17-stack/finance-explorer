import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketNews from "@/components/MarketNews";
import { motion } from "framer-motion";
import { Bot, Newspaper, RefreshCw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const MarketNewsPage = () => {
  const [credits] = useState(8250);

  return (
    <div className="min-h-screen bg-background">
      <Header credits={credits} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.08),transparent_60%)]" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">AI-Powered Analysis</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Market News &
                <span className="text-gradient-primary"> AI Insights</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Stay informed with real-time news and AI-generated insights that 
                influence your simulated investment outcomes.
              </p>

              <div className="flex justify-center gap-4">
                <Button variant="hero" className="gap-2">
                  <Bot className="w-4 h-4" />
                  Get AI Summary
                </Button>
                <Button variant="outline" className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </Button>
              </div>
            </motion.div>

            {/* Market Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mt-12"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gain/10 border border-gain/20">
                <span className="w-2 h-2 rounded-full bg-gain animate-pulse" />
                <span className="text-sm font-medium text-gain">Markets Open</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
                <Newspaper className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">4 new articles</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
                <Bot className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">AI analyzed 12 sources</span>
              </div>
            </motion.div>
          </div>
        </section>

        <MarketNews />
      </main>
      <Footer />
    </div>
  );
};

export default MarketNewsPage;
