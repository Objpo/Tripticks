import mongoose from "mongoose";

const HotelBookingSchema = new mongoose.Schema({
    // thong tin
    name: { type: String, required: true },
    email: { type: String, required: true },
    guests: { type: Number, required: true, min: 1 },
    date: {
        type: Date,
        required: [true, 'Ngày đặt phòng là bắt buộc.'],
        validate: {
            validator: function (v) {
                const now = new Date();
                now.setHours(0, 0, 0, 0);
                const bookingDate = new Date(v);
                bookingDate.setHours(0, 0, 0, 0);
                return bookingDate >= now;
            },
            message: props => `Ngày đặt phòng (${props.value.toISOString().split('T')[0]}) không thể là ngày trong quá khứ! Vui lòng chọn ngày hiện tại hoặc tương lai.`
        }
    },
    amount: { type: Number, required: true, default: 0 },


    room_name: { type: String, required: true },
    hotel_id: { type: String, required: true }, 


    booking_status: {
        type: String,
        required: true,
        default: "Pending"
    },
}, {
    timestamps: true,
    collection: 'hotel_bookings' 
});

const HotelBooking = mongoose.models.HotelBooking || mongoose.model("HotelBooking", HotelBookingSchema);

export default HotelBooking;