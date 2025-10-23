import React from "react";
// 💡 CẦN SỬ DỤNG useLocation, useNavigate cho Navbar
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar"; // Navbar bạn đã có
import Footer from "../components/Footer"; // Footer bạn đã có
// 💡 IMPORT TẤT CẢ CÁC COMPONENT PHỤ TRỢ từ file riêng
import { Hero, ContactInfo, ContactForm, IntroBanner } from "../components/ContactContent";

// -------------------------------------------------------------------
// 1. NAVBAR COMPONENT (Tích hợp Navbar thực tế - Nếu Navbar là external component)
// 💡 LƯU Ý: Nếu Navbar của bạn nằm ở file components/navbar.jsx, bạn KHÔNG cần code này ở đây,
// nhưng vì bạn nói "nó đã có navbar rồi", tôi giữ cấu trúc bọc như bạn yêu cầu.
// -------------------------------------------------------------------

const ContactPage = () => {
  // 💡 SỬ DỤNG HOÀN TOÀN CẤU TRÚC ĐÚNG CHO PAGE CONTAINER
  return (
    <>
      <Navbar />

      {/* 💡 SỬ DỤNG HERO COMPONENT VỚI STYLE ĐÃ SỬA LỖI LAYOUT */}
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
        bgImage="images/bg_1.jpg" // Sử dụng ảnh nền khác cho Contact Page
      />

      <ContactInfo />
      <ContactForm />
      <IntroBanner />

      <Footer />
    </>
  );
};

export default ContactPage;