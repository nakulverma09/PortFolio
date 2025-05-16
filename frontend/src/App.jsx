import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import "./App.css"; // Import your CSS file

const App = () => {
  useEffect(() => {
    import("cursor-effects").then((module) => {
      // Try FairyDustCursor as it's commonly supported
      const SnowFlakeCursor = module?.snowflakeCursor || module?.default;
      if (SnowFlakeCursor) {
        new SnowFlakeCursor({
          elementCount: 50, // More particles for intense feel
          colors: ["0,255,255", "0,200,255", "255,0,255"], // Cyan & Magenta
          windPower: 0, // No drift - robotic precision
          speed: 2, // Fast movement
          size: 1.1, // Slightly larger particles
        });
      } else {
        console.error(
          "SnowFlakeCursor class not found in cursor-effects module."
        );
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chat" element={<Form />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
