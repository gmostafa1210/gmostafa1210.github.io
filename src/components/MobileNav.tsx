import { useState } from "react";
import { Menu, X } from "lucide-react";
import profileImage from "@/assets/profile.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Interests", href: "#interests" },
  { label: "Photos", href: "#photos" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/30">
            <img
              src={profileImage}
              alt="Golam Mostafa"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-foreground">Golam Mostafa</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-background border-b border-border py-4 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default MobileNav;
