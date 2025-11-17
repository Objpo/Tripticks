import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import HotelBookingContent from "../components/HotelBookingContent";

const HotelBookingPage = () => {
    return (
        <div>
            <Navbar />
           
            <HotelBookingContent />
            <Footer />
        </div>
    );
};

export default HotelBookingPage;