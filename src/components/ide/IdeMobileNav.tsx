import { useState } from "react";
import { Menu, X, FileCode, FileJson, FileText, Terminal, Braces, ChevronDown, Mail, Github, Linkedin, FileDown } from "lucide-react";

type FileItem = {
  name: string;
  icon: React.ReactNode;
  id: string;
};

const files: FileItem[] = [
  { name: "about.tsx", icon: <FileCode size={16} className="syntax-tag" />, id: "about" },
  { name: "experience.json", icon: <FileJson size={16} className="syntax-function" />, id: "experience" },
  { name: "skills.yaml", icon: <FileText size={16} className="syntax-string" />, id: "skills" },
  { name: "education.md", icon: <FileText size={16} className="syntax-variable" />, id: "education" },
  { name: "publications.bib", icon: <Braces size={16} className="syntax-number" />, id: "publications" },
  { name: "contact.sh", icon: <Terminal size={16} className="syntax-string" />, id: "contact" },
];

const fileNames: Record<string, string> = {
  about: "about.tsx",
  experience: "experience.json",
  skills: "skills.yaml",
  education: "education.md",
  publications: "publications.bib",
  contact: "contact.sh",
};

interface IdeMobileNavProps {
  activeFile: string;
  onFileClick: (id: string) => void;
}

const IdeMobileNav = ({ activeFile, onFileClick }: IdeMobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFileSelect = (id: string) => {
    onFileClick(id);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Mobile menu button - shows current file */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 w-full bg-sidebar border-b border-sidebar-border text-sidebar-foreground"
      >
        <Menu size={18} />
        <span className="text-[13px] flex-1 text-left">{fileNames[activeFile]}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 z-50 bg-sidebar border-b border-sidebar-border shadow-lg">
          {/* Files section */}
          <div className="px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold border-b border-sidebar-border">
            Files
          </div>
          <div className="flex flex-col">
            {files.map((file) => (
              <button
                key={file.id}
                onClick={() => handleFileSelect(file.id)}
                className={`flex items-center gap-2 px-4 py-3 text-[13px] transition-colors ${
                  activeFile === file.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                {file.icon}
                {file.name}
              </button>
            ))}
          </div>

          {/* External Links section */}
          <div className="px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold border-t border-sidebar-border">
            External Links
          </div>
          <a
            href="mailto:gmostafa1210@gmail.com"
            className="flex items-center gap-2 px-4 py-3 text-[13px] text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
          >
            <Mail size={14} />
            Email
          </a>
          <a
            href="https://github.com/gmostafa1210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-[13px] text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gmostafa1210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-[13px] text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
          <a
            href="/files/GolamMostafa.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-[13px] text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
          >
            <FileDown size={14} />
            Resume
          </a>
        </div>
      )}

      {/* Overlay to close menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default IdeMobileNav;

