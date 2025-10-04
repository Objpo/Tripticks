import React, { useEffect, useState } from "react";

function BlogSection() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Dùng NewsAPI demo (cần đăng ký free key ở https://newsapi.org)
        fetch(
            `https://newsapi.org/v2/everything?q=apple&from=2025-10-03&to=2025-10-03&sortBy=popularity&apiKey=8e68ca8c95414191a1ec2bead7aabf22`
        )
            .then((res) => res.json())
            .then((data) => {
                setArticles(data.articles || []);
            })
            .catch((err) => console.error("API error:", err));
    }, []);

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center pb-4">
                    <div className="col-md-12 heading-section text-center">
                        <span className="subheading">Our Blog</span>
                        <h2 className="mb-4">Recent Posts</h2>
                    </div>
                </div>
                <div className="row d-flex">
                    {articles.length === 0 ? (
                        <p>Loading...</p>
                    ) : (
                        articles.map((article, index) => (
                            <div className="col-md-4 d-flex" key={index}>
                                <div className="blog-entry">
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block-20"
                                        style={{
                                            backgroundImage: `url(${article.urlToImage || "images/default.jpg"})`,
                                            height: "250px",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            borderRadius: "10px",
                                        }}
                                    ></a>
                                    <div className="text">
                                        <div className="d-flex align-items-center mb-4 topp">
                                            <div className="one">
                                                <span className="day">
                                                    {new Date(article.publishedAt).getDate()}
                                                </span>
                                            </div>
                                            <div className="two">
                                                <span className="yr">
                                                    {new Date(article.publishedAt).getFullYear()}
                                                </span>
                                                <span className="mos">
                                                    {new Date(article.publishedAt).toLocaleString("en-US", {
                                                        month: "long",
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="heading">
                                            <a
                                                href={article.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {article.title}
                                            </a>
                                        </h3>
                                        <p>
                                            <a
                                                href={article.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary"
                                            >
                                                Read more
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default BlogSection;
