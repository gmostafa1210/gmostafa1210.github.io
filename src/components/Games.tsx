import { Gamepad2, ExternalLink } from "lucide-react";

const games = [
  {
    name: "NumDuel",
    description: "A number guessing duel game. Challenge your mind against the clock!",
    href: "/game/NumDuel/numduel.html",
  },
];

const Games = () => {
  return (
    <section id="games" className="py-20">
      <div className="container max-w-4xl">
        <h2 className="section-heading">Games</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game) => (
            <div
              key={game.name}
              className="card-gradient rounded-xl p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Gamepad2 size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{game.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{game.description}</p>
              <a
                href={game.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity w-fit"
              >
                <Gamepad2 size={16} />
                Play Now
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
