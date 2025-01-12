import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { getActiveColor, returnIcon } from "../utils/navbar";
import { IOSSwitch } from "../utils/switch";

interface NavbarListItemProps {
  activeNavbarItem: string;
  setActiveNavbarItem: (active: string) => void;
  navbarItems: string[];
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Reusable List Component
const NavbarListItems: React.FC<NavbarListItemProps> = ({
  navbarItems,
  setActiveNavbarItem,
  activeNavbarItem,
  darkMode,
  toggleDarkMode,
}) => (
  <List>
    {navbarItems.map((text) => (
      <ListItem
        key={text}
        disablePadding
        sx={{
          backgroundColor:
            activeNavbarItem === text
              ? getActiveColor(darkMode, "white", "#2d2d2d")
              : "normal",
          borderRadius: activeNavbarItem === text ? 2 : 0,
          boxShadow: activeNavbarItem === text ? 1 : 0,
          padding: activeNavbarItem === text ? 0 : 0,
        }}
      >
        <ListItemButton onClick={() => setActiveNavbarItem(text)}>
          <ListItemIcon sx={{ minWidth: 0, marginRight: 1 }}>
            {returnIcon(text, activeNavbarItem, darkMode)}
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: activeNavbarItem === text ? "bold" : "normal",
                  color:
                    text === activeNavbarItem
                      ? darkMode
                        ? "white"
                        : "#025864"
                      : darkMode
                      ? "white"
                      : "black",
                }}
              >
                {text}
              </Typography>
            }
            sx={{ marginLeft: 0 }}
          />
          {text === "Pro Mode" && <IOSSwitch sx={{ m: 1 }} defaultChecked />}
          {text === "Dark Mode" && (
            <IOSSwitch
              sx={{ m: 1 }}
              checked={darkMode ? true : false}
              onChange={toggleDarkMode}
            />
          )}
          {text === "Earn" && (
            <Box
              sx={{
                padding: 1,
                borderRadius: 1,
                backgroundColor: "green",
              }}
            >
              <Typography
                sx={{ fontSize: 12, fontWeight: 400, color: "white" }}
              >
                Earn $150
              </Typography>
            </Box>
          )}
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export default NavbarListItems;
