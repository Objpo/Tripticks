import React, { useEffect } from "react";

const Destination2 = () => {
    useEffect(() => {
        // Load các script cần thiết (Bootstrap, jQuery, v.v.)
        const script = document.createElement("script");
        script.src = "/js/main.js"; // file JS gốc
        script.async = true;
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    const destinations = [
        { id: 1, img: "images/destination-1.jpg", days: "8 Days Tour", price: "$550/person", location: "Banaue, Ifugao, Philippines" },
        { id: 2, img: "images/destination-2.jpg", days: "10 Days Tour", price: "$550/person", location: "Banaue, Ifugao, Philippines" },
        { id: 3, img: "images/destination-3.jpg", days: "7 Days Tour", price: "$550/person", location: "Banaue, Ifugao, Philippines" },
        { id: 4, img: "images/destination-4.jpg", days: "8 Days Tour", price: "$550/person", location: "Banaue, Ifugao, Philippines" },
        { id: 5, img: "images/destination-5.jpg", days: "10 Days Tour", price: "$550/person", location: "Banaue, Ifugao, Philippines" },
        { id: 6, img: "images/destination-6.jpg", days: "7 Days Tour", price: "$550/person", location: "Banaue, Ifugao, Philippines" },
        { id: 7, img: "images/destination-7.jpg", days: "7 Days Tour", price: "$550/person", location: "Banaue, Ifugao, Philippines" },
        { id: 8, img: "images/destination-8.jpg", days: "7 Days Tour", price: "$550/person", location: "Banaue, Ifugao, Philippines" },
        { id: 9, img: "images/destination-9.jpg", days: "7 Days Tour", price: "$550/person", location: "Banaue, Ifugao, Philippines" },
    ];

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
                                    <a href="index.html">Home <i className="fa fa-chevron-right"></i></a>
                                </span>{" "}
                                <span>Tour List <i className="fa fa-chevron-right"></i></span>
                            </p>
                            <h1 className="mb-0 bread">Tours List</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search Form */}
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
                                                    <div className="icon"><span className="fa fa-search"></span></div>
                                                    <input type="text" className="form-control" placeholder="Search place" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg d-flex">
                                            <div className="form-group p-4">
                                                <label>Check-in date</label>
                                                <div className="form-field">
                                                    <div className="icon"><span className="fa fa-calendar"></span></div>
                                                    <input type="text" className="form-control checkin_date" placeholder="Check In Date" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg d-flex">
                                            <div className="form-group p-4">
                                                <label>Check-out date</label>
                                                <div className="form-field">
                                                    <div className="icon"><span className="fa fa-calendar"></span></div>
                                                    <input type="text" className="form-control checkout_date" placeholder="Check Out Date" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg d-flex">
                                            <div className="form-group p-4">
                                                <label>Price Limit</label>
                                                <div className="form-field">
                                                    <div className="select-wrap">
                                                        <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                        <select className="form-control">
                                                            {["$5,000", "$10,000", "$50,000", "$100,000", "$200,000", "$300,000", "$400,000", "$500,000", "$1,000,000", "$2,000,000"].map((p, i) => (
                                                                <option key={i}>{p}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg d-flex">
                                            <div className="form-group d-flex w-100 border-0">
                                                <div className="form-field w-100 align-items-center d-flex">
                                                    <input type="submit" value="Search" className="align-self-stretch form-control btn btn-primary" />
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

            {/* Destination List */}
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        {destinations.map((d) => (
                            <div className="col-md-4 ftco-animate" key={d.id}>
                                <div className="project-wrap">
                                    <a href="#" className="img" style={{ backgroundImage: `url(${d.img})` }}>
                                        <span className="price">{d.price}</span>
                                    </a>
                                    <div className="text p-4">
                                        <span className="days">{d.days}</span>
                                        <h3><a href="#">Banaue Rice Terraces</a></h3>
                                        <p className="location"><span className="fa fa-map-marker"></span> {d.location}</p>
                                        <ul>
                                            <li><span className="flaticon-shower"></span>2</li>
                                            <li><span className="flaticon-king-size"></span>3</li>
                                            <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="block-27">
                                <ul>
                                    <li><a href="#">&lt;</a></li>
                                    <li className="active"><span>1</span></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">&gt;</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Destination2;
