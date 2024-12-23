import React, { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
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

  return (
    <Container
      maxWidth={false} // Removes the max-width constraint
      sx={{
        width: "70%",
        padding: 3,
      }}
    >
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
        <PersonOutline
          sx={{
            fontSize: 64,
            color: "black",
            marginTop: 16,
            marginBottom: 2,
          }}
        />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 550 }}>
          Welcome Back !
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Please enter your details
        </Typography>
        <Box sx={{ width: "90%" }}>
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

            {error && <Typography color="error">{error}</Typography>}

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
        </Box>

        <Box sx={{ marginTop: 2, marginBottom: 17 }}>
          <Typography variant="body2" color="textSecondary">
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Sign up here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
