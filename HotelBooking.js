import mongoose from "mongoose";

const HotelBookingSchema = new mongoose.Schema({
    // Thông tin người đặt
    name: { type: String, required: true },
    email: { type: String, required: true },
    guests: { type: Number, required: true, min: 1 },
    date: { type: Date, required: true }, // Bạn có thể đổi tên thành check_in_date nếu muốn

    // Thông tin phòng/khách sạn (lấy từ form)
    room_name: { type: String, required: true },
    hotel_id: { type: String, required: true }, // Lấy từ API /api/hotels
    
    // Trạng thái
    booking_status: { 
        type: String, 
        required: true, 
        default: "Pending" 
    },
}, { 
    timestamps: true, 
    collection: 'hotel_bookings' // 💡 Chỉ định rõ tên collection
});

const HotelBooking = mongoose.models.HotelBooking || mongoose.model("HotelBooking", HotelBookingSchema);

export default HotelBooking;