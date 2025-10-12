import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Hotel = () => (
    <>
        <Navbar />
        <section className="hero-wrap" style={{ backgroundImage: "url(/images/hotel_bg.jpg)" }}>
            <div className="overlay"></div>
            <div className="container text-center">
                <h1>Hotels & Accommodations</h1>
            </div>
        </section>
        <Footer />
    </>
);

export default Hotel;
