import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/landingPage";
import Login from "../components/Login";
import ForgetPassword from "../components/ForgetPassword";
import Signup from "../components/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          {/* <Route path="signup" element={<Signup />} />
          <Route path="forget-password" element={<ForgetPassword />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
