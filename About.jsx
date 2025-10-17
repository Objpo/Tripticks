import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import AboutContent from "../components/About";

const About = () => {
  return (
    <>
      <Navbar />
      <section
        className="hero-wrap"
        style={{
          backgroundImage: "url(/images/bg_2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          position: "relative",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)", 
          }}
        ></div>

        <div
          className="container text-center"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
        
          <h1>About Us</h1>
          <p>We are passionate about travel and adventure.</p>
        </div>
      </section>
     <AboutContent />
      <Footer />
      
    </>
  );
};

export default About;
