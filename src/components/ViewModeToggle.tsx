import { Code, Layout } from "lucide-react";
import { useViewMode } from "@/hooks/use-view-mode";

const ViewModeToggle = () => {
  const { viewMode, toggleViewMode } = useViewMode();

  return (
    <button
      onClick={toggleViewMode}
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-all duration-300 text-sm font-medium"
      aria-label="Toggle view mode"
      title={viewMode === "classic" ? "Switch to IDE view" : "Switch to Classic view"}
    >
      {viewMode === "classic" ? (
        <>
          <Code size={18} />
          <span className="hidden sm:inline">IDE View</span>
        </>
      ) : (
        <>
          <Layout size={18} />
          <span className="hidden sm:inline">Classic View</span>
        </>
      )}
    </button>
  );
};

export default ViewModeToggle;
