import express from "express";
import HotelBooking from "../models/HotelBooking.js"; // 💡 Import model booking mới

const router = express.Router();

// -------------------------------------------------------------------
// TẠO BOOKING KHÁCH SẠN MỚI
// Endpoint: POST /api/hotel-bookings
// -------------------------------------------------------------------
router.post("/hotel-bookings", async (req, res, next) => {
    try {
        // 1. Lấy dữ liệu từ body (frontend gửi lên)
        const { name, email, guests, date, room_name, hotel_id } = req.body;

        // 2. Kiểm tra dữ liệu
        if (!name || !email || !guests || !date || !room_name || !hotel_id) {
            return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin đặt phòng." });
        }

        // 3. Tạo booking mới
        const newBooking = new HotelBooking({
            name,
            email,
            guests,
            date,
            room_name,
            hotel_id
        });

        // 4. Lưu vào database (collection 'hotel_bookings')
        const savedBooking = await newBooking.save();

        // 5. Trả về thành công
        res.status(201).json({ 
            message: "Đặt phòng thành công!", 
            booking: savedBooking 
        });

    } catch (err) {
        console.error("Lỗi khi tạo hotel booking:", err.stack);
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: "Lỗi Validation", errors: err.errors });
        }
        next(err);
    }
});

export default router;