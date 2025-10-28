import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Kiểm tra token trong localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true nếu có token
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
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ftco_navbar ftco-navbar-light ${scrolled ? "scrolled" : ""}`}
      id="ftco-navbar"
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
              <Link to="/" className="nav-link" style={{ fontSize: '0.9rem' }}>
                Home
              </Link>
            </li>
            <li className={`nav-item ${isActive("/about")}`}>
              <Link to="/about" className="nav-link" style={{ fontSize: '0.9rem' }}>
                About
              </Link>
            </li>
            <li className={`nav-item ${isActive("/booking")}`}>
              <Link to="/booking" className="nav-link" style={{ fontSize: '0.9rem' }}>
                Tour Booking
              </Link>
            </li>
            <li className={`nav-item ${isActive("/hotel-booking")}`}>
              <Link to="/hotel-booking" className="nav-link" style={{ fontSize: '0.9rem' }}>
                Hotel Booking
              </Link>
            </li>
            <li className={`nav-item ${isActive("/destination")}`}>
              <Link to="/destination" className="nav-link" style={{ fontSize: '0.9rem' }}>
                Destination
              </Link>
            </li>
            <li className={`nav-item ${isActive("/hotels")}`}>
              <Link to="/hotels" className="nav-link" style={{ fontSize: '0.9rem' }}>
                Hotel
              </Link>
            </li>
            <li className={`nav-item ${isActive("/blog")}`}>
              <Link to="/blog" className="nav-link" style={{ fontSize: '0.9rem' }}>
                Blog
              </Link>
            </li>
            <li className={`nav-item ${isActive("/contact")}`}>
              <Link to="/contact" className="nav-link" style={{ fontSize: '0.9rem' }}>
                Contact
              </Link>
            </li>

            {/* Nếu đã đăng nhập thì hiện icon người dùng, chưa thì hiện nút login/signup */}
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
                  <i
                    className="fa fa-user-circle"
                    style={{ fontSize: "22px", marginRight: "6px" }}
                  ></i>
                  Account
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                  {/* 💡 ĐÃ THÊM: Mục Payment */}
                  <Link className="dropdown-item" to="/payment">
                    Payment
                  </Link>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
