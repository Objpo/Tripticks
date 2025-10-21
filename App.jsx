import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Destination from "./pages/Destination";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Hotel2 from "./components/hotel2";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import BookingPage from "./pages/BookingPage";


function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/hotels" element={<Hotel2 />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default App;