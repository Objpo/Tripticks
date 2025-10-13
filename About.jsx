import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <Navbar />
            <section className="hero-wrap" style={{ backgroundImage: "url(/images/bg_2.jpg)" }}>
                <div className="overlay"></div>
                <div className="container text-center">
                    <h1>About Us</h1>
                    <p>We are passionate about travel and adventure.</p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;
