import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ViewMode = "classic" | "ide";

interface ViewModeContextType {
  viewMode: ViewMode;
  toggleViewMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider = ({ children }: { children: ReactNode }) => {
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("viewMode");
      if (stored === "classic" || stored === "ide") return stored;
    }
    return "classic";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (viewMode === "ide") {
      root.classList.add("ide-mode");
    } else {
      root.classList.remove("ide-mode");
    }
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "classic" ? "ide" : "classic"));
  };

  return (
    <ViewModeContext.Provider value={{ viewMode, toggleViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) throw new Error("useViewMode must be used within ViewModeProvider");
  return context;
};
