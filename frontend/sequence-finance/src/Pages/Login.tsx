import React from "react";
import Grid from "@mui/material/Grid2";
import LoginForm from "../components/LoginForm";
import { Card, CssBaseline, Typography } from "@mui/material";

const Login: React.FC = () => {
  return (
    <Grid
      container
      direction={"row"}
      sx={{
        backgroundColor: "#212f3d",
        height: "100vh",
        margin: 0,
      }}
    >
      <CssBaseline /> {/* Ensures material-ui's global styles are applied */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ display: { xs: "none", sm: "none", md: "block" }, padding: 2 }}
      >
        <Card
          sx={{
            height: "100%", // Ensure the card takes the full height of the container
            display: "flex", // Allows the content to fill the card properly
            flexDirection: "column", // Ensures the content is stacked vertically
            borderRadius: "16px",
            position: "relative", // Make sure the card has relative positioning
          }}
        >
          <img
            src="src/assets/loginImage.jpg"
            alt="Login"
            style={{
              width: "100%", // Make the image fill the width of the container
              height: "100%", // Make the image fill the height of the container
              objectFit: "cover", // Ensures the image covers the space without distortion
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: 50,
              position: "absolute",
              bottom: "20px", // Position the text at the bottom of the image
              left: "50%", // Position the text horizontally at the center
              transform: "translateX(-50%)", // Center the text exactly horizontally
              color: "white", // White color for the caption text
              padding: "10px", // Add some padding around the text
              borderRadius: "8px", // Optional: rounds the background corners
              textAlign: "center", // Ensure the text is centered
              maxWidth: "80%", // Limit the text width to fit on the image
            }}
          >
            Viewing Balance, Managing Finances
          </Typography>
          {/* Top right text */}
          <Typography
            variant="h2"
            sx={{
              fontSize: 50,
              fontWeight: 800,
              fontFamily: "monospace",
              position: "absolute",
              top: "20px",
              left: "20px",
              color: "black",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "right",
              maxWidth: "50%",
            }}
          >
            SEQFinance
          </Typography>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;
