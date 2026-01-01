import { ArrowDownRight, ArrowUpRight, DollarSign, TrendingDown, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const holdings = [
  { name: "Tech ETF", symbol: "TECH", value: 12500, change: 8.5, shares: 25 },
  { name: "S&P 500 Index", symbol: "SPY", value: 8200, change: 3.2, shares: 15 },
  { name: "Green Energy", symbol: "GRNE", value: 5800, change: -2.1, shares: 40 },
  { name: "Crypto Fund", symbol: "CRYP", value: 3200, change: 15.8, shares: 10 },
  { name: "Bonds ETF", symbol: "BOND", value: 4500, change: 0.8, shares: 50 },
];

const Portfolio = () => {
  const totalValue = holdings.reduce((sum, h) => sum + h.value, 0);
  const totalChange = 6.4;

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simulated Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practice investing with virtual credits. Make real market decisions 
            influenced by AI-analyzed market trends.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Portfolio Overview */}
          <AnimatedSection delay={0.1}>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl bg-gradient-card border border-border p-8 mb-6"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Portfolio Value</p>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-4xl font-bold text-foreground">
                      ${totalValue.toLocaleString()}
                    </span>
                    <div className={`flex items-center gap-1 ${totalChange >= 0 ? 'text-gain' : 'text-loss'}`}>
                      {totalChange >= 0 ? (
                        <ArrowUpRight className="w-5 h-5" />
                      ) : (
                        <ArrowDownRight className="w-5 h-5" />
                      )}
                      <span className="font-semibold">{totalChange >= 0 ? '+' : ''}{totalChange}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Past 30 days</p>
                </div>

                <div className="flex gap-3">
                  <Button variant="hero">
                    <TrendingUp className="w-4 h-4" />
                    Invest Credits
                  </Button>
                  <Button variant="outline">
                    <DollarSign className="w-4 h-4" />
                    Withdraw
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Holdings */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl bg-gradient-card border border-border overflow-hidden">
              <div className="p-4 border-b border-border">
                <h3 className="font-display font-semibold text-foreground">Your Holdings</h3>
              </div>
              
              <div className="divide-y divide-border">
                {holdings.map((holding, index) => (
                  <motion.div 
                    key={holding.symbol} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ backgroundColor: "hsl(var(--secondary) / 0.3)" }}
                    className="p-4 flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center"
                      >
                        <span className="font-display font-semibold text-sm text-foreground">
                          {holding.symbol.slice(0, 2)}
                        </span>
                      </motion.div>
                      <div>
                        <p className="font-medium text-foreground">{holding.name}</p>
                        <p className="text-sm text-muted-foreground">{holding.shares} shares</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-display font-semibold text-foreground">
                        ${holding.value.toLocaleString()}
                      </p>
                      <div className={`flex items-center justify-end gap-1 text-sm ${holding.change >= 0 ? 'text-gain' : 'text-loss'}`}>
                        {holding.change >= 0 ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        <span>{holding.change >= 0 ? '+' : ''}{holding.change}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
