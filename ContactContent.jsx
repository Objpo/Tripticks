import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const ContactContent = () => {
    useEffect(() => {
        const map = L.map("map").setView([40.7128, -74.006], 13); // Tọa độ New York

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        L.marker([40.7128, -74.006])
            .addTo(map)
            .bindPopup("Tripticks Travel Agency")
            .openPopup();
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section
                className="hero-wrap hero-wrap-2 js-fullheight"
                style={{ backgroundImage: "url('images/bg_1.jpg')" }}
            >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                        <div className="col-md-9 ftco-animate pb-5 text-center">
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                    <a href="/">Home <i className="fa fa-chevron-right"></i></a>
                                </span>{" "}
                                <span>
                                    Contact us <i className="fa fa-chevron-right"></i>
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Contact us</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="ftco-section ftco-no-pb contact-section mb-4">
                <div className="container">
                    <div className="row d-flex contact-info">
                        <div className="col-md-3 d-flex">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-map-marker"></span>
                                </div>
                                <h3 className="mb-2">Address</h3>
                                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                        </div>

                        <div className="col-md-3 d-flex">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-phone"></span>
                                </div>
                                <h3 className="mb-2">Contact Number</h3>
                                <p>
                                    <a href="tel://1234567920">+ 1235 2355 98</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3 d-flex">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-paper-plane"></span>
                                </div>
                                <h3 className="mb-2">Email Address</h3>
                                <p>
                                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3 d-flex">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-globe"></span>
                                </div>
                                <h3 className="mb-2">Website</h3>
                                <p>
                                    <a href="#">yoursite.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="ftco-section contact-section ftco-no-pt">
                <div className="container">
                    <div className="row block-9">
                        <div className="col-md-6 order-md-last d-flex">
                            <form action="#" className="bg-light p-5 contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name=""
                                        cols="30"
                                        rows="7"
                                        className="form-control"
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        value="Send Message"
                                        className="btn btn-primary py-3 px-5"
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="col-md-6 d-flex">
                            <div id="map" style={{ width: "100%", height: "400px" }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactContent;
