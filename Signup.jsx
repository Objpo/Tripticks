import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (res.ok) {
                setSuccess("🎉 Đăng ký thành công! Chuyển sang đăng nhập...");
                setTimeout(() => navigate("/login"), 1500);
            } else {
                setError(data.message || "Đăng ký thất bại!");
            }
        } catch {
            setError("Không thể kết nối đến máy chủ!");
        }
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center vh-100"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="card p-4 shadow-lg"
                style={{
                    maxWidth: "400px",
                    width: "90%",
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "15px",
                }}
            >
                <h3 className="text-center mb-3">Tạo tài khoản</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label>Tên người dùng</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <div className="alert alert-success">{success}</div>}

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        style={{
                            background: "#007bff",
                            border: "none",
                            fontWeight: "bold",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                        }}
                    >
                        Đăng ký
                    </button>
                </form>

                <p className="mt-3 text-center">
                    Đã có tài khoản?{" "}
                    <Link to="/login" className="text-primary fw-bold">
                        Đăng nhập ngay
                    </Link>
                </p>
            </div>
        </div>
    );
}
