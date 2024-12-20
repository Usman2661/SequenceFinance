import React from "react";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction={"row"} spacing={2} size={12}>
          <Grid size={{ xs: 12, md: 6 }}> I am for image</Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              height: "100vh", // Full screen height
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
            }}
          >
            <LoginForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
