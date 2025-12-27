import { BookOpen, CreditCard, LineChart, PiggyBank, Shield, Wallet } from "lucide-react";
import ModuleCard from "./ModuleCard";

const modules = [
  {
    title: "Budgeting Basics",
    description: "Learn to create and manage a personal budget that works for your lifestyle and goals.",
    category: "Fundamentals",
    duration: "15 min",
    reward: 500,
    difficulty: 1 as const,
    progress: 100,
    icon: <Wallet className="w-6 h-6" />,
  },
  {
    title: "Emergency Fund Strategy",
    description: "Build a safety net that protects you from unexpected financial emergencies.",
    category: "Savings",
    duration: "20 min",
    reward: 750,
    difficulty: 1 as const,
    progress: 65,
    icon: <PiggyBank className="w-6 h-6" />,
  },
  {
    title: "Credit Score Mastery",
    description: "Understand credit scores and learn strategies to build and maintain excellent credit.",
    category: "Credit",
    duration: "25 min",
    reward: 1000,
    difficulty: 2 as const,
    progress: 0,
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    title: "Introduction to Stocks",
    description: "Discover how the stock market works and learn fundamental analysis techniques.",
    category: "Investing",
    duration: "30 min",
    reward: 1500,
    difficulty: 2 as const,
    progress: 0,
    icon: <LineChart className="w-6 h-6" />,
  },
  {
    title: "Risk Management",
    description: "Learn to assess and manage investment risks to protect your portfolio.",
    category: "Advanced",
    duration: "35 min",
    reward: 2000,
    difficulty: 3 as const,
    locked: true,
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Portfolio Diversification",
    description: "Master the art of building a balanced portfolio across asset classes.",
    category: "Advanced",
    duration: "40 min",
    reward: 2500,
    difficulty: 3 as const,
    locked: true,
    icon: <BookOpen className="w-6 h-6" />,
  },
];

const LearningModules = () => {
  return (
    <section id="learn" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learning Modules
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete interactive modules to earn credits and unlock new challenges. 
            Each module is designed to teach practical financial skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div key={module.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ModuleCard {...module} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningModules;
