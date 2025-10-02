import { useState } from "react";

export default function App() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", href: "index.html" },
        { name: "About", href: "about.html" },
        { name: "Destination", href: "destination.html" },
        { name: "Hotel", href: "hotel.html" },
        { name: "Blog", href: "blog.html" },
        { name: "Contact", href: "contact.html" },
    ];

    const services = [
        { title: "Best Destinations", desc: "Explore the most beautiful places." },
        { title: "Affordable Prices", desc: "Travel without breaking the bank." },
        { title: "24/7 Support", desc: "We’re here whenever you need us." },
    ];

    const destinations = [
        { name: "Paris", img: "/images/destination-1.jpg" },
        { name: "Tokyo", img: "/images/destination-2.jpg" },
        { name: "Bali", img: "/images/destination-3.jpg" },
    ];

    const blogs = [
        { title: "Top 10 Destinations", img: "/images/blog-1.jpg" },
        { title: "Travel Tips 2025", img: "/images/blog-2.jpg" },
        { title: "Best Food Abroad", img: "/images/blog-3.jpg" },
    ];

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        Tripticks <span>Travel Agency</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-controls="ftco-nav"
                        aria-expanded={open}
                        aria-label="Toggle navigation"
                    >
                        <span className="oi oi-menu"></span> Menu
                    </button>
                    <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            {links.map((link, i) => (
                                <li key={i} className={`nav-item ${i === 0 ? "active" : ""}`}>
                                    <a href={link.href} className="nav-link">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section
                className="hero-wrap js-fullheight"
                style={{ backgroundImage: "url('/images/bg_5.jpg')" }}
            >
                <div className="overlay"></div>
                <div
                    className="container text-center text-white d-flex align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                    <div>
                        <h1 className="mb-4">Discover Amazing Places</h1>
                        <p>Find your next adventure with us</p>
                    </div>
                </div>
            </section>

            {/* Search Form */}
            <section className="ftco-section ftco-search">
                <div className="container">
                    <form className="search-property-1 p-4 rounded bg-white shadow">
                        <div className="row">
                            <div className="col-md-3">
                                <input className="form-control" placeholder="Destination" />
                            </div>
                            <div className="col-md-3">
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" placeholder="Guests" />
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-primary btn-block">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {/* Services */}
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        {services.map((s, i) => (
                            <div key={i} className="col-md-4 text-center mb-4">
                                <div className="p-4 bg-white rounded shadow">
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destinations */}
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        {destinations.map((d, i) => (
                            <div key={i} className="col-md-4 mb-4">
                                <div
                                    className="destination rounded overflow-hidden shadow"
                                    style={{
                                        backgroundImage: `url(${d.img})`,
                                        height: "300px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="overlay d-flex align-items-center justify-content-center text-white">
                                        <h3>{d.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog */}
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        {blogs.map((b, i) => (
                            <div key={i} className="col-md-4 mb-4">
                                <div className="card shadow">
                                    <img src={b.img} className="card-img-top" alt={b.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{b.title}</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet...</p>
                                        <a href="#" className="btn btn-primary">
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4">
                <p>© 2025 Tripticks. All rights reserved.</p>
            </footer>
        </>
    );
}
