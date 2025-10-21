import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Product = () => {
    const products = [
        {
            img: "destination-1.jpg",
            price: "$550/person",
            days: "8 Days Tour",
            title: "Banaue Rice Terraces",
            location: "Banaue, Ifugao, Philippines",
            icons: [
                { icon: "flaticon-shower", text: "2" },
                { icon: "flaticon-king-size", text: "3" },
                { icon: "flaticon-mountains", text: "Near Mountain" },
            ],
        },
        {
            img: "destination-2.jpg",
            price: "$550/person",
            days: "10 Days Tour",
            title: "Boracay Island",
            location: "Aklan, Philippines",
            icons: [
                { icon: "flaticon-shower", text: "2" },
                { icon: "flaticon-king-size", text: "3" },
                { icon: "flaticon-sun-umbrella", text: "Near Beach" },
            ],
        },
        {
            img: "destination-3.jpg",
            price: "$550/person",
            days: "7 Days Tour",
            title: "El Nido Palawan",
            location: "Palawan, Philippines",
            icons: [
                { icon: "flaticon-shower", text: "2" },
                { icon: "flaticon-king-size", text: "3" },
                { icon: "flaticon-sun-umbrella", text: "Near Beach" },
            ],
        },
        {
            img: "destination-4.jpg",
            price: "$550/person",
            days: "8 Days Tour",
            title: "Chocolate Hills",
            location: "Bohol, Philippines",
            icons: [
                { icon: "flaticon-shower", text: "2" },
                { icon: "flaticon-king-size", text: "3" },
                { icon: "flaticon-sun-umbrella", text: "Near Beach" },
            ],
        },
        {
            img: "destination-5.jpg",
            price: "$550/person",
            days: "10 Days Tour",
            title: "Coron Island",
            location: "Palawan, Philippines",
            icons: [
                { icon: "flaticon-shower", text: "2" },
                { icon: "flaticon-king-size", text: "3" },
                { icon: "flaticon-sun-umbrella", text: "Near Beach" },
            ],
        },
        {
            img: "destination-6.jpg",
            price: "$550/person",
            days: "7 Days Tour",
            title: "Siargao Island",
            location: "Surigao del Norte, Philippines",
            icons: [
                { icon: "flaticon-shower", text: "2" },
                { icon: "flaticon-king-size", text: "3" },
                { icon: "flaticon-sun-umbrella", text: "Near Beach" },
            ],
        },
    ];

    return (
        <section className="ftco-section" id="product">
            <div className="container">
                <div className="row justify-content-center pb-4">
                    <div className="col-md-12 heading-section text-center">
                        <span className="subheading">Destination</span>
                        <h2 className="mb-4">Tour Destination</h2>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {products.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="project-wrap" style={{ borderRadius: "10px", overflow: "hidden" }}>
                                <a
                                    href="#"
                                    className="img"
                                    style={{
                                        backgroundImage: `url('/images/${item.img}')`,
                                        display: "block",
                                        height: "300px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        position: "relative",
                                    }}
                                >
                                    <span
                                        className="price"
                                        style={{
                                            position: "absolute",
                                            bottom: "12px",
                                            right: "12px",
                                            background: "transparent",
                                            color: "#fff",
                                            padding: "3px 8px",
                                            fontSize: "35px",
                                            fontWeight: "500",
                                            borderRadius: "4px",
                                            opacity: 0.9,
                                            letterSpacing: "0.3px",
                                        }}
                                    >
                                        {item.price}
                                    </span>

                                </a>
                                <div className="text p-4">
                                    <span className="days">{item.days}</span>
                                    <h3>
                                        <a href="#">{item.title}</a>
                                    </h3>
                                    <p className="location">
                                        <span className="fa fa-map-marker"></span> {item.location}
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-between mt-3">
                                        {item.icons.map((ic, i) => (
                                            <li key={i}>
                                                <span className={ic.icon}></span> {ic.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Product;
