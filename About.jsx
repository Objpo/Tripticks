import React from "react";
import "aos/dist/aos.css";

const About = () => {
    return (
        <section
            className="ftco-section ftco-about img"
            id="about"
            style={{
                backgroundImage: "url('/images/bg_4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Lớp overlay mờ nền */}
            <div
                className="overlay"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.4)",
                    zIndex: 1,
                }}
            ></div>

            <div className="container py-md-5" style={{ position: "relative", zIndex: 2 }}>
                <div className="row align-items-center">
                    {/* Cột hình ảnh + video */}
                    <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0" data-aos="fade-right">
                        <div
                            className="video-box position-relative about-image"
                            style={{
                                backgroundImage: "url('/images/about-1.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%",
                                maxWidth: "500px",
                                height: "350px",
                                borderRadius: "15px",
                                overflow: "hidden",
                                transition: "transform 0.5s ease",
                            }}
                        >
                            {/* Hiệu ứng overlay khi hover */}
                            <div
                                className="overlay"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background:
                                        "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)",
                                    opacity: 0,
                                    transition: "opacity 0.4s ease",
                                    borderRadius: "15px",
                                }}
                            ></div>

                            {/* Nút Play */}
                            <a
                                href="https://vimeo.com/45830194"
                                className="icon-video d-flex align-items-center justify-content-center"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "80px",
                                    height: "80px",
                                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    borderRadius: "50%",
                                    textAlign: "center",
                                    transition: "all 0.3s ease",
                                    zIndex: 3,
                                }}
                            >
                                
                                <span
                                    className="fa fa-play"
                                    style={{
                                        fontSize: "28px",
                                        color: "#ff5a5f",
                                    }}
                                ></span>
                            </a>
                        </div>
                    </div>

                    {/* Cột nội dung */}
                    <div className="col-md-6 text-white" data-aos="fade-left">
                        <div className="heading-section">
                            <span className="subheading text-warning">About Us</span>
                            <h2 className="mb-4 text-white">
                                Make Your Tour Memorable and Safe With Us
                            </h2>
                            <p style={{ color: "white" }}>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated
                                they live in Bookmarksgrove right at the coast of the Semantics,
                                a large language ocean.
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary">
                                    Book Your Destination
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS nội bộ cho hiệu ứng hover */}
            <style jsx>{`
        .about-image:hover {
          transform: scale(1.05);
        }

        .about-image:hover .overlay {
          opacity: 1;
        }

        .icon-video:hover {
          background-color: #ff5a5f;
        }

        .icon-video:hover span {
          color: #fff;
        }
      `}</style>
        </section>
    );
};

export default About;
