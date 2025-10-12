import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";
import Services from "../components/Services";
import Destination from "../components/Destination";
import Product from "../components/Product";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchSection />
      <Services />
      <Destination />
      <Product />
      <About />
      <Testimonial />
      <Blog />
      <Intro />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
