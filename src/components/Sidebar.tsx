import { useState, useEffect } from "react";
import profileImage from "@/assets/profile.png";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Interests", href: "#interests" },
  { label: "Photos", href: "#photos" },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col items-center py-12 px-6 bg-sidebar border-r border-border z-50">
      {/* Profile Image */}
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/30 animate-pulse-glow">
          <img
            src={profileImage}
            alt="Golam Mostafa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 mt-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`nav-link ${
              activeSection === item.href.slice(1) ? "nav-link-active" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Theme Toggle */}
      <div className="mt-auto pt-8">
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
