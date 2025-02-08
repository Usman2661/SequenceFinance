import React, { useState } from "react";
import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";

import { KeyboardTab, GroupWork } from "@mui/icons-material";
import NavbarListItems from "./ListItems";
import { deepPurple } from "@mui/material/colors";
import { getActiveColor } from "../utils/navbar";

const drawerWidthExpanded = 240;
const drawerWidthCollapsed = 60; // Smaller width when collapsed

interface SideNavigationProps {
  window?: () => Window;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const SideNavigation: React.FC<SideNavigationProps> = ({
  window,
  darkMode,
  toggleDarkMode,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeNavbarItem, setActiveNavbarItem] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false); // Added state to track collapse
  const drawerWidth = collapsed ? drawerWidthCollapsed : drawerWidthExpanded;

  console.log(isClosing);
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleSetActiveNavbarItem = (item: string) => {
    setActiveNavbarItem(item);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed); // Toggle collapsed state
  };

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 3,
        }}
      >
        <GroupWork
          sx={{
            color: getActiveColor(darkMode, "#025864", "white"),
            marginRight: 1,
            fontSize: "2rem",
          }}
        />
        {!collapsed && (
          <Typography
            variant="h5"
            sx={{
              color: getActiveColor(darkMode, "#025864", "white"),
              fontWeight: 500,
            }}
          >
            Sequence
          </Typography>
        )}
        <IconButton
          sx={{
            marginLeft: collapsed ? 0 : 3,
            width: collapsed ? "10px" : "25px",
            height: "25px",
            border: "1px solid #b3b6b7",
            borderRadius: "5px",
            backgroundColor: "white",
            color: "#797d7f",
            "&:hover": {
              backgroundColor: "white",
            },
            "& .MuiSvgIcon-root": {
              transform: collapsed ? "" : "rotate(180deg)",
              transition: "transform 0.3s ease",
            },
          }}
          onClick={toggleCollapse}
        >
          <KeyboardTab sx={{ fontSize: collapsed ? "small" : "medium" }} />
        </IconButton>
      </Box>
      <Divider />
      {!collapsed && (
        <Typography
          sx={{
            marginTop: 2,
            marginBottom: 0,
            color: "#909497",
            marginLeft: "20px",
            fontWeight: 350,
            fontSize: 14,
          }}
        >
          General
        </Typography>
      )}
      <NavbarListItems
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        navbarItems={["Dashboard", "Payment", "Transaction", "Cards"]}
        setActiveNavbarItem={handleSetActiveNavbarItem}
        activeNavbarItem={activeNavbarItem}
        collapsed={collapsed}
      />
      {collapsed === false && (
        <Typography
          sx={{
            color: "#909497",
            marginLeft: "20px",
            fontWeight: 350,
            fontSize: 14,
          }}
        >
          Support
        </Typography>
      )}

      <NavbarListItems
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        navbarItems={["Capitals", "Vaults", "Reports", "Earn"]}
        setActiveNavbarItem={handleSetActiveNavbarItem}
        activeNavbarItem={activeNavbarItem}
        collapsed={collapsed}
      />
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <NavbarListItems
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        navbarItems={["Settings", "Help", "Dark Mode", "Pro Mode"]}
        setActiveNavbarItem={handleSetActiveNavbarItem}
        activeNavbarItem={activeNavbarItem}
        collapsed={collapsed}
      />
      <Box
        sx={{
          backgroundColor: collapsed
            ? getActiveColor(darkMode, "#f5f7f9", "black")
            : getActiveColor(darkMode, "white", "#2d2d2d"),
          borderRadius: collapsed ? "0px" : "10px",
          padding: collapsed ? "2px" : "10px",
          marginLeft: collapsed ? "5px" : "10px",
          marginRight: collapsed ? "5px" : "10px",
          marginBottom: collapsed ? "5px" : "10px",
          boxShadow: collapsed ? 0 : 2,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Avatar
          sx={{
            bgcolor: deepPurple[500],
            color: "white",
          }}
        >
          U
        </Avatar>
        {!collapsed && (
          <Box sx={{ alignItems: "center", flexDirection: "row" }}>
            <Typography sx={{ marginLeft: "10px" }}>Usman Ali</Typography>
            <Typography sx={{ marginLeft: "10px", fontSize: 12 }}>
              {"usmanusman136@hotmail.com".length > 15
                ? "usmanusman136@hotmail.com".slice(0, 15) + ".."
                : "usmanusman136@hotmail.com"}
            </Typography>
          </Box>
        )}
      </Box>
      {!collapsed && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <Typography sx={{ color: "#909497", fontSize: 12 }}>
            Sequence Finance
          </Typography>
        </Box>
      )}
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#f5f7f9",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: getActiveColor(darkMode, "#f5f7f9", "black"),
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default SideNavigation;
