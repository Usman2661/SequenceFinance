import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";
import {
  Explore,
  FormatListBulleted,
  GroupWork,
  CreditCard,
  LibraryBooks,
  Redeem,
  ElectricBolt,
  RequestQuote,
  SwapHoriz,
  Settings,
  Help,
  Diamond,
} from "@mui/icons-material";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

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
        return <SwapHoriz />;
      case "Transaction":
        return <FormatListBulleted />;
      case "Cards":
        return <CreditCard />;
      case "Capitals":
        return <RequestQuote />;
      case "Reports":
        return <LibraryBooks />;
      case "Vaults":
        return <ElectricBolt />;
      case "Earn":
        return <Redeem />;
      case "Settings":
        return <Settings />;
      case "Help":
        return <Help />;
      case "Pro Mode":
        return <Diamond />;
    }
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

      <Box sx={{ flexGrow: 1 }} />
      <Divider />

      <List>
        {["Settings", "Help", "Pro Mode"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 0, marginRight: 1 }}>
                {returnIcon(text)}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ marginLeft: 0 }} />
              {text === "Pro Mode" && (
                <IOSSwitch sx={{ m: 1 }} defaultChecked />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
