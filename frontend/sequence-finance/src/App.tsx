import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import LayoutWithSideNavigation from "./components/LayoutWithSideNavigation";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <LayoutWithSideNavigation>
              <Home />
            </LayoutWithSideNavigation>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
