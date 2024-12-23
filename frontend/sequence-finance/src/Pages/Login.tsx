import React from "react";
import Grid from "@mui/material/Grid2";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <Grid container direction={"row"}>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
        <img
          src="src/assets/login.png"
          alt="Login"
          style={{
            width: "100%", // Make the image fill the width of the container
            height: "100%", // Make the image fill the height of the container
            objectFit: "cover", // Ensures the image covers the space without distortion
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;
