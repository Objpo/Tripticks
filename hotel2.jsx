import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHotels } from "../api/index"; // Giả định đường dẫn
import { FaSpinner } from "react-icons/fa";

const Hotel2 = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getHotels()
            .then((data) => {
                console.log("Dữ liệu từ API:", data); // Debug
                if (Array.isArray(data)) {
                    setHotels(data);
                } else {
                    setHotels([]);
                    setError("Dữ liệu từ API không phải là mảng.");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Lỗi khi lấy dữ liệu khách sạn:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
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
                                    <Link to="/">Home <i className="fa fa-chevron-right"></i></Link>
                                </span>{" "}
                                <span>Hotel <i className="fa fa-chevron-right"></i></span>
                            </p>
                            <h1 className="mb-0 bread">Hotel</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    {loading ? (
                        <p className="text-center w-100 mt-5">
                            <FaSpinner className="fa-spin" /> Đang tải...
                        </p>
                    ) : error ? (
                        <p className="text-center w-100 mt-5" style={{ color: "red" }}>
                            {error}
                        </p>
                    ) : hotels.length === 0 ? (
                        <p className="text-center w-100 mt-5">Không có khách sạn nào.</p>
                    ) : (
                        <div className="row">
                            {hotels.map((room, index) => (
                                <div className="col-md-4" key={room._id || index} style={{ marginBottom: '30px' }}>
                                    <div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', position: 'relative' }}>
                                        <img
                                            src={room.hotel_img || "images/default.jpg"}
                                            alt={room.room_name}
                                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                        />

                                        {/* Hiển thị giá */}
                                        <span className="price" style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '5px 10px', borderRadius: '3px' }}>
                                            ${room.price_per_night || 0}/đêm
                                        </span>

                                        <div className="text p-4">
                                            <h3>{room.room_name || "Phòng không tên"}</h3>

                                            {/* Hiển thị Tên khách sạn */}
                                            <p style={{ fontWeight: 'bold' }}>{room.hotel_name || "Khách sạn không tên"}</p>

                                            <p className="location">
                                                <span className="fa fa-map-marker"></span> {room.country || "Không xác định"}
                                            </p>
                                            <p>Loại: {room.type || "Không xác định"}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section >
        </div >
    );
};

export default Hotel2;