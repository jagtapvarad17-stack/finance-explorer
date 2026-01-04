import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LearningModules from "@/components/LearningModules";
import { motion } from "framer-motion";
import { BookOpen, Filter, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Learn = () => {
  const [credits] = useState(8250);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header credits={credits} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Interactive Learning</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Master Financial
                <span className="text-gradient-primary"> Skills</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Complete interactive modules to earn credits, unlock new challenges, 
                and build practical financial knowledge.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search modules..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-secondary border-border"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12"
            >
              <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="font-display text-2xl font-bold text-foreground">6</div>
                <div className="text-sm text-muted-foreground">Modules</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="font-display text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="font-display text-2xl font-bold text-gold">1,250</div>
                <div className="text-sm text-muted-foreground">Credits Earned</div>
              </div>
            </motion.div>
          </div>
        </section>

        <LearningModules />
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
