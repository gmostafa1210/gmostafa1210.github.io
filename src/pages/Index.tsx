import { useViewMode } from "@/hooks/use-view-mode";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import PhotoGallery from "@/components/PhotoGallery";
import IdeView from "@/components/ide/IdeView";
import ViewModeToggle from "@/components/ViewModeToggle";

const Index = () => {
  const { viewMode } = useViewMode();

  if (viewMode === "ide") {
    return (
      <>
        <IdeView />
        <ViewModeToggle />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Publications />
        <PhotoGallery />
      </main>

      <ViewModeToggle />
    </div>
  );
};

export default Index;
