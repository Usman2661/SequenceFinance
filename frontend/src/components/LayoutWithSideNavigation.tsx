// LayoutWithSideNavigation.tsx (Layout Component)
import React from "react";
import SideNavigation from "./SideNavigation";

interface LayoutWithSideNavigationProps {
  children: React.ReactNode;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const LayoutWithSideNavigation: React.FC<LayoutWithSideNavigationProps> = ({
  children,
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <SideNavigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
};

export default LayoutWithSideNavigation;
