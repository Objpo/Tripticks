import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog2 = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const articlesPerPage = 3;

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8e68ca8c95414191a1ec2bead7aabf22")
            .then((res) => res.json())
            .then((data) => {
                setArticles(data.articles || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Lỗi khi gọi API:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center mt-5">Đang tải tin tức...</p>;
    }

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

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
                                    <Link to="/">
                                        Home <i className="fa fa-chevron-right"></i>
                                    </Link>
                                </span>{" "}
                                <span>
                                    Blog <i className="fa fa-chevron-right"></i>
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Blog</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="ftco-section bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">NEWS</h2>
                    <div className="row">
                        {currentArticles.map((article, idx) => (
                            <div className="col-md-4 mb-4" key={idx}>
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={article.urlToImage || "images/default.jpg"}
                                        className="card-img-top"
                                        alt="news"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{article.title}</h5>
                                        <p className="card-text">
                                            {article.description
                                                ? article.description.slice(0, 100) + "..."
                                                : ""}
                                        </p>
                                        <a
                                            href={article.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-primary"
                                        >
                                            Xem chi tiết
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <nav className="d-flex justify-content-center mt-4">
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button className="page-link" onClick={() => goToPage(currentPage - 1)}>
                                    &lt;
                                </button>
                            </li>

                            {Array.from({ length: totalPages }, (_, i) => (
                                <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                                    <button className="page-link" onClick={() => goToPage(i + 1)}>
                                        {i + 1}
                                    </button>
                                </li>
                            ))}

                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                <button className="page-link" onClick={() => goToPage(currentPage + 1)}>
                                    &gt;
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            {/* Intro Section */}
            <section className="ftco-intro ftco-section ftco-no-pt">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <div className="img" style={{ backgroundImage: "url(images/bg_2.jpg)" }}>
                                <div className="overlay"></div>
                                <h2>We Are Pacific A Travel Agency</h2>
                                <p>
                                    We can manage your dream building A small river named Duden flows
                                    by their place
                                </p>
                                <p className="mb-0">
                                    <Link to="/contact" className="btn btn-primary px-4 py-3">
                                        Ask For A Quote
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog2;
