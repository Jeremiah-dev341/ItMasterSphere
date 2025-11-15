import React from "react";
import { Routes, Route} from "react-router-dom";
import "./index.css"; 
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Stats from "./components/Stats.jsx";
import NewServices from "./components/NewServices.jsx";
import MoreAboutUs from "./components/MoreAboutUs.jsx";
import AllServices from "./components/AllServices.jsx"; 
import Testimonials from "./components/Testimonials.jsx";
import DiscountBanner from "./components/DiscountBanner.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./Login.jsx";
function App() {
  return (
    <Routes>
            {/* 🔐 Login page */}
      <Route path="/login" element={<Login />} />

      {/* 🏠 Main Website (Home/Landing Page) */}
      <Route
        path="/"
        element={
    <div>
       
        <Hero />
        <Stats />
        <AboutUs />
        <NewServices />
        <MoreAboutUs />
        <AllServices />
        <Testimonials />
        <DiscountBanner />
        <Footer />
    </div>
        }
      />
      </Routes>
  );
}

export default App;
