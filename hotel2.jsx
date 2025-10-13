import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Hotel2 = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/js/main.js";
        script.async = true;
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav
                className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                id="ftco-navbar"
            >
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Tripticks<span>Travel Agency</span>
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
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/destination" className="nav-link">
                                    Destination
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/hotel" className="nav-link">
                                    Hotel
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

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
                                    <Link to="/">
                                        Home <i className="fa fa-chevron-right"></i>
                                    </Link>
                                </span>{" "}
                                <span>
                                    Hotel <i className="fa fa-chevron-right"></i>
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Hotel</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search Bar */}
            <section className="ftco-section ftco-no-pb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="search-wrap-1 ftco-animate">
                                <form action="#" className="search-property-1">
                                    <div className="row no-gutters">
                                        <div className="col-lg d-flex">
                                            <div className="form-group p-4 border-0">
                                                <label>Destination</label>
                                                <div className="form-field">
                                                    <div className="icon">
                                                        <span className="fa fa-search"></span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search place"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg d-flex">
                                            <div className="form-group p-4">
                                                <label>Check-in date</label>
                                                <div className="form-field">
                                                    <div className="icon">
                                                        <span className="fa fa-calendar"></span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control checkin_date"
                                                        placeholder="Check In Date"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg d-flex">
                                            <div className="form-group p-4">
                                                <label>Check-out date</label>
                                                <div className="form-field">
                                                    <div className="icon">
                                                        <span className="fa fa-calendar"></span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control checkout_date"
                                                        placeholder="Check Out Date"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg d-flex">
                                            <div className="form-group p-4">
                                                <label>Price Limit</label>
                                                <div className="form-field">
                                                    <div className="select-wrap">
                                                        <div className="icon">
                                                            <span className="fa fa-chevron-down"></span>
                                                        </div>
                                                        <select className="form-control">
                                                            <option>$5,000</option>
                                                            <option>$10,000</option>
                                                            <option>$50,000</option>
                                                            <option>$100,000</option>
                                                            <option>$200,000</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg d-flex">
                                            <div className="form-group d-flex w-100 border-0">
                                                <div className="form-field w-100 align-items-center d-flex">
                                                    <input
                                                        type="submit"
                                                        value="Search"
                                                        className="align-self-stretch form-control btn btn-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hotel List */}
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                            <div className="col-md-4 ftco-animate" key={i}>
                                <div className="project-wrap hotel">
                                    <a
                                        href="#"
                                        className="img"
                                        style={{
                                            backgroundImage: `url(images/hotel-resto-${i}.jpg)`,
                                        }}
                                    >
                                        <span className="price">$200/person</span>
                                    </a>
                                    <div className="text p-4">
                                        <p className="star mb-2">
                                            {[...Array(5)].map((_, j) => (
                                                <span key={j} className="fa fa-star"></span>
                                            ))}
                                        </p>
                                        <span className="days">7 Days Tour</span>
                                        <h3>
                                            <a href="#">Manila Hotel</a>
                                        </h3>
                                        <p className="location">
                                            <span className="fa fa-map-marker"></span> Manila,
                                            Philippines
                                        </p>
                                        <ul>
                                            <li>
                                                <span className="flaticon-shower"></span>2
                                            </li>
                                            <li>
                                                <span className="flaticon-king-size"></span>3
                                            </li>
                                            <li>
                                                <span className="flaticon-sun-umbrella"></span>Near Beach
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hotel2;
