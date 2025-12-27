import { Crown, Medal, Trophy } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Alex Chen", credits: 125000, avatar: "AC", streak: 45 },
  { rank: 2, name: "Sarah Miller", credits: 118500, avatar: "SM", streak: 38 },
  { rank: 3, name: "James Wilson", credits: 112000, avatar: "JW", streak: 52 },
  { rank: 4, name: "Emily Davis", credits: 98750, avatar: "ED", streak: 29 },
  { rank: 5, name: "Michael Brown", credits: 94200, avatar: "MB", streak: 33 },
  { rank: 6, name: "Jessica Taylor", credits: 89000, avatar: "JT", streak: 21 },
  { rank: 7, name: "David Lee", credits: 82500, avatar: "DL", streak: 18 },
  { rank: 8, name: "Amanda White", credits: 78900, avatar: "AW", streak: 25 },
];

const Leaderboard = () => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-gold" />;
      case 2:
        return <Medal className="w-5 h-5 text-silver" />;
      case 3:
        return <Medal className="w-5 h-5 text-bronze" />;
      default:
        return null;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-gold/20 to-transparent border-gold/30";
      case 2:
        return "bg-gradient-to-r from-silver/10 to-transparent border-silver/20";
      case 3:
        return "bg-gradient-to-r from-bronze/10 to-transparent border-bronze/20";
      default:
        return "bg-card border-border";
    }
  };

  return (
    <section id="leaderboard" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-gold" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Leaderboard
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compete with fellow learners and climb the ranks. Top performers earn 
            bonus credits and exclusive badges.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-3">
            {leaderboardData.map((player, index) => (
              <div
                key={player.name}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${getRankBg(player.rank)}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-8 flex items-center justify-center">
                  {getRankIcon(player.rank) || (
                    <span className="font-display font-bold text-muted-foreground">
                      {player.rank}
                    </span>
                  )}
                </div>

                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="font-display font-semibold text-sm text-primary-foreground">
                    {player.avatar}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="font-medium text-foreground">{player.name}</p>
                  <p className="text-sm text-muted-foreground">
                    🔥 {player.streak} day streak
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-display font-bold text-gradient-gold">
                    {player.credits.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">credits</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl glass text-center">
            <p className="text-muted-foreground mb-2">Your current rank</p>
            <div className="flex items-center justify-center gap-4">
              <span className="font-display text-4xl font-bold text-foreground">#42</span>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">8,250 credits</p>
                <p className="text-sm text-gain">↑ 12 positions this week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
