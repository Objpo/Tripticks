import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    // Kích hoạt hiệu ứng khi scroll (nếu có dùng jQuery)
    if (window.$) {
      window.$(window).scroll(function () {
        const $win = window.$(this);
        const $navbar = window.$(".ftco_navbar");
        const st = $win.scrollTop();
        if (st > 150) {
          if (!$navbar.hasClass("scrolled")) {
            $navbar.addClass("scrolled");
          }
        } else {
          if ($navbar.hasClass("scrolled")) {
            $navbar.removeClass("scrolled sleep");
          }
        }
      });
    }
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          TripTicks<span>Travel</span>
        </a>
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
            <li className="nav-item active">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about.html" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#destination" className="nav-link">
                Destination
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                hotel
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  