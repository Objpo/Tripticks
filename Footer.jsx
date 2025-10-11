import React from "react";

const Footer = () => {
    return (
        <footer
            className="ftco-footer bg-bottom ftco-no-pt"
            style={{
                backgroundImage: "url('/images/bg_3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container">
                <div className="row mb-5">
                    {/* About Section */}
                    <div className="col-md pt-5">
                        <div className="ftco-footer-widget pt-md-5 mb-4">
                            <h2 className="ftco-heading-2">About</h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <ul className="ftco-footer-social list-unstyled d-flex gap-3 mt-3">
                                <li>
                                    <a href="#">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-facebook"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-instagram"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Information */}
                    <div className="col-md pt-5 border-left">
                        <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                            <h2 className="ftco-heading-2">Information</h2>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className="py-2 d-block">
                                        Online Enquiry
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="py-2 d-block">
                                        General Enquiries
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="py-2 d-block">
                                        Booking Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="py-2 d-block">
                                        Privacy and Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="py-2 d-block">
                                        Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="py-2 d-block">
                                        Call Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="col-md pt-5 border-left">
                        <div className="ftco-footer-widget pt-md-5 mb-4">
                            <h2 className="ftco-heading-2">Experience</h2>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className="py-2 d-block">
                                        Adventure
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="py-2 d-block">
                                        Hotel and Restaurant
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="py-2 d-block">
                                        Beach
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="py-2 d-block">
                                        Nature
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="py-2 d-block">
                                        Camping
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="py-2 d-block">
                                        Party
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md pt-5 border-left">
                        <div className="ftco-footer-widget pt-md-5 mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li>
                                        <span className="icon fa fa-map-marker"></span>
                                        <span className="text ms-2">
                                            203 Fake St. Mountain View, San Francisco, California, USA
                                        </span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon fa fa-phone"></span>
                                            <span className="text ms-2">+2 392 3929 210</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon fa fa-paper-plane"></span>
                                            <span className="text ms-2">info@yourdomain.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
