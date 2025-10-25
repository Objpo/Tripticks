import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    FaUserCircle,
    FaEnvelope,
    FaIdBadge,
    FaSignOutAlt,
    FaPlaneDeparture,
} from "react-icons/fa";

export default function ProfileContent() { // Đã đổi tên thành ProfileContent
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

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
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-200 to-emerald-200 text-center ">
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
        // CONTAINER CĂN GIỮA TOÀN MÀN HÌNH (vẫn giữ nguyên để căn giữa khung profile)
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-sky-200 to-emerald-200">

            {/* 🎯 KHUNG PROFILE CHÍNH DUY NHẤT VỚI BACKGROUND IMAGE VÀ OPACITY */}
            <div
                className="relative rounded-3xl shadow-2xl p-8 w-full text-center border border-sky-200 overflow-hidden"
                style={{
                    maxWidth: 'absolute',
                    maxHeight: 'absolute',
                    // Background image cho khung profile
                    backgroundImage: 'url("https://wallpaperaccess.com/full/405435.jpg")', // Ảnh nền bạn cung cấp
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* LỚP PHỦ NỀN TRONG SUỐT VÀ MỜ (Overlay) */}
                <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm rounded-3xl z-0"></div>

                {/* Tất cả các thành phần nội dung cần có z-index cao hơn overlay (z-0)
                */}
                <div
                    className="cursor-pointer" // Thêm con trỏ để báo hiệu nó có thể click
                    onClick={() => {
                        window.location.href = 'http://localhost:5174/';
                    }}
                >
                    <h1 className="text-4xl font-extrabold text-white mb-4 flex items-center gap-2">
                        <FaPlaneDeparture className="animate-bounce text-yellow-300" />
                        {/* THÊM TIÊU ĐỀ NẾU CẦN, ví dụ: "Về Trang Chủ" */}
                    </h1>
                

                    <h1 className="text-3xl font-extrabold text-white mb-2">
                        Thông tin cá nhân
                    </h1>
                    <p className="text-gray-200 mb-6 italic">
                        
                    </p>
                </div>
                {/* Thông tin Chi tiết */}
                <div className="relative z-10 text-left space-y-4 text-white">
                    <p className="flex items-center gap-2">
                        <FaIdBadge className="text-sky-300" />
                        <span>
                            <strong className="font-semibold">ID:</strong> {user._id}
                        </span>
                    </p>
                    <p className="flex items-center gap-2">
                        <FaUserCircle className="text-sky-300" />
                        <span>
                            <strong className="font-semibold">Tên người dùng:</strong> {user.username}
                        </span>
                    </p>
                    <p className="flex items-center gap-2">
                        <FaEnvelope className="text-sky-300" />
                        <span>
                            <strong className="font-semibold">Email:</strong> {user.email}
                        </span>
                    </p>
                </div>

                {/* Nút logout */}
                <button
                    onClick={handleLogout}
                    className="relative z-10 mt-10 flex items-center justify-center gap-2 w-full
                               bg-red-500 hover:bg-red-600 text-black font-bold tracking-wide px-4 py-3 rounded-xl shadow-lg transition duration-300
                               transform hover:scale-[0.98]"
                >
                    <FaSignOutAlt /> Đăng xuất
                </button>
            </div>
        </div>
    );
}