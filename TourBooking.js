import mongoose from "mongoose";

const TourBookingSchema = new mongoose.Schema({
    // Lấy từ form
    name: { type: String, required: true },
    email: { type: String, required: true },
    tour: { type: String, required: true }, // Đây là tour_name từ form
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