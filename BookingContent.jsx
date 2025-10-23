import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BookingContent = () => {
    // --- AOS khởi tạo ---
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
        });

        const script = document.createElement("script");
        script.src = "/js/main.js";
        script.async = true;
        document.body.appendChild(script);

        return () => document.body.removeChild(script);
    }, []);

    // --- State form ---
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tour: "", // 💡 State này sẽ lưu tour_name được chọn
        guests: 1,
        date: ""
    });

    // 💡 State mới để lưu danh sách tour từ API
    const [tours, setTours] = useState([]);

    // 💡 useEffect mới để fetch danh sách tour
    useEffect(() => {
        const fetchTours = async () => {
            try {
                // Gọi API endpoint từ tourRoutes.js
                const response = await fetch("/api/tours");
                if (!response.ok) {
                    throw new Error("Không thể tải danh sách tour");
                }
                const data = await response.json();
                setTours(data); // Lưu dữ liệu vào state
            } catch (error) {
                console.error("Lỗi khi fetch tour:", error);
            }
        };

        fetchTours();
    }, []); // Mảng rỗng đảm bảo chỉ chạy 1 lần khi component mount

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // ... (bên trên vẫn giữ nguyên)

    const handleSubmit = async (e) => { // 💡 1. Thêm "async"
        e.preventDefault();

        // Kiểm tra validation vẫn giữ nguyên
        if (!formData.name || !formData.email || !formData.date || !formData.tour) {
            alert("Please fill all required fields, including selecting a tour!");
            return;
        }

        // 💡 2. Gửi dữ liệu đến backend
        try {
            const response = await fetch("/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // Gửi state của form đi
            });

            const result = await response.json();

            if (!response.ok) {
                // Nếu server trả về lỗi (vd: 400, 500)
                throw new Error(result.message || "Không thể gửi booking.");
            }

            // 💡 3. Thành công!
            console.log("Booking data saved:", result);
            alert("Booking submitted successfully!"); // Thay thông báo cũ

            // 4. Reset form (giữ nguyên)
            setFormData({
                name: "",
                email: "",
                tour: "",
                guests: 1,
                date: ""
            });

        } catch (error) {
            // 💡 5. Xử lý lỗi
            console.error("Lỗi khi submit booking:", error);
            alert(`Error: ${error.message}`);
        }
    };
    return (
        <div>
            {/* Hero Section */}
            <section
                className="hero-wrap hero-wrap-2 js-fullheight"
                style={{ backgroundImage: "url('images/bg_2.jpg')" }}
            >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                        <div
                            className="col-md-9 ftco-animate pb-5 text-center"
                            data-aos="fade-up"
                        >
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                    <Link to="/">
                                        Home <i className="fa fa-chevron-right"></i>
                                    </Link>
                                </span>{" "}
                                <span>Booking <i className="fa fa-chevron-right"></i></span>
                            </p>
                            <h1 className="mb-0 bread">Book Your Trip</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <section className="ftco-section bg-light" style={{ color: "black" }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 ftco-animate" data-aos="fade-up">
                            <div className="bg-white p-5 rounded shadow">
                                <h2 className="mb-4 text-center">Book Your Tour</h2>
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    {/* ... các trường Name và Email ... */}
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* 💡 THAY THẾ INPUT BẰNG SELECT (DROPDOWN) */}
                                    <div className="form-group">
                                        <select
                                            className="form-control"
                                            name="tour"
                                            value={formData.tour}
                                            onChange={handleChange}
                                            required // 💡 Thêm required
                                        >
                                            <option value="">-- Chọn Tour --</option>
                                            {tours.map((tour) => (
                                                <option key={tour.tour_id || tour._id} value={tour.tour_name}>
                                                    {/* Hiển thị tên tour và quốc gia từ model Tour.js */}
                                                    {tour.tour_name} ({tour.country})
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* ... các trường còn lại ... */}
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Number of Guests"
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            min="1"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group text-center">
                                        <input
                                            type="submit"
                                            value="Book Now"
                                            className="btn btn-primary py-3 px-5"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookingContent;