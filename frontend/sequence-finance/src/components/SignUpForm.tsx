import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { PersonOutline } from "@mui/icons-material";

import { loginTextStyle } from "../constants/text";
import { loginInputStyle } from "../constants/inputs";

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
      <Typography variant="h4" sx={loginTextStyle}>
        Create a new account !
      </Typography>
      <Typography variant="body2" sx={{ ...loginTextStyle, fontSize: "14px" }}>
        Please enter your details
      </Typography>
      <Box sx={{ width: "70%" }}>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
          />
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
        <Typography variant="body2" sx={loginTextStyle}>
          Already have an account
          <p
            style={{ color: "#87b6b6", textDecoration: "none" }}
            onClick={toggleLoginState}
          >
            Login Here
          </p>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUpForm;
