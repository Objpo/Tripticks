import React, { useEffect, useState } from "react";
// Giữ lại các hook cần thiết cho cả Navbar và Hotel2
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getHotels } from "../api/index";
import { FaSpinner } from "react-icons/fa";

// ==========================================================
// BẮT ĐẦU CODE NAVBAR THỰC TẾ (GIỮ NGUYÊN)
// ==========================================================
const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Kiểm tra token trong localStorage
    useEffect(() => {
        const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
        setIsLoggedIn(!!token);
    }, [location]);

    // Hiệu ứng đổi nền khi cuộn
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
// ==========================================================
// KẾT THÚC CODE NAVBAR THỰC TẾ
// ==========================================================

// ==========================================================
// HOTEL2 - TRANG KẾT QUẢ TÌM KIẾM (ĐÃ SỬA LỖI TRÙNG LẶP)
// ==========================================================
const Hotel2 = () => {
    const location = useLocation();

    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("Tất cả Khách sạn"); // State hiển thị thông báo tìm kiếm

    useEffect(() => {
        const fetchHotelsByQuery = async () => {
            setLoading(true);
            setError(null);

            // 1. Phân tích Query String từ URL
            const params = new URLSearchParams(location.search);
            const destination = params.get('destination') || "";
            const checkin = params.get('checkin') || "";
            const checkout = params.get('checkout') || "";
            const price = params.get('price') || "";

            const searchParams = { destination, checkin, checkout, price };

            // 💡 THÊM DEBUG LOG CỰC KỲ QUAN TRỌNG
            console.log("Hotel2 sending searchParams:", searchParams);

            // Cập nhật thông báo hiển thị dựa trên tham số tìm kiếm
            const displayQuery = destination
                ? `Kết quả tìm kiếm tại: "${destination}"`
                : "Tất cả Khách sạn";
            setSearchQuery(displayQuery);

            try {
                // 2. GỌI API: Hàm getHotels phải nhận searchParams và gửi chúng đi
                const data = await getHotels(searchParams);

                if (Array.isArray(data)) {
                    setHotels(data);
                } else {
                    setHotels([]);
                    setError("Dữ liệu từ API không hợp lệ.");
                }
            } catch (err) {
                console.error("Lỗi khi lấy dữ liệu khách sạn:", err);
                setError(err.message || "Đã xảy ra lỗi khi kết nối máy chủ.");
                setHotels([]);
            } finally {
                setLoading(false);
            }
        };

        fetchHotelsByQuery();

        // Chạy lại mỗi khi chuỗi tìm kiếm trên URL thay đổi
    }, [location.search]);

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

            {/* Danh sách Khách sạn (Kết quả tìm kiếm) */}
            <section className="ftco-section">
                <div className="container">
                    <h2 className="mb-4">{searchQuery}</h2>

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
                                            <p className="location"><span className="fa fa-map-marker"></span> {room.country || "Không xác định"}</p>
                                            <p>Loại: {room.type || "Không xác định"}</p>
                                            <p style={{ fontSize: '14px' }}>Tối đa: {room.max_guests || 0} khách</p>
                                            <p style={{ fontWeight: 'bold', color: room.available ? 'green' : 'red' }}>Trạng thái: {room.available ? 'Còn trống' : 'Đã đặt'}</p>
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

export default Hotel2;