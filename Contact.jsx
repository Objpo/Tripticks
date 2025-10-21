import React from "react";
import { Link } from "react-router-dom";
import { Hero, ContactInfo, ContactForm, IntroBanner } from "../components/ContactContent";
import Navbar from "../components/navbar"; // Navbar bạn đã có
import Footer from "../components/Footer"; // Footer bạn đã có

const ContactContent = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section kiểu Destination2 */}
      <Hero
        title="Contact Us"
        breadcrumbs={
          <>
            <span className="mr-2">
              <Link to="/">Home <i className="fa fa-chevron-right"></i></Link>
            </span>
            <span>
              Contact us <i className="fa fa-chevron-right"></i>
            </span>
          </>
        }
        bgImage="images/bg_1.jpg"
      />


      {/* Thông tin liên hệ */}
      <ContactInfo />

      {/* Form và bản đồ */}
      <ContactForm />

      {/* Banner giới thiệu */}
      <IntroBanner />

      <Footer />
    </>
  );
};

export default ContactContent;
