import { ExternalLink } from "lucide-react";

const games = [
  {
    name: "NumDuel",
    tagline: "Multiplayer number guessing duel",
    description: "Crack your opponent's secret number before they crack yours. Create a room, share the code, and take turns guessing digit by digit.",
    href: "/game/NumDuel/numduel.html",
  },
];

const Games = () => {
  return (
    <section id="games" className="py-20">
      <div className="container max-w-4xl">
        <h2 className="section-heading">Games</h2>

        <div className="space-y-0">
          {games.map((game, index) => (
            <div
              key={index}
              className="timeline-item animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="timeline-dot" />
              <div className="card-gradient rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{game.name}</h3>
                  <a
                    href={game.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary font-mono hover:underline transition-colors"
                  >
                    Play Now
                    <ExternalLink size={14} />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm mb-1">{game.tagline}</p>
                <p className="text-muted-foreground">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
