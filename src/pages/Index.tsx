import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LearningModules from "@/components/LearningModules";
import Portfolio from "@/components/Portfolio";
import Leaderboard from "@/components/Leaderboard";
import MarketNews from "@/components/MarketNews";
import Footer from "@/components/Footer";

const Index = () => {
  const [credits] = useState(8250);

  return (
    <div className="min-h-screen bg-background">
      <Header credits={credits} />
      <main>
        <Hero />
        <LearningModules />
        <Portfolio />
        <Leaderboard />
        <MarketNews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
