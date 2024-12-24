import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { PersonOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
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

  // Reusable styles for common elements
  const textStyle = {
    color: "white",
    fontWeight: "550",
  };

  const inputStyle = {
    color: "white", // Default text color
    "& .MuiInputLabel-root": {
      color: "white", // Label color
    },
    "& .MuiOutlinedInput-root": {
      color: "white", // Default text color inside the input
      backgroundColor: "#2c3e50", // Change the background color inside the input field
      "& fieldset": {
        borderColor: "#134b4e", // Default border color (when not focused)
      },
      // Change outline color on focus or click
      "&.Mui-focused fieldset": {
        borderColor: "#134b4e", // Border color when focused or clicked
      },
      "&:hover fieldset": {
        borderColor: "#134b4e", // Border color when hovered
      },
    },
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
        backgroundColor: "#212f3d", // Dark background
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
      <Typography variant="h4" sx={textStyle}>
        Welcome Back!
      </Typography>
      <Typography variant="body2" sx={{ ...textStyle, fontSize: "14px" }}>
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
            sx={inputStyle} // Apply the input styles globally
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
            sx={inputStyle} // Apply the input styles globally
          />

          {error && (
            <Typography color="error" sx={{ ...textStyle, marginTop: 2 }}>
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
              backgroundColor: "#134b4e",
              color: "white",
              borderRadius: "50px",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#87b6b6",
              },
            }}
          >
            Login
          </Button>
        </form>
      </Box>

      <Box sx={{ marginTop: 2, marginBottom: 17 }}>
        <Typography variant="body2" sx={textStyle}>
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "#87b6b6", textDecoration: "none" }}
          >
            Sign up here
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
