import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getHotels } from "../api/index";
import { FaSpinner } from "react-icons/fa";


const Navbar = () => { /* ... Navbar JSX ... */ return (<div>Navbar Content</div>); }; 

const HotelResultsPage = () => {
    const location = useLocation();
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("Tất cả Khách sạn"); 

    useEffect(() => {
        const fetchHotelsByQuery = async () => {
            setLoading(true);
            setError(null);

            const params = new URLSearchParams(location.search);
            const destination = params.get('destination') || "";
            // Lấy các params khác nếu cần
            const checkin = params.get('checkin') || "";
            const checkout = params.get('checkout') || "";
            const price = params.get('price') || "";

            const searchParams = { destination, checkin, checkout, price };

      
            const displayQuery = destination
                ? `Kết quả tìm kiếm tại: "${destination}"` 
                : "Tất cả Khách sạn";
            setSearchQuery(displayQuery);

            try {
                const data = await getHotels(searchParams);
                if (Array.isArray(data)) {
                    setHotels(data);
                } else {
                    setHotels([]);
                    setError("Dữ liệu từ API không hợp lệ.");
                }
            } catch (err) {
                console.error("Lỗi khi lấy dữ liệu khách sạn:", err);
                setError(err.message || "Đã xảy ra lỗi khi kết nối máy chủ/tìm kiếm.");
                setHotels([]);
            } finally {
                setLoading(false);
            }
        };

        fetchHotelsByQuery();
    }, [location.search]);

    return (
        <div>
           
            <Navbar />

          
            <section
                className="hero-wrap hero-wrap-2"
                style={{
                    backgroundImage: "url('images/bg_1.jpg')",
                    height: '50vh',
                    minHeight: '400px',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    position: 'relative',
                    paddingTop: '70px',
                }}
            >
                <div className="overlay" style={{ opacity: 0.5 }}></div>
                <div className="container" style={{ position: 'relative', height: '100%' }}>
                    <div className="row no-gutters slider-text justify-content-center align-items-center" style={{ height: '100%' }}>
                        <div className="col-md-9 pb-5 text-center" style={{ zIndex: 2, color: 'white' }}>
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                    <Link to="/" style={{ color: 'white' }}>Home <i className="fa fa-chevron-right"></i></Link>
                                </span>{" "}
                                <span>Hotel <i className="fa fa-chevron-right"></i></span>
                            </p>
                            
                            <h1 className="mb-0 bread" style={{ color: 'white' }}>{searchQuery}</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                  

                    {loading ? (
                        <p className="text-center w-100 mt-5">
                            <FaSpinner className="fa-spin" /> Đang tải kết quả...
                        </p>
                    ) : error ? (
                        <p className="text-center w-100 mt-5" style={{ color: "red" }}>
                            {error}
                        </p>
                    ) : hotels.length === 0 ? (
                        <p className="text-center w-100 mt-5">Không tìm thấy khách sạn nào phù hợp với tiêu chí tìm kiếm của bạn.</p>
                    ) : (
                        <div className="row">
                            {hotels.map((room, index) => (
                                <div className="col-md-4" key={room._id || index} style={{ marginBottom: '30px' }}>
                                    <div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', position: 'relative' }}>
                                        <img src={room.hotel_img || "images/default.jpg"} alt={room.room_name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />

                                        <div className="text p-4">
                                            <h3>{room.room_name || "Phòng không tên"}</h3>
                                            <p style={{ fontWeight: 'bold' }}>{room.hotel_name || "Khách sạn không tên"}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default HotelResultsPage;