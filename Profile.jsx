import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    FaUserCircle,
    FaEnvelope,
    FaIdBadge,
    FaSignOutAlt,
    FaPlaneDeparture,
} from "react-icons/fa";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError("Bạn chưa đăng nhập!");
                    return;
                }

                const res = await axios.get("http://localhost:5000/api/auth/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setUser(res.data);
            } catch (err) {
                console.error(err);
                setError(err.response?.data?.message || "Không thể tải thông tin người dùng!");
            }
        };

        fetchProfile();
    }, []);

    if (error)
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-200 to-emerald-200 text-center p-6">
                <h2 className="text-3xl font-bold text-red-600 mb-3">⚠️ {error}</h2>
                <a
                    href="/login"
                    className="text-white bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full shadow-lg transition"
                >
                    Đăng nhập lại
                </a>
            </div>
        );

    if (!user)
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-200 to-emerald-200 text-gray-700 text-lg">
                🌴 Đang tải thông tin du lịch...
            </div>
        );

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Nền biển du lịch */}
            <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Lớp mờ overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

            {/* Nội dung chính */}
            <div className="relative z-10 bg-white/90 rounded-3xl shadow-2xl p-8 w-96 text-center border border-sky-200 animate-fadeIn">
                <div className="flex flex-col items-center">
                    <FaPlaneDeparture className="text-5xl text-sky-600 mb-4" />
                    <h1 className="text-3xl font-extrabold text-sky-700 mb-2">
                        Thông tin cá nhân
                    </h1>
                    <p className="text-gray-600 mb-6 italic">
                        Chào mừng bạn đến với Pacific Travel Agency 🌴
                    </p>
                </div>

                {/* Thông tin */}
                <div className="text-left space-y-3 text-gray-700">
                    <p className="flex items-center gap-2">
                        <FaIdBadge className="text-sky-500" />
                        <span>
                            <strong>ID:</strong> {user._id}
                        </span>
                    </p>
                    <p className="flex items-center gap-2">
                        <FaUserCircle className="text-sky-500" />
                        <span>
                            <strong>Tên người dùng:</strong> {user.username}
                        </span>
                    </p>
                    <p className="flex items-center gap-2">
                        <FaEnvelope className="text-sky-500" />
                        <span>
                            <strong>Email:</strong> {user.email}
                        </span>
                    </p>
                </div>

                {/* Nút logout */}
                <button
                    onClick={() => {
                        localStorage.removeItem("token");
                        window.location.href = "/login";
                    }}
                    className="mt-8 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg transition"
                >
                    <FaSignOutAlt /> Đăng xuất
                </button>
            </div>
        </div>
    );
}
