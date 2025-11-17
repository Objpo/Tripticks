import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Destination = () => {
    const destinations = [
        { img: "destination-1.jpg", title: "Philippines", tours: "8 Tours" },
        { img: "destination-2.jpg", title: "Canada", tours: "2 Tours" },
        { img: "destination-3.jpg", title: "Thailand", tours: "5 Tours" },
        { img: "destination-4.jpg", title: "Australia", tours: "5 Tours" },
        { img: "destination-5.jpg", title: "Greece", tours: "7 Tours" },
    ];

    return (
        <section
            className="ftco-section img ftco-select-destination"
            style={{
                backgroundImage: "url('/images/bg_3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "80px 0",
            }}
            id="destination"
        >
            <div className="container">
                <div className="row justify-content-center pb-4">
                    <div className="col-md-12 heading-section text-center">
                        <span className="subheading">Pacific Provide Places</span>
                        <h2 className="mb-4">Select Your Destination</h2>
                    </div>
                </div>
            </div>

            <div className="container container-2">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500 }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {destinations.map((dest, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="project-destination"
                                style={{
                                    position: "relative",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                }}
                            >
                                <a
                                    href="#"
                                    className="img"
                                    style={{
                                        backgroundImage: `url('/images/${dest.img}')`,
                                        display: "block",
                                        height: "327px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div
                                        className="text"
                                        style={{
                                            position: "absolute",
                                            bottom: "0",
                                            left: "0",
                                            right: "0",
                                            background: "rgba(0, 0, 0, 0.4)",
                                            color: "#fff",
                                            textAlign: "center",
                                            padding: "15px 0",
                                        }}
                                    >
                                        <h3>{dest.title}</h3>
                                        <span>{dest.tours}</span>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Destination;
