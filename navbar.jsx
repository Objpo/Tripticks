import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Hiệu ứng đổi nền khi cuộn
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kiểm tra đường dẫn hiện tại
  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav
      className={`navbar navbar-expand-lg ftco_navbar ftco-navbar-light ${scrolled ? "scrolled" : ""
        }`}
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={`nav-item ${isActive("/about")}`}>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className={`nav-item ${isActive("/destination")}`}>
              <Link to="/destination" className="nav-link">
                Destination
              </Link>
            </li>
            <li className={`nav-item ${isActive("/hotel")}`}>
              <Link to="/hotel" className="nav-link">
                Hotel
              </Link>
            </li>
            <li className={`nav-item ${isActive("/blog")}`}>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className={`nav-item ${isActive("/contact")}`}>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
