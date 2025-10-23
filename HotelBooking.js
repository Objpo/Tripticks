import mongoose from "mongoose";

const HotelBookingSchema = new mongoose.Schema({
    // Thông tin người đặt
    name: { type: String, required: true },
    email: { type: String, required: true },
    guests: { type: Number, required: true, min: 1 },
    date: {
        type: Date,
        required: [true, 'Ngày đặt phòng là bắt buộc.'],
        validate: {
            validator: function (v) {
                // 1. Lấy ngày hiện tại
                const now = new Date();
                // 2. Đặt giờ, phút, giây, mili giây của ngày hiện tại về 0
                // để chỉ so sánh ngày (date)
                now.setHours(0, 0, 0, 0);

                // 3. Lấy ngày đặt phòng từ input
                const bookingDate = new Date(v);
                // 4. Đặt giờ, phút, giây, mili giây của ngày đặt phòng về 0
                bookingDate.setHours(0, 0, 0, 0);

                // 5. Kiểm tra: Ngày đặt phòng phải >= Ngày hiện tại
                return bookingDate >= now;
            },
            message: props => `Ngày đặt phòng (${props.value.toISOString().split('T')[0]}) không thể là ngày trong quá khứ! Vui lòng chọn ngày hiện tại hoặc tương lai.`
        }
    },

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