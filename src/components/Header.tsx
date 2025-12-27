import { Coins, Trophy, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  credits: number;
}

const Header = ({ credits }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">FinQuest</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#learn" className="text-muted-foreground hover:text-foreground transition-colors">Learn</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
            <a href="#leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">Leaderboard</a>
            <a href="#news" className="text-muted-foreground hover:text-foreground transition-colors">Market News</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary border border-border">
              <Coins className="w-5 h-5 text-gold" />
              <span className="font-display font-semibold text-foreground">{credits.toLocaleString()}</span>
            </div>
            <Button variant="hero" size="sm">
              <Trophy className="w-4 h-4" />
              Rank #42
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
