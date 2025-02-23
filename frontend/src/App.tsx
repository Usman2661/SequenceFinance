import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  ThemeOptions,
} from "@mui/material";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import LayoutWithSideNavigation from "./components/LayoutWithSideNavigation";
import { useState } from "react";
import { appColors } from "./constants/appColors";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#1976d2",
      },
      background: {
        default: "#ffffff",
        paper: "#f5f5f5",
      },
    },
    customColors: appColors,
  } as ThemeOptions);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9",
      },
      background: {
        default: "#121212",
        paper: "#1e1e1e",
      },
      text: {
        primary: "#ffffff",
        secondary: "#b0b0b0",
      },
    },
    customColors: appColors,
  } as ThemeOptions);

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
