import express from "express";
// 💡 IMPORT MODEL CHÍNH XÁC
import Tour from "../models/Tour.js";

const router = express.Router();

// -------------------------------------------------------------------
// LẤY TẤT CẢ CÁC TOUR/DESTINATION
// Endpoint: GET /api/tours
// -------------------------------------------------------------------
router.get("/tours", async (req, res, next) => {
    try {
        // Tìm tất cả Tour
        const tours = await Tour.find();

        if (!tours || tours.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy Tour nào." });
        }

        // Trả về dữ liệu
        res.status(200).json(tours);

    } catch (err) {
        console.error("Lỗi khi lấy danh sách Tour:", err.stack);
        next(err);
    }
});

// 💡 LƯU Ý: Frontend component Destination2.jsx gọi '/api/tours', 
// nên route trong file này phải là '/tours' khi được gắn vào '/api' trong server.js.

export default router;