import { Clock, Coins, Lock, Star } from "lucide-react";
import { Button } from "./ui/button";

interface ModuleCardProps {
  title: string;
  description: string;
  category: string;
  duration: string;
  reward: number;
  difficulty: 1 | 2 | 3;
  progress?: number;
  locked?: boolean;
  icon: React.ReactNode;
}

const ModuleCard = ({
  title,
  description,
  category,
  duration,
  reward,
  difficulty,
  progress = 0,
  locked = false,
  icon,
}: ModuleCardProps) => {
  const difficultyLabels = ["Beginner", "Intermediate", "Advanced"];
  const difficultyColors = ["text-gain", "text-gold", "text-loss"];

  return (
    <div className={`group relative rounded-2xl bg-gradient-card border border-border p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-glow ${locked ? 'opacity-60' : ''}`}>
      {locked && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-2xl backdrop-blur-sm z-10">
          <div className="text-center">
            <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <span className="text-sm text-muted-foreground">Complete previous modules</span>
          </div>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground">
          {category}
        </span>
      </div>

      <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

      {progress > 0 && progress < 100 && (
        <div className="mb-4">
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <div 
              className="h-full bg-gradient-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground mt-1">{progress}% complete</span>
        </div>
      )}

      <div className="flex items-center gap-4 mb-4 text-sm">
        <div className="flex items-center gap-1 text-muted-foreground">
          <Clock className="w-4 h-4" />
          {duration}
        </div>
        <div className="flex items-center gap-1">
          {[...Array(3)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 ${i < difficulty ? difficultyColors[difficulty - 1] : 'text-muted'}`}
              fill={i < difficulty ? 'currentColor' : 'none'}
            />
          ))}
          <span className={`ml-1 ${difficultyColors[difficulty - 1]}`}>
            {difficultyLabels[difficulty - 1]}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coins className="w-4 h-4 text-gold" />
          <span className="font-display font-semibold text-gold">+{reward}</span>
        </div>
        <Button variant="default" size="sm" disabled={locked}>
          {progress > 0 && progress < 100 ? 'Continue' : 'Start'}
        </Button>
      </div>
    </div>
  );
};

export default ModuleCard;
