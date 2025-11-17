import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const SearchSection = () => {
  
    const navigate = useNavigate();

    useEffect(() => {
        const $ = window.$ || window.jQuery;
        if ($) {
           
            if ($.fn && $.fn.datepicker) {
                $(".checkin_date").datepicker({ autoclose: true });
                $(".checkout_date").datepicker({ autoclose: true });
            }
           
            if ($.fn && $.fn.timepicker) {
                $(".time_picker").timepicker();
            }
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);
        const obj = Object.fromEntries(data.entries());

        console.log("Search submitted:", obj);

       
        const destination = obj.hotel_destination || "";
        const checkin = obj.hotel_checkin || "";
        const checkout = obj.hotel_checkout || "";
        const price = obj.hotel_price || ""; 

       
        const queryParams = new URLSearchParams();
        if (destination) queryParams.append("destination", destination);
        if (checkin) queryParams.append("checkin", checkin);
        if (checkout) queryParams.append("checkout", checkout);
        if (price) queryParams.append("price", price);

        const queryString = queryParams.toString();

    
        navigate(`/hotels?${queryString}`);
    
    };

    return (
        <section className="ftco-section ftco-no-pb ftco-no-pt">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ftco-search d-flex justify-content-center">
                            <div className="row">
                                <div className="col-md-12 nav-link-wrap">
                                    <div
                                        className="nav nav-pills text-center"
                                        id="v-pills-tab"
                                        role="tablist"
                                        aria-orientation="vertical"
                                    >
                                     
                                        <a
                                            className="nav-link active" 
                                            id="v-pills-2-tab"
                                            data-toggle="pill"
                                            href="#v-pills-2"
                                            role="tab"
                                            aria-controls="v-pills-2"
                                            aria-selected="true"
                                        >
                                            Hotel
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-12 tab-wrap">
                                    <div className="tab-content" id="v-pills-tabContent">
                                  
                                        <div
                                            className="tab-pane fade show active"
                                            id="v-pills-2"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-performance-tab"
                                        >
                                           
                                            <form className="search-property-1" onSubmit={handleSubmit}>
                                                <div className="row no-gutters">
                                                    
                                                    <div className="col-lg d-flex">
                                                        <div className="form-group p-4 border-0">
                                                            <label>Destination</label>
                                                            <div className="form-field">
                                                                <div className="icon">
                                                                    <span className="fa fa-search" />
                                                                </div>
                                                                <input
                                                                    name="hotel_destination"
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
                                                                    <span className="fa fa-calendar" />
                                                                </div>
                                                                <input
                                                                    name="hotel_checkin"
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
                                                                    <span className="fa fa-calendar" />
                                                                </div>
                                                                <input
                                                                    name="hotel_checkout"
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
                                                                        <span className="fa fa-chevron-down" />
                                                                    </div>
                                                                    <select name="hotel_price" className="form-control">
                                                                        <option value="">$100</option>
                                                                        <option value="10000">$10,000</option>
                                                                        <option value="50000">$50,000</option>
                                                                        <option value="100000">$100,000</option>
                                                                        <option value="200000">$200,000</option>
                                                                        <option value="300000">$300,000</option>
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
                                                                    className="align-self-stretch form-control btn btn-primary p-0"
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;