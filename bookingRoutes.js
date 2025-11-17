import express from "express";
import TourBooking from "../models/TourBooking.js"; 

const router = express.Router();


router.post("/bookings", async (req, res, next) => {
    try {

        const { name, email, tour, guests, date } = req.body;


        if (!name || !email || !tour || !date || !guests) {
            return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin bắt buộc." });
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

       
        const newBooking = new TourBooking({
            name,
            email,
            tour,
            guests,
            date
        });

       
        const savedBooking = await newBooking.save();

       
        res.status(201).json({
            message: "Đặt tour thành công!",
            booking: savedBooking
        });

    } catch (err) {
        console.error("Không thể đặt phòng vào ngày trong quá khứ. Vui lòng chọn ngày hiện tại hoặc tương lai:", err.stack);
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: "Lỗi Validation", errors: err.errors });
        }
        next(err);
    }
});

export default router;