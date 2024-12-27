import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages/components
import Home from "./Pages/Home"; 
import SignIn from "./Auth/SignIn"; 
import SignUp from "./Auth/SignUp"; 
import About from "./Pages/About";
import ForgotPassword from "./Auth/ForgotPassword";
import CategoryDetails from "./Components/Categories/CategoryDetails";
import ProductDetails from "./Components/Categories/ProductDetails";
import PaymentPage from "./Components/Paymentpage";

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
        <Route path="/category/:id" element={<CategoryDetails />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/payment/:productId" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
