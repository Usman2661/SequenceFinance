import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Explore, FormatListBulleted, Money } from "@mui/icons-material";
import { Typography } from "@mui/material";

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

  const returnIcon = (text: string) => {
    switch (text) {
      case "Dashboard":
        return <Explore />;
      case "Payment":
        return <FormatListBulleted />;
      case "Transaction":
        return <Money />;
      case "Cards":
        return <Money />;
      case "Capitals":
        return <Money />;
      case "Reports":
        return <Money />;
      case "Vaults":
        return <Money />;
      case "Earn":
        return <Money />;
    }
  };

  const drawer = (
    <div>
      <Typography variant="h4">Sequence</Typography>
      <Divider />
      <List>
        {["Dashboard", "Payment", "Transaction", "Cards"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 0, marginRight: 1 }}>
                {returnIcon(text)}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ marginLeft: 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Capitals", "Vaults", "Reports", "Earn"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 0, marginRight: 1 }}>
                {returnIcon(text)}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ marginLeft: 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
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
