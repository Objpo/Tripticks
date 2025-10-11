import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="ftco-intro ftco-section ftco-no-pt">
            <div className="container">
                <div className="row justify-content-center">
                    <div
                        className="col-md-12 text-center"
                        data-aos="fade-up"
                        data-aos-offset="200"
                    >
                        <div
                            className="img d-flex flex-column align-items-center justify-content-center"
                            style={{
                                backgroundImage: `url('/images/bg_2.jpg')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundAttachment: "fixed", // 💨 Parallax effect
                                padding: "100px 20px",
                                position: "relative",
                                borderRadius: "10px",
                                overflow: "hidden",
                                color: "#fff",
                            }}
                        >
                            {/* Overlay */}
                            <div
                                className="overlay"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    zIndex: 1,
                                }}
                            ></div>

                            {/* Text Content */}
                            <div style={{ position: "relative", zIndex: 2 }}>
                                <h2
                                    className="mb-3"
                                    style={{
                                        fontSize: "36px",
                                        fontWeight: "700",
                                        color: "#fff",
                                    }}
                                >
                                    We Are Pacific A Travel Agency
                                </h2>
                                <p
                                    style={{
                                        fontSize: "18px",
                                        maxWidth: "700px",
                                        margin: "0 auto 20px",
                                    }}
                                >
                                    We can manage your dream building. A small river named Duden
                                    flows by their place.
                                </p>
                                <p className="mb-0">
                                    <a
                                        href="#"
                                        className="btn btn-primary px-4 py-3"
                                        style={{
                                            fontWeight: "600",
                                            borderRadius: "50px",
                                        }}
                                    >
                                        Ask For A Quote
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
