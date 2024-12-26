import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { loginTextStyle } from "../constants/text";
import { loginInputStyle } from "../constants/inputs";
import { loginButtonStyle } from "../constants/button";

interface SignUpProps {
  toggleLoginState: () => void; // Define the type of the function
}

const SignUpForm: React.FC<SignUpProps> = ({ toggleLoginState }) => {
  // State to manage form inputs
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation example
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === ""
    ) {
      setError("Both email and password are required");
    } else {
      setError(null);
      // Handle login logic here
      console.log("Email:", email, "Password:", password);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centers horizontally
        justifyContent: "center", // Centers vertically
        height: "100vh", // Ensures full viewport height
        color: "white", // Global text color
        backgroundColor: "#2C2739", // Dark background
        padding: 3, // Padding around the content
      }}
    >
      <Typography variant="h2" sx={{ color: "white", fontWeight: 200 }}>
        Create an account
      </Typography>
      <Typography variant="body2" sx={{ ...loginTextStyle, fontSize: "14px" }}>
        Please enter your details
      </Typography>
      <Box sx={{ width: "70%" }}>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container sx={{ direction: "row" }} spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              {/* First Name Field */}
              <TextField
                label="First Name"
                type="text"
                fullWidth
                required
                margin="normal"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={loginInputStyle} // Apply the input styles globally
                InputLabelProps={{
                  sx: { color: "red", "&.Mui-focused": { color: "green" } },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              {/* Last Name Field */}
              <TextField
                label="Last Name"
                type="text"
                fullWidth
                required
                margin="normal"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={loginInputStyle} // Apply the input styles globally
              />
            </Grid>
          </Grid>
          {/* Email Field */}
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={loginInputStyle} // Apply the input styles globally
          />
          {/* Password Field */}
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={loginInputStyle} // Apply the input styles globally
          />
          {error && (
            <Typography color="error" sx={{ ...loginTextStyle, marginTop: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ ...loginButtonStyle }}
          >
            Sign Up
          </Button>
        </form>
      </Box>

      <Box sx={{ marginTop: 2, marginBottom: 17 }}>
        <Typography variant="body2" sx={loginTextStyle}>
          Already have an account ?
          <span
            style={{
              color: "#6E54B5",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={toggleLoginState}
          >
            Login Here
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUpForm;
