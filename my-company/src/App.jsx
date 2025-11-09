import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  
  const appStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #f8fafc, #fff7ed)",
    color: "#222",
    margin: 0,
  };

  const contentStyle = {
    flex: 1,
    padding: "20px",
    maxWidth: "1100px",
    width: "100%",
    margin: "0 auto",
  };

  return (
    <div style={appStyle}>
      <BrowserRouter>
        <Navbar />
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
