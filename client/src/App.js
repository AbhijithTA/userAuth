import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./user/login";
import UserRegistration from "./user/signup";
import HomePage from "./home/homePage";
import DashPage from "./dashboard/dash";

function App() {
  const [token, setToken] = useState("");

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage setToken={setToken} />} />
          <Route path="/signup" element={<UserRegistration />} />
          <Route path="/home/:username" component={HomePage} />
          <Route path="/" element={<DashPage/>}  />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
