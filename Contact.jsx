import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer"; 

import { Hero, ContactInfo, ContactForm, IntroBanner } from "../components/ContactContent";



const ContactPage = () => {

  return (
    <>
      <Navbar />


      <Hero
        title="Contact Us"
        breadcrumbs={
          <>
            <span className="mr-2">
              <Link to="/" style={{ color: 'white' }}>Home <i className="fa fa-chevron-right"></i></Link>
            </span>
            <span style={{ color: 'white' }}>
              Contact us <i className="fa fa-chevron-right"></i>
            </span>
          </>
        }
        bgImage="images/bg_1.jpg"
      />

      <ContactInfo />
      <ContactForm />
      <IntroBanner />

      <Footer />
    </>
  );
};

export default ContactPage;