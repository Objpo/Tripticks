import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Destination from "./components/Destination";
import Product from "./components/product";
import About from "./components/About";
import Intro from "./components/Intro";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <SearchSection />
            <Services />
            <Destination />
            <Product />
            <About/>
            <Testimonial />
            <Blog />
            <Intro />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
