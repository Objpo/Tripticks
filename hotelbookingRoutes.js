import express from "express";
import HotelBooking from "../models/HotelBooking.js";

const router = express.Router();


// -------------------------------------------------------------------
router.post("/hotel-bookings", async (req, res, next) => {
    try {
       
        const { name, email, guests, date, room_name, hotel_id } = req.body;

       
        if (!name || !email || !guests || !date || !room_name || !hotel_id) {
            return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin đặt phòng." });
        }

        
        const bookingDate = new Date(date);
        const currentDate = new Date();

        bookingDate.setHours(0, 0, 0, 0);
        currentDate.setHours(0, 0, 0, 0);

        if (bookingDate < currentDate) {
            return res.status(400).json({
                message: "Không thể đặt phòng vào ngày trong quá khứ. Vui lòng chọn ngày hiện tại hoặc tương lai.",
                field: "date"
            });
        }
    
        const newBooking = new HotelBooking({
            name,
            email,
            guests,
            date,
            room_name,
            hotel_id
        });


        const savedBooking = await newBooking.save();

       
        res.status(201).json({
            message: "Đặt phòng thành công!",
            booking: savedBooking
        });

    } catch (err) {
        console.error("Lỗi khi tạo hotel booking:", err.stack);
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