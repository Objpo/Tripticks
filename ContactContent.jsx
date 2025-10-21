import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const Hero = ({ title, breadcrumbs, bgImage }) => {
    return (
        <section
            className="hero-wrap hero-wrap-2 js-fullheight"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                    <div className="col-md-9 ftco-animate pb-5 text-center">
                        {/* Breadcrumbs */}
                        <p className="breadcrumbs">{breadcrumbs}</p>
                        {/* Title chính */}
                        <h1 className="mb-0 bread">{title}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};


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

export const ContactForm = () => {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const map = L.map("map").setView([40.7128, -74.006], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap contributors",
        }).addTo(map);
        L.marker([40.7128, -74.006]).addTo(map).bindPopup("Tripticks Travel Agency").openPopup();
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
                        <div id="map" style={{ width: "100%", height: "400px" }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

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
