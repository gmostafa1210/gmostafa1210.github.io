import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Interests from "@/components/Interests";
import PhotoGallery from "@/components/PhotoGallery";

const Index = () => {
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
        <Interests />
        <PhotoGallery />
      </main>
    </div>
  );
};

export default Index;
