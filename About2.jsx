import React, { useEffect } from "react";
import { Link } from "react-router-dom";


import AOS from "aos";
import "aos/dist/aos.css";


const About2 = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
        });

        const script = document.createElement("script");
        script.src = "/js/main.js";
        script.async = true;
        document.body.appendChild(script);

        return () => document.body.removeChild(script);
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section
                className="hero-wrap hero-wrap-2 js-fullheight"
                style={{ backgroundImage: "url('images/bg_2.jpg')" }}
            >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                        <div className="col-md-9 ftco-animate pb-5 text-center" data-aos="fade-up">
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                    <Link to="/">
                                        Home <i className="fa fa-chevron-right"></i>
                                    </Link>
                                </span>{" "}
                                <span>About Us <i className="fa fa-chevron-right"></i></span>
                            </p>
                            <h1 className="mb-0 bread">About Us</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nội dung chính */}
            <section className="ftco-section bg-light" style={{ color: "black" }}>
                <div className="container">
                    {/* Giới thiệu tổng quan */}
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6 ftco-animate" data-aos="fade-right">
                            <img
                                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
                                alt="Travel Adventure"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-md-6 ftco-animate" data-aos="fade-left">
                            <h2 className="mb-4">We are passionate about travel and adventure</h2>
                            <p>
                                TripTicks was founded with one simple mission — to help you
                                explore the world with ease. From pristine beaches to cultural
                                landmarks, we curate experiences that connect you with the heart
                                of each destination.
                            </p>
                            <p>
                                Our dedicated team ensures each trip is memorable, safe, and full
                                of unforgettable adventures.
                            </p>
                        </div>
                    </div>

                    {/* Sứ mệnh & Giá trị */}
                    <div className="row align-items-center flex-md-row-reverse mb-5">
                        <div className="col-md-6 ftco-animate" data-aos="fade-left">
                            <img
                                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
                                alt="Our Mission"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-md-6 ftco-animate" data-aos="fade-right">
                            <h2 className="mb-4">Our Mission</h2>
                            <p>
                                We believe travel is not just about places, but about people,
                                stories, and connections. Our mission is to inspire travelers
                                to explore responsibly and experience the world through a new lens.
                            </p>
                            <ul>
                                <li>🌍 Promote sustainable and responsible tourism</li>
                                <li>🤝 Support local communities and culture</li>
                                <li>🧭 Encourage exploration beyond the ordinary</li>
                            </ul>
                        </div>
                    </div>

                    {/* Team Members */}
                    <div className="row mb-5">
                        <div className="col-md-12 text-center mb-4">
                            <h2 data-aos="fade-up">Meet Our Team</h2>
                            <p data-aos="fade-up" data-aos-delay="100">
                                The people behind TripTicks, passionate about travel and adventure.
                            </p>
                        </div>
                        {[
                            { name: "võ Khánh Huy", role: "Dev API", img: "https://cdn.24h.com.vn/upload/3-2018/images/2018-07-21/1532169492-532-10-su-that-ve-mr-bean-thang-ngo-ngo-ngan---ban-than-cua-cuu-thu-tuong-anh-mr-bean--1--1532060582-width1252height1252.jpeg" },
                            {name: "Bùi Khải Tường", role: "FrontEnd", img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/14/835774/Lks.jpg" },
                            { name: "Trần Gia Huy", role: "BackEnd", img: "https://vn1.vdrive.vn/alohamedia.vn/2025/03/Anh-meme-hai-anh-da-den-toc-ngan.jpg" },
                            { name: "Lê Thị Tuyêt Trâm", role: "Figma", img: "https://www.acfc.com.vn/acfc_wp/wp-content/uploads/2025/07/image-833-819x1024.webp" },
                            { name: "Phạm Tiểu Phụng", role: "Figma", img: "https://cdn.eva.vn/upload/3-2024/images/2024-09-09/1725866245-kim-ji-won-3-67475-width600height900.jpg" },
                            { name: "Nguyễn Tấn Bin", role: "admin", img: "https://kenh14cdn.com/203336854389633024/2021/2/22/15251512011507448553886425796925100866693077o-1614008494654514344700.jpg" },
                        ].map((member, index) => (
                            <div className="col-md-4 text-center" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="team-member shadow rounded p-3">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="img-fluid rounded-circle mb-3"
                                    />
                                    <h5>{member.name}</h5>
                                    <span className="text-muted">{member.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Testimonials */}
                    <div className="row mb-5">
                        <div className="col-md-12 text-center mb-4">
                            <h2 data-aos="fade-up">What Our Travelers Say</h2>
                        </div>
                        {[
                            {
                                name: "Trần Hữu Quốc Văn",
                                text: "nhóm này làm rất tốt, thầy rất hài lòng về trang web của nhóm.",
                                img: "https://randomuser.me/api/portraits/women/65.jpg"
                            },
                            {
                                name: "Mai Thái Quốc",
                                text: "thầy thấy nhóm teamwork rất hiệu quả.",
                                img: "https://randomuser.me/api/portraits/men/52.jpg"
                            },
                        ].map((testimonial, index) => (
                            <div className="col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="testimonial p-4 shadow rounded mb-4 text-center"
                                    style={{
                                        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
                                        borderLeft: "5px solid #007bff",
                                        position: "relative",
                                        transition: "transform 0.3s, box-shadow 0.3s",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = "translateY(-5px)";
                                        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                                    }}
                                >
                                    {/* Quote icon ở trên */}
                                    <div style={{ fontSize: "3rem", color: "#007bff", marginBottom: "10px" }}></div>

                                    {/* Nội dung testimonial */}
                                    <p style={{ fontStyle: "italic", fontSize: "1.1rem", marginBottom: "20px" }}>
                                        {testimonial.text}
                                    </p>

                                    {/* Avatar + tên */}
                                    <div className="d-flex flex-column align-items-center">
                                        <img
                                            src={testimonial.img}
                                            alt={testimonial.name}
                                            className="rounded-circle mb-2"
                                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                        />
                                        <h6 className="mb-0" style={{ fontWeight: "600" }}>{testimonial.name}</h6>
                                    </div>

                                    {/* Quote icon ở dưới */}
                                    <div style={{ fontSize: "3rem", color: "#007bff", marginTop: "10px" }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About2;
