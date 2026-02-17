import { useState } from "react";
import { FileCode, FileJson, FileText, Terminal, Braces, ChevronDown, ChevronRight, Mail, Github, Linkedin, FileDown } from "lucide-react";

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

interface IdeSidebarProps {
  activeFile: string;
  onFileClick: (id: string) => void;
}

const IdeSidebar = ({ activeFile, onFileClick }: IdeSidebarProps) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="w-56 min-w-[14rem] bg-sidebar border-r border-sidebar-border flex flex-col select-none h-full">
      <div className="px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
        Explorer
      </div>

      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 px-2 py-1 w-full text-left text-[11px] uppercase tracking-wider font-bold text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        >
          {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          mostafa_portfolio
        </button>

        {expanded && (
          <div className="flex flex-col">
            {files.map((file) => (
              <button
                key={file.id}
                onClick={() => onFileClick(file.id)}
                className={`flex items-center gap-2 px-6 py-[5px] text-[13px] transition-colors ${
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
        )}
      </div>

      <div className="mt-6">
        <div className="px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
          External Links
        </div>
        <a
          href="mailto:gmostafa1210@gmail.com"
          className="flex items-center gap-2 px-6 py-[5px] text-[13px] text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
        >
          <Mail size={14} />
          Email
        </a>
        <a
          href="https://github.com/gmostafa1210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-[5px] text-[13px] text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
        >
          <Github size={14} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/gmostafa1210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-[5px] text-[13px] text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
        >
          <Linkedin size={14} />
          LinkedIn
        </a>
        <a
          href="/files/GolamMostafa.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-[5px] text-[13px] text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
        >
          <FileDown size={14} />
          Resume
        </a>
      </div>
    </aside>
  );
};

export default IdeSidebar;
