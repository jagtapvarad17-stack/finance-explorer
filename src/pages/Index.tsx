import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LearningModules from "@/components/LearningModules";
import Portfolio from "@/components/Portfolio";
import Leaderboard from "@/components/Leaderboard";
import MarketNews from "@/components/MarketNews";
import Footer from "@/components/Footer";

const Index = () => {
  const [credits] = useState(8250);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoggingOut ? 0 : 1, scale: isLoggingOut ? 0.98 : 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Header credits={credits} onLogout={() => setIsLoggingOut(true)} />
      <main>
        <Hero />
        <LearningModules />
        <Portfolio />
        <Leaderboard />
        <MarketNews />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
