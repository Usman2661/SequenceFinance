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

// Reusable List Component
const NavbarListItems = ({ items }: { items: string[] }) => (
  <List>
    {items.map((text) => (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 0, marginRight: 1 }}>
            {returnIcon(text)}
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography sx={{ fontSize: 14, color: "black" }}>
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
