import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// -------------------------------------------------------------------
// 1. HERO COMPONENT (Đã sửa lỗi layout)
// -------------------------------------------------------------------
export const Hero = ({ title, breadcrumbs, bgImage }) => {
    return (
        // 💡 ĐÃ SỬA: Loại bỏ js-fullheight, áp dụng chiều cao cố định và padding-top an toàn
        <section
            className="hero-wrap hero-wrap-2"
            style={{
                backgroundImage: `url(${bgImage})`,
                height: '50vh',
                minHeight: '400px',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                position: 'relative',
                paddingTop: '70px', // Đệm an toàn dưới Navbar
            }}
        >
            <div className="overlay" style={{ opacity: 0.5 }}></div>
            <div className="container" style={{ position: 'relative', height: '100%' }}>
                <div className="row no-gutters slider-text justify-content-center align-items-center" style={{ height: '100%' }}>
                    {/* 💡 ĐÃ SỬA: Loại bỏ ftco-animate */}
                    <div className="col-md-9 pb-5 text-center" style={{ zIndex: 2, color: 'white' }}>

                        {/* Breadcrumbs */}
                        <p className="breadcrumbs" style={{ color: 'white' }}>{breadcrumbs}</p>

                        {/* Title chính */}
                        <h1 className="mb-0 bread" style={{ color: 'white', fontSize: '3rem' }}>{title}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

// -------------------------------------------------------------------
// 2. CONTACT INFO COMPONENT
// -------------------------------------------------------------------
export const ContactInfo = () => {
    const infos = [
        { icon: "fa-map-marker", title: "Address", text: "198 West 21th Street, Suite 721 New York NY 10016" },
        { icon: "fa-phone", title: "Contact Number", text: "+ 1235 2355 98", link: "tel://1234567920" },
        { icon: "fa-paper-plane", title: "Email Address", text: "info@yoursite.com", link: "mailto:info@yoursite.com" },
        { icon: "fa-globe", title: "Website", text: "yoursite.com", link: "#" },
    ];

    return (
        <section className="ftco-section ftco-no-pb contact-section mb-4">
            <div className="container">
                <div className="row d-flex contact-info">
                    {infos.map((info, i) => (
                        <div className="col-md-3 d-flex" key={i}>
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className={`fa ${info.icon}`}></span>
                                </div>
                                <h3 className="mb-2">{info.title}</h3>
                                {info.link ? <p><a href={info.link}>{info.text}</a></p> : <p>{info.text}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// -------------------------------------------------------------------
// 3. CONTACT FORM COMPONENT (Bao gồm Map)
// -------------------------------------------------------------------
export const ContactForm = () => {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        // 💡 Logic khởi tạo Leaflet Map
        // Cần kiểm tra xem container map đã có trên DOM chưa
        if (document.getElementById("map")) {
            const map = L.map("map").setView([40.7128, -74.006], 13);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: "© OpenStreetMap contributors",
            }).addTo(map);
            L.marker([40.7128, -74.006]).addTo(map).bindPopup("Tripticks Travel Agency").openPopup();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        console.log("Contact form submitted:", data);
        setStatus("success");
        setTimeout(() => setStatus(null), 4000);
    };

    return (
        <section className="ftco-section contact-section ftco-no-pt">
            <div className="container">
                <div className="row block-9">
                    <div className="col-md-6 order-md-last d-flex">
                        <form onSubmit={handleSubmit} className="bg-light p-5 contact-form">
                            <div className="form-group">
                                <input name="name" type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input name="email" type="email" className="form-control" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input name="subject" type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea name="message" cols="30" rows="7" className="form-control" placeholder="Message" required></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                            </div>
                            {status === "success" && <div className="alert alert-success">Message sent successfully!</div>}
                        </form>
                    </div>
                    <div className="col-md-6 d-flex">
                        {/* Đặt chiều cao tối thiểu để Map hiển thị */}
                        <div id="map" style={{ width: "100%", minHeight: "400px" }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// -------------------------------------------------------------------
// 4. INTRO BANNER COMPONENT
// -------------------------------------------------------------------
export const IntroBanner = () => {
    return (
        <section className="ftco-intro ftco-section ftco-no-pt">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <div className="img" style={{ backgroundImage: "url(images/bg_2.jpg)" }}>
                            <div className="overlay"></div>
                            <h2>We Are Pacific A Travel Agency</h2>
                            <p>We can manage your dream building A small river named Duden flows by their place</p>
                            <p className="mb-0"><a href="#" className="btn btn-primary px-4 py-3">Ask For A Quote</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// -------------------------------------------------------------------
// 5. CONTACT CONTENT CHÍNH
// -------------------------------------------------------------------
const ContactContent = () => {
    return (
        // 💡 LƯU Ý: Component này KHÔNG chứa Navbar, nó chỉ chứa nội dung
        <div className="main-content">
            <Hero
                title="Contact Us"
                breadcrumbs={
                    <>
                        <span className="mr-2"><Link to="/" style={{ color: 'white' }}>Home <i className="fa fa-chevron-right"></i></Link></span>
                        <span>Contact <i className="fa fa-chevron-right"></i></span>
                    </>
                }
                bgImage="images/bg_3.jpg" // Dùng ảnh nền khác cho trang Contact
            />

            <ContactInfo />
            <ContactForm />
            <IntroBanner />
        </div>
    );
};

export default ContactContent;