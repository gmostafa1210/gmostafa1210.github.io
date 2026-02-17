import { X, FileCode, FileJson, FileText, Terminal, Braces } from "lucide-react";

const fileIcons: Record<string, React.ReactNode> = {
  about: <FileCode size={14} className="syntax-tag" />,
  experience: <FileJson size={14} className="syntax-function" />,
  skills: <FileText size={14} className="syntax-string" />,
  education: <FileText size={14} className="syntax-variable" />,
  publications: <Braces size={14} className="syntax-number" />,
  contact: <Terminal size={14} className="syntax-string" />,
};

const fileNames: Record<string, string> = {
  about: "about.tsx",
  experience: "experience.json",
  skills: "skills.yaml",
  education: "education.md",
  publications: "publications.bib",
  contact: "contact.sh",
};

interface TabBarProps {
  activeFile: string;
  openTabs: string[];
  onFileClick: (id: string) => void;
  onCloseTab: (id: string) => void;
}

const TabBar = ({ activeFile, openTabs, onFileClick, onCloseTab }: TabBarProps) => {
  return (
    <div className="flex bg-tab-inactive border-b border-tab-border overflow-x-auto">
      {openTabs.map((id) => (
        <div
          key={id}
          onClick={() => onFileClick(id)}
          className={`flex items-center gap-2 px-4 py-2 text-[13px] border-r border-tab-border whitespace-nowrap cursor-pointer transition-colors ${
            activeFile === id
              ? "bg-tab-active text-foreground border-t-2 border-t-primary"
              : "text-muted-foreground hover:bg-tab-active/50"
          }`}
        >
          {fileIcons[id]}
          {fileNames[id]}
          {!(id === "about" && openTabs.length === 1) && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCloseTab(id);
              }}
              className="ml-1 p-0.5 rounded hover:bg-muted-foreground/20 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={12} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
