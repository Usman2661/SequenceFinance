import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import LoginForm from "../components/LoginForm";
import { Box, CssBaseline, Typography } from "@mui/material";
import SignUpForm from "../components/SignUpForm";

const Login: React.FC = () => {
  const [isLogin, setLogin] = useState<boolean>(true);

  const toggleLoginState = () => {
    setLogin((prevState) => !prevState); // Toggle between true and false
  };
  return (
    <Grid
      container
      direction={"row"}
      sx={{
        backgroundColor: "#2C2739",
        margin: 0,
      }}
    >
      <CssBaseline /> {/* Ensures material-ui's global styles are applied */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ display: { xs: "none", sm: "none", md: "block" }, padding: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Vertically center the content
            alignItems: "center", // Horizontally center the content
            color: "white", // Global text color
            backgroundColor: "#2C2739", // Dark background
            height: "96vh", // Ensure the box takes the full page height
            padding: 0, // Remove padding so the image takes up the full space
            overflow: "hidden", // Prevents overflow, ensuring no scrollbars appear
            position: "relative", // To position text absolutely within this container
          }}
        >
          <img
            src="src/assets/loginLatest.jpg"
            alt="Login"
            style={{
              objectFit: "cover", // Ensures the image covers the space without distortion
              width: "100%", // Ensure the image takes up the full width
              height: "100%", // Ensure the image takes up the full height
              borderRadius: 20,
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontSize: 60,
              fontWeight: 800,
              fontFamily: "monospace",
              position: "absolute",
              top: "20px",
              left: "20px",
              color: "white",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "right",
              maxWidth: "50%",
            }}
          >
            SEQFinance
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: 60,
              position: "absolute",
              bottom: "10px", // Position the text at the bottom of the image
              color: "white", // White color for the caption text
              padding: "10px", // Add some padding around the text
              borderRadius: "8px", // Optional: rounds the background corners
              textAlign: "center", // Ensure the text is centered
              maxWidth: "80%", // Limit the text width to fit on the image
            }}
          >
            Viewing Balance & Manage Finances
          </Typography>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
        {isLogin ? (
          <LoginForm toggleLoginState={toggleLoginState} />
        ) : (
          <SignUpForm toggleLoginState={toggleLoginState} />
        )}
      </Grid>
    </Grid>
  );
};

export default Login;
