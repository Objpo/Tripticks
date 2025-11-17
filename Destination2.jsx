import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { getTours } from "../api/index"; 
import { FaSpinner } from "react-icons/fa";


const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    
    useEffect(() => {
        const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
        setIsLoggedIn(!!token);
    }, [location]);

   
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 150);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path) => (location.pathname === path ? "active" : "");

    // Xử lý đăng xuất
    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem("token");
        }
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
   
        <nav
            className={`navbar navbar-expand-lg ftco_navbar ftco-navbar-light ${scrolled ? "scrolled" : ""}`}
            id="ftco-navbar"
            style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1050 }}
        >
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Tripticks<span> Travel</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#ftco-nav"
                    aria-controls="ftco-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${isActive("/")}`}>
                            <Link to="/" className="nav-link" style={{ fontSize: '0.9rem' }}>Home</Link>
                        </li>
                        <li className={`nav-item ${isActive("/about")}`}>
                            <Link to="/about" className="nav-link" style={{ fontSize: '0.9rem' }}>About</Link>
                        </li>
                        <li className={`nav-item ${isActive("/booking")}`}>
                            <Link to="/booking" className="nav-link" style={{ fontSize: '0.9rem' }}>Tour Booking</Link>
                        </li>
                        <li className={`nav-item ${isActive("/hotel-booking")}`}>
                            <Link to="/hotel-booking" className="nav-link" style={{ fontSize: '0.9rem' }}>Hotel Booking</Link>
                        </li>
                        <li className={`nav-item ${isActive("/destination")}`}>
                            <Link to="/destination" className="nav-link" style={{ fontSize: '0.9rem' }}>Destination</Link>
                        </li>
                        <li className={`nav-item ${isActive("/hotels")}`}>
                            <Link to="/hotels" className="nav-link" style={{ fontSize: '0.9rem' }}>Hotel</Link>
                        </li>
                        <li className={`nav-item ${isActive("/blog")}`}>
                            <Link to="/blog" className="nav-link" style={{ fontSize: '0.9rem' }}>Blog</Link>
                        </li>
                        <li className={`nav-item ${isActive("/contact")}`}>
                            <Link to="/contact" className="nav-link" style={{ fontSize: '0.9rem' }}>Contact</Link>
                        </li>
                        {isLoggedIn ? (
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle d-flex align-items-center"
                                    href="#"
                                    id="userDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="fa fa-user-circle" style={{ fontSize: "22px", marginRight: "6px" }}></i>
                                    Account
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to="/profile">Profile</Link>
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                                </div>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item"><Link to="/signup" className="nav-link">Signup</Link></li>
                                <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};



const Destination2 = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Bổ sung state error

    useEffect(() => {
        getTours()
            .then((data) => {
                console.log("Dữ liệu Tour từ API:", data);
                if (Array.isArray(data)) {
                    setTours(data);
                } else {
                    setTours([]);
                    setError("Dữ liệu Tour từ API không phải là mảng.");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Lỗi khi lấy dữ liệu Tour:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Navbar />

            {/* Hero Section */}
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
                    {/* ĐÃ SỬA: Loại bỏ js-fullheight khỏi row */}
                    <div className="row no-gutters slider-text justify-content-center align-items-center" style={{ height: '100%' }}>
                        {/* ĐÃ SỬA: Loại bỏ ftco-animate */}
                        <div className="col-md-9 pb-5 text-center" style={{ zIndex: 2, color: 'white' }}>

                            {/* BREADCRUMB */}
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                    <Link to="/" style={{ color: 'white' }}>Home <i className="fa fa-chevron-right"></i></Link>
                                </span>{" "}
                                <span>Destination <i className="fa fa-chevron-right"></i></span>
                            </p>

                            {/* HEADER CHÍNH */}
                            <h1 className="mb-0 bread" style={{ color: 'white', fontSize: '3rem' }}>Destination</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Danh sách Tour (Sử dụng cấu trúc đã sửa lỗi) */}
            <section className="ftco-section">
                <div className="container">
                    {loading ? (
                        <p className="text-center w-100 mt-5">
                            <FaSpinner className="fa-spin" /> Đang tải Tour...
                        </p>
                    ) : error ? (
                        <p className="text-center w-100 mt-5" style={{ color: "red" }}>
                            {error}
                        </p>
                    ) : tours.length === 0 ? (
                        <p className="text-center w-100 mt-5">Không có Tour nào.</p>
                    ) : (
                        <div className="row">
                            {tours.map((tour, index) => (
                                <div className="col-md-4" key={tour._id || index} style={{ marginBottom: '30px' }}>

                                    <div style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden', position: 'relative' }}>

                                        {/* Hiển thị ảnh Tour: Giả sử trường ảnh trong DB là 'img' */}
                                        <img
                                            src={tour.img || "images/default_tour.jpg"}
                                            alt={tour.tour_name}
                                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                        />

                                        {/* Hiển thị giá */}
                                        <p className="price" style={{ position: 'absolute', top: '10px', right: '10px',color:'white', backgroundColor: 'rgba(0,0,0,0.7)', padding: '5px 10px', borderRadius: '3px', fontWeight: 'bold' }}>
                                            <span>price: {tour.price  || "N/A"}$</span>
                                        </p>

                                        <div className="text p-4">
                                            {/* Hiển thị Tên Tour */}
                                            <h3>{tour.tour_name || "Tour không tên"}</h3>

                                           
                                            <p style={{ fontSize: '14px', marginBottom: '10px', color: '#666' }}>
                                                {tour.description ? `${tour.description.substring(0, 100)}...` : 'No description available.'}
                                            </p>

                                            <p className="location">
                                                <span className="fa fa-map-marker"></span> {tour.country || "Không xác định"}
                                            </p>

                                            <p>Times: {tour.duration_hours || tour.duration} Days</p>

                                           
                                            <p style={{ fontWeight: 'bold', color: tour.available_seats > 5 ? 'gray' : 'red' }}>
                                                Seats: {tour.available_seats || 0}
                                            </p>
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

export default Destination2;