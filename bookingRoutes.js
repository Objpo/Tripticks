import express from "express";
import TourBooking from "../models/TourBooking.js"; // 💡 Import model mới

const router = express.Router();

// -------------------------------------------------------------------
// TẠO BOOKING MỚI
// Endpoint: POST /api/bookings
// -------------------------------------------------------------------
router.post("/bookings", async (req, res, next) => {
    try {
        // 1. Lấy dữ liệu từ body của request (gửi từ frontend)
        const { name, email, tour, guests, date } = req.body;

        // 2. Kiểm tra dữ liệu cơ bản (Mongoose cũng sẽ validate)
        if (!name || !email || !tour || !date || !guests) {
            return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin bắt buộc." });
        }

        // 3. Tạo một booking mới dựa trên Model
        const newBooking = new TourBooking({
            name,
            email,
            tour,
            guests,
            date
        });

        // 4. Lưu vào database
        const savedBooking = await newBooking.save();

        // 5. Trả về thông báo thành công
        res.status(201).json({
            message: "Đặt tour thành công!",
            booking: savedBooking
        });

    } catch (err) {
        console.error("Lỗi khi tạo booking:", err.stack);
        // Báo lỗi validation nếu có
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: "Lỗi Validation", errors: err.errors });
        }
        next(err);
    }
});

export default router;