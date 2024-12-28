// LayoutWithSideNavigation.tsx (Layout Component)
import React from "react";
import SideNavigation from "./SideNavigation";

interface LayoutWithSideNavigationProps {
  children: React.ReactNode;
}

const LayoutWithSideNavigation: React.FC<LayoutWithSideNavigationProps> = ({
  children,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <SideNavigation />
      <div style={{ marginLeft: "250px", width: "100%" }}>{children}</div>
    </div>
  );
};

export default LayoutWithSideNavigation;
