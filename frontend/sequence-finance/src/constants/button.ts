import { SxProps, Theme } from "@mui/system";

export const loginButtonStyle: SxProps<Theme> = {
  marginTop: "10px",
  backgroundColor: "#6E54B5",
  fontWeight: 800,
  fontSize: 15,
  color: "white",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: "#884ea0",
  },
};
