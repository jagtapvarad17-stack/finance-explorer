import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Leaderboard from "@/components/Leaderboard";
import { motion } from "framer-motion";
import { Award, Crown, Medal, Trophy } from "lucide-react";

const LeaderboardPage = () => {
  const [credits] = useState(8250);

  return (
    <div className="min-h-screen bg-background">
      <Header credits={credits} />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.1),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <Trophy className="w-4 h-4 text-gold" />
                <span className="text-sm text-muted-foreground">Global Rankings</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Compete & Climb the
                <span className="text-gradient-gold"> Ranks</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Compete with fellow learners and climb the ranks. Top performers earn 
                bonus credits and exclusive badges.
              </p>
            </motion.div>

            {/* Top 3 Podium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center items-end gap-4 max-w-lg mx-auto mt-8"
            >
              {/* 2nd Place */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-silver to-silver/60 flex items-center justify-center mb-2 shadow-lg">
                  <span className="font-display font-bold text-background">SM</span>
                </div>
                <Medal className="w-6 h-6 text-silver mb-1" />
                <div className="h-20 w-24 rounded-t-lg bg-gradient-to-t from-silver/20 to-silver/40 flex items-center justify-center border border-silver/30 border-b-0">
                  <span className="font-display font-bold text-silver">2nd</span>
                </div>
              </div>

              {/* 1st Place */}
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center mb-2 shadow-xl ring-4 ring-gold/30"
                >
                  <span className="font-display font-bold text-lg text-background">AC</span>
                </motion.div>
                <Crown className="w-8 h-8 text-gold mb-1" />
                <div className="h-28 w-28 rounded-t-lg bg-gradient-to-t from-gold/20 to-gold/40 flex items-center justify-center border border-gold/30 border-b-0">
                  <span className="font-display font-bold text-gold text-lg">1st</span>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-bronze to-bronze/60 flex items-center justify-center mb-2 shadow-lg">
                  <span className="font-display font-bold text-background">JW</span>
                </div>
                <Award className="w-6 h-6 text-bronze mb-1" />
                <div className="h-16 w-24 rounded-t-lg bg-gradient-to-t from-bronze/20 to-bronze/40 flex items-center justify-center border border-bronze/30 border-b-0">
                  <span className="font-display font-bold text-bronze">3rd</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Leaderboard />
      </main>
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
