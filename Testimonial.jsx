import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        img: "person_1.jpg",
        name: "Roger Scott",
        position: "Marketing Manager",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        img: "person_2.jpg",
        name: "Roger Scott",
        position: "Marketing Manager",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        img: "person_3.jpg",
        name: "Roger Scott",
        position: "Marketing Manager",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        img: "person_1.jpg",
        name: "Roger Scott",
        position: "Marketing Manager",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        img: "person_2.jpg",
        name: "Roger Scott",
        position: "Marketing Manager",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
];

const Testimonial = () => {
    return (
        <section
            className="ftco-section testimony-section bg-bottom"
            id="testimonial"
            style={{
                backgroundImage: "url('/images/bg_1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                padding: "100px 0",
            }}
        >
            {/* Overlay */}
            <div
                className="overlay"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 1,
                }}
            ></div>

            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="row justify-content-center pb-4">
                    <div className="col-md-7 text-center heading-section heading-section-white">
                        <span className="subheading text-warning">Testimonial</span>
                        <h2 className="mb-4 text-white">Tourist Feedback</h2>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="testimony-wrap py-4"
                                style={{
                                    background: "rgba(255, 255, 255, 0.1)",
                                    borderRadius: "10px",
                                    padding: "30px",
                                    color: "#fff",
                                    marginBottom: "20px",
                                    backdropFilter: "blur(5px)",
                                }}
                            >
                                <div className="text">
                                    <p className="star" style={{ color: "#FFD700", marginBottom: "10px" }}>
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="fa fa-star"></span>
                                        ))}
                                    </p>
                                    <p className="mb-4" style={{ fontStyle: "italic" }}>
                                        {item.text}
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="user-img"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "50%",
                                                backgroundImage: `url('/images/${item.img}')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                marginRight: "15px",
                                            }}
                                        ></div>
                                        <div>
                                            <p className="name" style={{ fontWeight: "bold", margin: 0 }}>
                                                {item.name}
                                            </p>
                                            <span className="position" style={{ fontSize: "14px", opacity: 0.8 }}>
                                                {item.position}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
