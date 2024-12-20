import React, { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
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

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
          backgroundColor: "#fff",
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Welcome Back
        </Typography>
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
          />

          {/* Error Message */}
          {error && <Typography color="error">{error}</Typography>}

          {/* Login Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: "10px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "50px",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "darkgray",
              },
            }}
          >
            Login
          </Button>
        </form>

        {/* Forgot Password Link */}
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2" color="textSecondary" align="center">
            <p>
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
