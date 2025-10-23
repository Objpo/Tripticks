import express from "express";
import HotelBooking from "../models/HotelBooking.js";

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

        // 💡 BỔ SUNG: KIỂM TRA NGÀY ĐẶT PHÒNG KHÔNG PHẢI NGÀY QUÁ KHỨ
        const bookingDate = new Date(date);
        const currentDate = new Date();

        // Chuẩn hóa: Đặt giờ, phút, giây, mili giây về 0 để chỉ so sánh ngày
        bookingDate.setHours(0, 0, 0, 0);
        currentDate.setHours(0, 0, 0, 0);

        if (bookingDate < currentDate) {
            return res.status(400).json({
                message: "Không thể đặt phòng vào ngày trong quá khứ. Vui lòng chọn ngày hiện tại hoặc tương lai.",
                field: "date"
            });
        }
        // -----------------------------------------------------------

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
        // *Lưu ý: Mongoose Validator (trong Model) sẽ chạy ở đây nếu ngày không hợp lệ*
        const savedBooking = await newBooking.save();

        // 5. Trả về thành công
        res.status(201).json({
            message: "Đặt phòng thành công!",
            booking: savedBooking
        });

    } catch (err) {
        console.error("Lỗi khi tạo hotel booking:", err.stack);
        // Xử lý lỗi validation từ Mongoose Model (bao gồm cả validator ngày tháng)
        if (err.name === 'ValidationError') {
            return res.status(400).json({
                message: "Thông tin đặt phòng không hợp lệ.",
                errors: err.errors
            });
        }
        next(err);
    }
});

export default router;