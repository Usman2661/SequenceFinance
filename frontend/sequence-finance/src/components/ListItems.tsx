import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { returnIcon } from "../utils/navbar";
import { IOSSwitch } from "../utils/switch";

interface NavbarListItemProps {
  activeNavbarItem: string;
  setActiveNavbarItem: (active: string) => void;
  navbarItems: string[];
}

// Reusable List Component
const NavbarListItems: React.FC<NavbarListItemProps> = ({
  navbarItems,
  setActiveNavbarItem,
  activeNavbarItem,
}) => (
  <List>
    {navbarItems.map((text) => (
      <ListItem
        key={text}
        disablePadding
        sx={{
          backgroundColor: activeNavbarItem === text ? "white" : "normal",
          borderRadius: activeNavbarItem === text ? 2 : 0,
          boxShadow: activeNavbarItem === text ? 1 : 0,
          padding: activeNavbarItem === text ? 0 : 0,
        }}
      >
        <ListItemButton onClick={() => setActiveNavbarItem(text)}>
          <ListItemIcon sx={{ minWidth: 0, marginRight: 1 }}>
            {returnIcon(text, activeNavbarItem)}
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: activeNavbarItem === text ? "bold" : "normal",
                  color: text === activeNavbarItem ? "#025864" : "black",
                }}
              >
                {text}
              </Typography>
            }
            sx={{ marginLeft: 0 }}
          />
          {text === "Pro Mode" && <IOSSwitch sx={{ m: 1 }} defaultChecked />}
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
