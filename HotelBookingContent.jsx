import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HotelBookingContent = () => {
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

    // --- State form (chuyên cho khách sạn) ---
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        room_data: "", // 💡 Sẽ lưu trữ JSON string của phòng được chọn
        guests: 1,
        date: ""
    });

    // --- State để lưu danh sách phòng từ API ---
    const [rooms, setRooms] = useState([]);

    // --- useEffect để fetch danh sách phòng ---
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                // 💡 Gọi API từ hotelRoutes.js
                const response = await fetch("/api/hotels");
                if (!response.ok) {
                    throw new Error("Không thể tải danh sách phòng");
                }
                const data = await response.json();
                setRooms(data); // Lưu dữ liệu phòng vào state
            } catch (error) {
                console.error("Lỗi khi fetch phòng:", error);
            }
        };

        fetchRooms();
    }, []); // Chỉ chạy 1 lần

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.date || !formData.room_data) {
            alert("Please fill all required fields, including selecting a room!");
            return;
        }

        // 💡 Sửa: Không gọi /api/hotel-bookings, gọi /api/payment/create_hotel_payment
        try {
            // (formData đã chứa: name, email, date, guests, room_data)
            const response = await fetch("/api/payment/create_hotel_payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Không thể tạo link thanh toán.");
            }

            // 💡 Thành công! Chuyển hướng người dùng đến VNPAY
            window.location.href = result.paymentUrl;

        } catch (error) {
            console.error("Lỗi khi tạo thanh toán:", error);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            {/* Hero Section (tương tự) */}
            <section
                className="hero-wrap hero-wrap-2 js-fullheight"
                style={{ backgroundImage: "url('images/bg_3.jpg')" }} // (Thay ảnh nền nếu muốn)
            >
                {/* ... (overlay và breadcrumbs) ... */}
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
                                <span>Hotel Booking <i className="fa fa-chevron-right"></i></span>
                            </p>
                            <h1 className="mb-0 bread">Book Your Room</h1>
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
                                <h2 className="mb-4 text-center">Book Your Hotel Room</h2>
                                <form className="contact-form" onSubmit={handleSubmit}>
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

                                    {/* 💡 DROPDOWN CHỌN PHÒNG (thay cho Tour và Hotel) */}
                                    <div className="form-group">
                                        <select
                                            className="form-control"
                                            name="room_data" // 💡 Tên state
                                            value={formData.room_data}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">-- Chọn Phòng Khách Sạn --</option>
                                            {rooms.map((room) => (
                                                <option
                                                    // 💡 Lưu cả object room thành string
                                                    key={room._id}
                                                    value={JSON.stringify(room)}
                                                >
                                                    {/* Hiển thị thông tin phòng. 
                                                        Lưu ý: hotelRoutes không trả về hotel_name.
                                                        Bạn nên cập nhật hotelRoutes để trả về hotel_name.
                                                        Tạm thời chúng ta dùng country.
                                                    */}
                                                    {room.room_name} ({room.country}) - ${room.price_per_night}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

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
                                            placeholder="Date" // (Label là Date)
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

export default HotelBookingContent;