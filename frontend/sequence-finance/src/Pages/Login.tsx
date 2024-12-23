import React from "react";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <Box
      sx={{
        margin: 0,
      }}
    >
      <Grid container direction={"row"} spacing={2} size={12}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <img
            src="src/assets/login.jpg"
            alt="Login"
            style={{
              width: "100%", // Make the image fill the width of the container
              height: "100%", // Make the image fill the height of the container
              objectFit: "cover", // Ensures the image covers the space without distortion
            }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
