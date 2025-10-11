import React from "react";

const Blog = () => {
    const blogs = [
        {
            id: 1,
            img: "image_1.jpg",
            day: "11",
            month: "September",
            year: "2020",
            title: "Most Popular Place In This World",
            link: "#",
        },
        {
            id: 2,
            img: "image_2.jpg",
            day: "11",
            month: "September",
            year: "2020",
            title: "Most Popular Place In This World",
            link: "#",
        },
        {
            id: 3,
            img: "image_3.jpg",
            day: "11",
            month: "September",
            year: "2020",
            title: "Most Popular Place In This World",
            link: "#",
        },
    ];

    return (
        <section className="ftco-section" id="blog">
            <div className="container">
                {/* Heading */}
                <div className="row justify-content-center pb-4">
                    <div className="col-md-12 heading-section text-center">
                        <span className="subheading">Our Blog</span>
                        <h2 className="mb-4">Recent Post</h2>
                    </div>
                </div>

                {/* Blog Items */}
                <div className="row d-flex">
                    {blogs.map((blog) => (
                        <div className="col-md-4 d-flex" key={blog.id}>
                            <div
                                className="blog-entry justify-content-end"
                                style={{
                                    background: "#fff",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                    transition: "transform 0.3s ease",
                                }}
                            >
                                {/* Image */}
                                <a
                                    href={blog.link}
                                    className="block-20"
                                    style={{
                                        backgroundImage: `url('/images/${blog.img}')`,
                                        display: "block",
                                        height: "250px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></a>

                                {/* Content */}
                                <div className="text p-4">
                                    <div className="d-flex align-items-center mb-4 topp">
                                        <div className="one text-center" style={{ marginRight: "10px" }}>
                                            <span
                                                className="day"
                                                style={{
                                                    fontSize: "30px",
                                                    fontWeight: "700",
                                                    color: "white",
                                                    lineHeight: "1",
                                                }}
                                            >
                                                {blog.day}
                                            </span>
                                        </div>
                                        <div className="two">
                                            <span className="yr" style={{ display: "block", fontWeight: "600" }}>
                                                {blog.year}
                                            </span>
                                            <span className="mos" style={{ color: "#999" }}>
                                                {blog.month}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="heading" style={{ fontSize: "20px", fontWeight: "700" }}>
                                        <a href={blog.link} style={{ color: "#000", textDecoration: "none" }}>
                                            {blog.title}
                                        </a>
                                    </h3>

                                    <p>
                                        <a href={blog.link} className="btn btn-primary mt-3">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
