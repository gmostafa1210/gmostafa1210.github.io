interface StatusBarProps {
  activeFile: string;
  lineCount: number;
}

const fileTypes: Record<string, string> = {
  about: "React TSX",
  experience: "JSON",
  skills: "YAML",
  education: "Markdown",
  publications: "BibTeX",
  contact: "Shell Script",
};

const StatusBar = ({ activeFile, lineCount }: StatusBarProps) => {
  return (
    <div className="flex items-center justify-between px-3 py-[2px] bg-statusbar text-statusbar-foreground text-[12px] select-none">
      <div className="flex items-center gap-4">
        <span>Ln {lineCount}, Col 80</span>
        <span>UTF-8</span>
      </div>
      <div className="flex items-center gap-4">
        <span>{fileTypes[activeFile] || "Plain Text"}</span>
      </div>
    </div>
  );
};

export default StatusBar;
