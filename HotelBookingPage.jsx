import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
// 💡 1. Import component booking khách sạn mới của bạn
import HotelBookingContent from "../components/HotelBookingContent"; 

const HotelBookingPage = () => {
    return (
        <div>
            <Navbar />
            {/* 💡 2. Sử dụng component booking khách sạn ở đây */}
            <HotelBookingContent />
            <Footer />
        </div>
    );
};

export default HotelBookingPage;