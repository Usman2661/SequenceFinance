import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import LayoutWithSideNavigation from "./components/LayoutWithSideNavigation";
import { useState } from "react";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const lightTheme = createTheme({
    palette: {
      mode: "light", // Light mode theme
      primary: {
        main: "#1976d2", // Blue color for primary
      },
      background: {
        default: "#ffffff", // Light background
        paper: "#f5f5f5", // Light paper background
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark", // Dark mode theme
      primary: {
        main: "#90caf9", // Light blue color for primary
      },
      background: {
        default: "#121212", // Dark background
        paper: "#1e1e1e", // Dark paper background
      },
      text: {
        primary: "#ffffff", // Light text color for dark mode
        secondary: "#b0b0b0", // Secondary text color
      },
    },
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <LayoutWithSideNavigation
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              >
                <Home />
              </LayoutWithSideNavigation>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
