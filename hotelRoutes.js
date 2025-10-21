import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// -------------------------------------------------------------------
// 1. LẤY TẤT CẢ CÁC PHÒNG (ĐÃ "LÀM GIÀU" DATA)
// -------------------------------------------------------------------
router.get("/hotels", async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        if (!hotels || hotels.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy khách sạn nào." });
        }

        // Biến đổi dữ liệu: Gắn thông tin của khách sạn mẹ vào từng phòng
        const allRooms = hotels.flatMap(hotel => {
            // Lấy thông tin chung của khách sạn
            const hotelInfo = {
                hotel_id: hotel._id,
                country: hotel.country,
                hotel_img: hotel.img,
                // 💡 ĐÃ THÊM: hotel_name cho Route 1
                hotel_name: hotel.hotel_name
            };
            // Map qua mảng 'rooms' của khách sạn này
            return hotel.rooms.map(room => {
                const roomObject = room.toObject ? room.toObject() : { ...room };
                // Gộp thông tin phòng và thông tin khách sạn lại
                return {
                    ...roomObject,
                    ...hotelInfo
                };
            });
        });

        res.json(allRooms); // Gửi mảng phòng đã được "làm giàu" thông tin

    } catch (err) {
        console.error("Lỗi khi lấy danh sách khách sạn:", err.stack);
        next(err); // Chuyển lỗi cho middleware xử lý
    }
});

// -------------------------------------------------------------------
// 2. LẤY CHI TIẾT MỘT KHÁCH SẠN (THEO ID KHÁCH SẠN)
// (Route này phải đặt TRƯỚC route /country/:country)
// -------------------------------------------------------------------
router.get("/hotels/:id", async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: "Không tìm thấy khách sạn." });
        }
        res.status(200).json(hotel); // Trả về toàn bộ object khách sạn
    } catch (err) {
        next(err);
    }
});

// -------------------------------------------------------------------
// 3. LẤY CÁC PHÒNG THEO QUỐC GIA (ĐÃ SỬA LỖI LOGIC)
// -------------------------------------------------------------------
router.get("/hotels/country/:country", async (req, res, next) => {
    try {
        const countryName = req.params.country;
        const hotels = await Hotel.find({ country: new RegExp(countryName, "i") });

        console.log(`Dữ liệu thô từ Hotel.find() cho ${countryName}:`, hotels);

        if (!hotels || hotels.length === 0) {
            return res.status(404).json({ message: `Không tìm thấy khách sạn nào ở ${countryName}.` });
        }

        // ĐÃ CÓ: ÁP DỤNG LOGIC "LÀM GIÀU" DATA Y HỆT NHƯ ROUTE /hotels
        const roomsByCountry = hotels.flatMap(hotel => {
            const hotelInfo = {
                hotel_id: hotel._id,
                country: hotel.country,
                hotel_img: hotel.img,
                hotel_name: hotel.hotel_name
            };
            return hotel.rooms.map(room => {
                const roomObject = room.toObject ? room.toObject() : { ...room };
                return { ...roomObject, ...hotelInfo };
            });
        });

        res.json(roomsByCountry); // Trả về mảng phòng đã "làm giàu"

    } catch (err) {
        console.error(`Lỗi khi lấy khách sạn ở ${req.params.country}:`, err);
        next(err); // Dùng next(err) cho nhất quán
    }
});

// -------------------------------------------------------------------
// 4. LẤY CHI TIẾT MỘT PHÒNG (THEO ID KHÁCH SẠN VÀ INDEX)
// -------------------------------------------------------------------
router.get("/hotels/:id/hotel/:index", async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        console.log(`Dữ liệu thô từ Hotel.findById(${req.params.id}):`, hotel);

        if (!hotel || !hotel.rooms || !hotel.rooms[req.params.index]) {
            return res.status(404).json({ message: "Không tìm thấy khách sạn hoặc index." });
        }
        res.json(hotel.rooms[req.params.index]);
    } catch (err) {
        console.error(`Lỗi khi lấy khách sạn với ID ${req.params.id} và index ${req.params.index}:`, err);
        next(err);
    }
});

export default router;