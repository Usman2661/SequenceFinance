import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { PersonOutline } from "@mui/icons-material";
import { loginTextStyle } from "../constants/text";
import { loginInputStyle } from "../constants/inputs";

interface LoginProps {
  toggleLoginState: () => void; // Define the type of the function
}

const LoginForm: React.FC<LoginProps> = ({ toggleLoginState }) => {
  // State to manage form inputs
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

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
        alignItems: "center",
        borderRadius: 2,
        height: "100%",
        color: "white", // Global text color
        backgroundColor: "#2C2739", // Dark background
        padding: 3,
      }}
    >
      <PersonOutline
        sx={{
          fontSize: 64,
          color: "white", // Icon color
          marginTop: 16,
          marginBottom: 2,
        }}
      />
      <Typography variant="h4" sx={{ ...loginTextStyle, color: "white" }}>
        Welcome Back!
      </Typography>
      <Typography variant="body2" sx={{ ...loginTextStyle, fontSize: "14px" }}>
        Please enter your details
      </Typography>
      <Box sx={{ width: "70%" }}>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
            sx={{
              marginTop: "10px",
              backgroundColor: "#6E54B5",
              color: "white",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#6E54B5",
              },
            }}
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
