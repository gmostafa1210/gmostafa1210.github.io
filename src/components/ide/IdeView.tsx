import { useState } from "react";
import IdeSidebar from "./IdeSidebar";
import TabBar from "./TabBar";
import StatusBar from "./StatusBar";
import AboutSection, { ABOUT_LINE_COUNT } from "./sections/AboutSection";
import ExperienceSection, { EXPERIENCE_LINE_COUNT } from "./sections/ExperienceSection";
import SkillsSection, { SKILLS_LINE_COUNT } from "./sections/SkillsSection";
import EducationSection, { EDUCATION_LINE_COUNT } from "./sections/EducationSection";
import PublicationsSection, { PUBLICATIONS_LINE_COUNT } from "./sections/PublicationsSection";
import ContactSection, { CONTACT_LINE_COUNT } from "./sections/ContactSection";

const sections: Record<string, { component: React.ReactNode; lines: number }> = {
  about: { component: <AboutSection />, lines: ABOUT_LINE_COUNT },
  experience: { component: <ExperienceSection />, lines: EXPERIENCE_LINE_COUNT },
  skills: { component: <SkillsSection />, lines: SKILLS_LINE_COUNT },
  education: { component: <EducationSection />, lines: EDUCATION_LINE_COUNT },
  publications: { component: <PublicationsSection />, lines: PUBLICATIONS_LINE_COUNT },
  contact: { component: <ContactSection />, lines: CONTACT_LINE_COUNT },
};

const IdeView = () => {
  const [activeFile, setActiveFile] = useState("about");
  const [openTabs, setOpenTabs] = useState<string[]>(["about"]);

  const handleFileClick = (id: string) => {
    setActiveFile(id);
    if (!openTabs.includes(id)) {
      setOpenTabs((prev) => [...prev, id]);
    }
  };

  const handleCloseTab = (id: string) => {
    const newTabs = openTabs.filter((t) => t !== id);
    setOpenTabs(newTabs);
    if (activeFile === id) {
      setActiveFile(newTabs.length > 0 ? newTabs[newTabs.length - 1] : "about");
      if (newTabs.length === 0) {
        setOpenTabs(["about"]);
      }
    }
  };

  const currentSection = sections[activeFile];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-center px-4 py-1 bg-titlebar text-muted-foreground text-[12px] select-none border-b border-border relative">
        <div className="flex items-center gap-2">
          <span className="hidden md:inline">Golam Mostafa</span>
          <span className="hidden md:inline text-muted-foreground/50">—</span>
          <span>mostafa_portfolio</span>
        </div>
        <div className="absolute left-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full" style={{ background: "hsl(40, 80%, 55%)" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "hsl(130, 50%, 50%)" }} />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <IdeSidebar activeFile={activeFile} onFileClick={handleFileClick} />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <TabBar activeFile={activeFile} openTabs={openTabs} onFileClick={handleFileClick} onCloseTab={handleCloseTab} />

          <div className="flex-1 overflow-auto bg-background">
            <div className="min-h-full">
              {currentSection.component}
            </div>
          </div>
        </div>
      </div>

      <StatusBar activeFile={activeFile} lineCount={currentSection.lines} />
    </div>
  );
};

export default IdeView;
