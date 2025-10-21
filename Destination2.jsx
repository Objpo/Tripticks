import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Destination2 = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load main.js (hiệu ứng animation, menu, v.v.)
        const script = document.createElement("script");
        script.src = "/js/main.js";
        script.async = true;
        document.body.appendChild(script);

        // Gọi API backend
        axios
            .get("/api/tours")
            .then((res) => {
                setTours(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Lỗi khi lấy dữ liệu tour:", err);
                setLoading(false);
            });

        return () => document.body.removeChild(script);
    }, []);

    return (
        <div>
            {/* ✅ Hero Section */}
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
                                    <Link to="/">
                                        Home <i className="fa fa-chevron-right"></i>
                                    </Link>
                                </span>{" "}
                                <span>Destination <i className="fa fa-chevron-right"></i></span>
                            </p>
                            <h1 className="mb-0 bread">Top Destinations</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ Danh sách tour */}
            <div style={{ padding: "20px", color: "black" }}>
                <h2>Danh sách tour</h2>
                {loading ? (
                    <p>Đang tải...</p>
                ) : (
                    <ul>
                        {tours.map((tour, index) => (
                            <li key={index}>
                                <strong>{tour.tour_name}</strong> - {tour.country} - ${tour.price}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
export default Destination2;