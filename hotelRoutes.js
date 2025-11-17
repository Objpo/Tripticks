import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();


router.get("/hotels", async (req, res, next) => {
    try {
        const { destination, checkin, checkout, price } = req.query;

        let filter = {}; 


        if (destination) {
        
            filter.$or = [
              
                { hotel_name: { $regex: destination, $options: 'i' } },
                { country: { $regex: destination, $options: 'i' } }
            ];

         
            console.log("Applying DB Filter (Destination):", filter);
        }

        
        if (price) {
            const priceLimit = parseInt(price);
            if (!isNaN(priceLimit)) {
        
                filter.rooms = {
                    $elemMatch: {
                        price_per_night: { $lte: priceLimit }
                    }
                };
                console.log("Applying DB Filter (Price):", priceLimit);
            }
        }

      


       
        const hotels = await Hotel.find(filter);

        if (!hotels || hotels.length === 0) {
            return res.json([]);
        }

   
        const allRooms = hotels.flatMap(hotel => {
        
            const hotelInfo = {
                hotel_id: hotel._id,
                country: hotel.country,
                hotel_img: hotel.img,
                hotel_name: hotel.hotel_name
            };

        
            return hotel.rooms
              
                .filter(room => {
                    
                    if (price) {
                        return room.price_per_night <= parseInt(price);
                    }
                    return true;
                })
                .map(room => {
                    const roomObject = room.toObject ? room.toObject() : { ...room };
                 
                    return { ...roomObject, ...hotelInfo };
                });
        });

        res.json(allRooms); 

    } catch (err) {
        console.error("Lỗi khi xử lý tìm kiếm khách sạn (Route 1):", err.stack);
      
        res.status(500).json({ message: "Lỗi Server nội bộ khi tìm kiếm dữ liệu." });
    }
});


router.get("/hotels/:id", async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: "Không tìm thấy khách sạn." });
        }
        res.status(200).json(hotel); 
    } catch (err) {
        next(err);
    }
});


router.get("/hotels/country/:country", async (req, res, next) => {
    try {
        const countryName = req.params.country;
        const hotels = await Hotel.find({ country: new RegExp(countryName, "i") });

        console.log(`Dữ liệu thô từ Hotel.find() cho ${countryName}:`, hotels);

        if (!hotels || hotels.length === 0) {
            return res.status(404).json({ message: `Không tìm thấy khách sạn nào ở ${countryName}.` });
        }

        
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

        res.json(roomsByCountry); 

    } catch (err) {
        console.error(`Lỗi khi lấy khách sạn ở ${req.params.country}:`, err);
        next(err); 
    }
});


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