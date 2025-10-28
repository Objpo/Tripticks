import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// -------------------------------------------------------------------
// 1. LẤY TẤT CẢ CÁC PHÒNG (ĐÃ "LÀM GIÀU" DATA)
// -------------------------------------------------------------------
router.get("/hotels", async (req, res, next) => {
    try {
        const { destination, checkin, checkout, price } = req.query; // ĐỌC TẤT CẢ THAM SỐ TỪ QUERY

        let filter = {}; // Object chứa các điều kiện lọc cho Mongoose

        // 1. Lọc theo DESTINATION (Dựa trên hotel_name hoặc country)
        if (destination) {
            // Sử dụng $or để tìm kiếm trong cả hotel_name VÀ country
            filter.$or = [
                // $regex cho tìm kiếm chuỗi con, $options: 'i' cho không phân biệt chữ hoa/thường
                { hotel_name: { $regex: destination, $options: 'i' } },
                { country: { $regex: destination, $options: 'i' } }
            ];

            // 💡 DEBUG: Log filter được áp dụng
            console.log("Applying DB Filter (Destination):", filter);
        }

        // 2. Lọc theo GIÁ (Ví dụ: Lọc theo rooms.price_per_night nhỏ hơn hoặc bằng price limit)
        if (price) {
            const priceLimit = parseInt(price);
            if (!isNaN(priceLimit)) {
                // Thêm điều kiện $elemMatch: tìm ít nhất 1 phòng có giá <= priceLimit
                // Đây là cách an toàn nhất để lọc tài liệu cha dựa trên thuộc tính của sub-document
                filter.rooms = {
                    $elemMatch: {
                        price_per_night: { $lte: priceLimit }
                    }
                };
                console.log("Applying DB Filter (Price):", priceLimit);
            }
        }

        // TODO: Thêm logic lọc cho checkin/checkout/available status tại đây nếu cần


        // THỰC HIỆN TRUY VẤN: Chỉ tìm những document (khách sạn) khớp với bộ lọc
        const hotels = await Hotel.find(filter);

        if (!hotels || hotels.length === 0) {
            return res.json([]); // TRẢ VỀ MẢNG RỖNG: Tránh 404/500 nếu không tìm thấy
        }

        // Biến đổi dữ liệu: Gắn thông tin của khách sạn mẹ vào từng phòng
        const allRooms = hotels.flatMap(hotel => {
            // Lấy thông tin chung của khách sạn
            const hotelInfo = {
                hotel_id: hotel._id,
                country: hotel.country,
                hotel_img: hotel.img,
                hotel_name: hotel.hotel_name
            };

            // Map qua mảng 'rooms' của khách sạn này
            return hotel.rooms
                // 3. LỌC PHÒNG TRÊN CLIENT (Nếu cần lọc giá trên rooms, làm lại ở đây)
                .filter(room => {
                    // Nếu có giới hạn giá, chỉ lấy phòng có giá <= giới hạn
                    if (price) {
                        return room.price_per_night <= parseInt(price);
                    }
                    return true; // Nếu không có lọc giá, lấy tất cả phòng
                })
                .map(room => {
                    const roomObject = room.toObject ? room.toObject() : { ...room };
                    // Gộp thông tin phòng và thông tin khách sạn lại
                    return { ...roomObject, ...hotelInfo };
                });
        });

        res.json(allRooms); // Gửi mảng phòng đã được "làm giàu" thông tin

    } catch (err) {
        console.error("Lỗi khi xử lý tìm kiếm khách sạn (Route 1):", err.stack);
        // Thay vì next(err) có thể gây crash cho Frontend, gửi lỗi 500 rõ ràng
        res.status(500).json({ message: "Lỗi Server nội bộ khi tìm kiếm dữ liệu." });
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