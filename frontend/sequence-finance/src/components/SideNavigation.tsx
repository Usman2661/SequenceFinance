import React, { useState } from "react";
import { Box, CssBaseline, Divider, Drawer, Typography } from "@mui/material";

import { GroupWork } from "@mui/icons-material";
import NavbarListItems from "./ListItems";

const drawerWidth = 240;

interface SideNavigationProps {
  window?: () => Window;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  console.log(isClosing);
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", padding: 3 }}>
        <GroupWork
          sx={{ color: "#025864", marginRight: 1, fontSize: "2rem" }}
        />
        <Typography variant="h5" sx={{ color: "#025864", fontWeight: 500 }}>
          Sequence
        </Typography>
      </Box>
      <Divider />
      <NavbarListItems
        items={["Dashboard", "Payment", "Transaction", "Cards"]}
      />

      <Divider />
      <NavbarListItems items={["Capitals", "Vaults", "Reports", "Earn"]} />

      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <NavbarListItems items={["Settings", "Help", "Pro Mode"]} />

      <Box sx={{ display: "flex", borderRadius: 100, color: "white" }}></Box>
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
              backgroundColor: "#f5f7f9",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      ></Box>
    </Box>
  );
};

export default SideNavigation;
