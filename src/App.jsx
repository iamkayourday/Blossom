import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages/components
import Home from "./Pages/Home"; 
import SignIn from "./Auth/SignIn"; 
import SignUp from "./Auth/SignUp"; 
import About from "./Pages/About";
import ForgotPassword from "./Auth/ForgotPassword";

function App() {
  return (
    <Router>
      
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
