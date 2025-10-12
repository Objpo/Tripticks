import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Destination from "./pages/Destination";
import Blog from "./pages/Blog";
import Contact from "./pages/contact";
import Hotel from "./pages/Hotel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/hotel" element={<Hotel />} />
    </Routes>
  );
}

export default App;
