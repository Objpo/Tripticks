import React from "react";

const servicesData = [
    {
        img: "services-1.jpg",
        icon: "flaticon-paragliding",
        title: "Activities",
        desc: "A small river named Duden flows by their place and supplies it with the necessary",
        color: "color-1",
    },
    {
        img: "services-2.jpg",
        icon: "flaticon-route",
        title: "Travel Arrangements",
        desc: "A small river named Duden flows by their place and supplies it with the necessary",
        color: "color-2",
    },
    {
        img: "services-3.jpg",
        icon: "flaticon-tour-guide",
        title: "Private Guide",
        desc: "A small river named Duden flows by their place and supplies it with the necessary",
        color: "color-3",
    },
    {
        img: "services-4.jpg",
        icon: "flaticon-map",
        title: "Location Manager",
        desc: "A small river named Duden flows by their place and supplies it with the necessary",
        color: "color-4",
    },
];

const Services = () => {
    return (
        <section className="ftco-section services-section">
            <div className="container">
                <div className="row d-flex">
                    {/* Text content */}
                    <div className="col-md-6 order-md-last heading-section pl-md-5 d-flex align-items-center">
                        <div className="w-100">
                            <span className="subheading">Welcome to Pacific</span>
                            <h2 className="mb-4">It's time to start your adventure</h2>
                            <p>
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia. It is a paradisematic country, in which roasted
                                parts of sentences fly into your mouth.
                            </p>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated they
                                live in Bookmarksgrove right at the coast of the Semantics, a large
                                language ocean.
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary py-3 px-4">
                                    Search Destination
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Service cards */}
                    <div className="col-md-6">
                        <div className="row">
                            {servicesData.map((service, index) => (
                                <div
                                    className="col-md-12 col-lg-6 d-flex align-self-stretch"
                                    key={index}
                                >
                                    <div
                                        className={`services services-1 ${service.color} d-block img`}
                                        style={{
                                            backgroundImage: `url('/images/${service.img}')`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className={service.icon}></span>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="heading mb-3">{service.title}</h3>
                                            <p>{service.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
