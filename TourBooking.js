import mongoose from "mongoose";

const TourBookingSchema = new mongoose.Schema({
    // Lấy từ form
    name: { type: String, required: true },
    email: { type: String, required: true },
    tour: { type: String, required: true }, // Đây là tour_name từ form
    guests: { type: Number, required: true, min: 1 },
    date: { type: Date, required: true }, // Dùng kiểu Date để dễ dàng truy vấn sau này

    // Tự động thêm
    booking_status: { 
        type: String, 
        required: true, 
        default: "Pending" // Mặc định là 'Chờ xác nhận'
    },
}, { 
    timestamps: true, // Tự động thêm createdAt và updatedAt
    collection: 'tour_bookings' // 💡 Ép Mongoose sử dụng tên collection này
});

const TourBooking = mongoose.models.TourBooking || mongoose.model("TourBooking", TourBookingSchema);

export default TourBooking;