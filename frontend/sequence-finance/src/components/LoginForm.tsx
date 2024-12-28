import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { loginTextStyle } from "../constants/text";
import { loginInputStartProps, loginInputStyle } from "../constants/inputs";
import { loginButtonStyle } from "../constants/button";

interface LoginProps {
  toggleLoginState: () => void; // Define the type of the function
}

const LoginForm: React.FC<LoginProps> = ({ toggleLoginState }) => {
  // State to manage form inputs
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation example
    if (email === "" || password === "") {
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
        Welcome Back!
      </Typography>
      <Typography variant="body2" sx={{ ...loginTextStyle, fontSize: "14px" }}>
        Please enter your details
      </Typography>
      <Box sx={{ width: "70%" }}>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          {/* Email Field */}
          <TextField
            label="Enter your email"
            type="email"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              ...loginInputStyle,
            }}
            slotProps={{
              inputLabel: {
                sx: loginInputStartProps,
              },
            }}
          />

          {/* Password Field */}
          <TextField
            hiddenLabel
            label="Enter your password"
            type={showPassword ? "text" : "password"}
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={loginInputStyle} // Apply the input styles globally
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ color: "white" }}
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
              inputLabel: {
                sx: loginInputStartProps, // Apply the label styles using slotProps
              },
            }}
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
            Login
          </Button>
        </form>
      </Box>

      <Box sx={{ marginTop: 2, marginBottom: 17 }}>
        <Typography variant="body2" sx={loginTextStyle}>
          Don't have an account?{" "}
          <span
            style={{
              color: "#6E54B5",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={toggleLoginState}
          >
            Sign up here
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
