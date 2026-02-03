import { Brain, Code, Compass, BookOpen, Puzzle, Gamepad2, Sparkles, Database } from "lucide-react";

const interests = [
  { icon: Brain, label: "Machine Learning & AI" },
  { icon: Database, label: "Data Science" },
  { icon: Code, label: "Programming" },
  { icon: Sparkles, label: "New Technology" },
  { icon: Compass, label: "Exploring & Adventure" },
  { icon: BookOpen, label: "Reading Story Books" },
  { icon: Puzzle, label: "Rubik's Cube (3x3)" },
  { icon: Gamepad2, label: "Indoor & Outdoor Games" },
];

const Interests = () => {
  return (
    <section id="interests" className="py-20">
      <div className="container max-w-4xl">
        <h2 className="section-heading">Interests & Hobbies</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((interest, index) => (
            <div
              key={interest.label}
              className="card-gradient rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <interest.icon size={24} />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {interest.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
