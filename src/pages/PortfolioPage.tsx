import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import { motion } from "framer-motion";
import { LineChart, PieChart, TrendingUp, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioPage = () => {
  const [credits] = useState(8250);

  return (
    <div className="min-h-screen bg-background">
      <Header credits={credits} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <Wallet className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Simulated Trading</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Your Investment
                <span className="text-gradient-primary"> Portfolio</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Practice investing with virtual credits. Make real market decisions 
                influenced by AI-analyzed trends.
              </p>

              <div className="flex justify-center gap-4">
                <Button variant="hero" className="gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Trade Now
                </Button>
                <Button variant="outline" className="gap-2">
                  <PieChart className="w-4 h-4" />
                  View Analytics
                </Button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
            >
              <div className="p-4 rounded-xl bg-gradient-card border border-border text-center">
                <div className="font-display text-xl font-bold text-foreground">$34,200</div>
                <div className="text-sm text-muted-foreground">Total Value</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-card border border-border text-center">
                <div className="font-display text-xl font-bold text-gain">+6.4%</div>
                <div className="text-sm text-muted-foreground">30D Return</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-card border border-border text-center">
                <div className="font-display text-xl font-bold text-foreground">5</div>
                <div className="text-sm text-muted-foreground">Holdings</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-card border border-border text-center">
                <div className="font-display text-xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Trades</div>
              </div>
            </motion.div>
          </div>
        </section>

        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
