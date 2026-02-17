import { ReactNode } from "react";

interface CodeLineProps {
  lineNumber: number;
  children: ReactNode;
  indent?: number;
  isActive?: boolean;
}

const CodeLine = ({ lineNumber, children, indent = 0, isActive }: CodeLineProps) => (
  <div className={`flex min-h-[1.5rem] ${isActive ? "bg-line-active" : ""} group`}>
    <span className="w-12 shrink-0 text-right pr-4 text-line-number text-[13px] select-none">
      {lineNumber}
    </span>
    <div className="flex-1 text-[13px] leading-6" style={{ paddingLeft: `${indent * 1.5}rem` }}>
      {children}
    </div>
  </div>
);

export default CodeLine;
