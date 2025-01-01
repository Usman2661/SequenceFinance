import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
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
          borderRadius: activeNavbarItem === text ? 10 : 0,
          padding: activeNavbarItem === text ? 0.5 : 0,
        }}
      >
        <ListItemButton onClick={() => setActiveNavbarItem(text)}>
          <ListItemIcon sx={{ minWidth: 0, marginRight: 1 }}>
            {returnIcon(text)}
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontSize: 14,
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
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export default NavbarListItems;
