import mongoose from "mongoose";

// 1. ĐỊNH NGHĨA SCHEMA CHO PHÒNG (SUB-DOCUMENT)
const RoomSchema = new mongoose.Schema({
  room_name: {
    type: String,
    required: [true, "Tên phòng là bắt buộc"],
  },
  type: {
    type: String,
    required: [true, "Loại phòng là bắt buộc"],
  },
  price_per_night: {
    type: Number,
    required: [true, "Giá mỗi đêm là bắt buộc"],
  },
  max_guests: {
    type: Number,
    required: [true, "Số khách tối đa là bắt buộc"],
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// 2. ĐỊNH NGHĨA SCHEMA CHÍNH CHO KHÁCH SẠN (HOTEL)
const HotelSchema = new mongoose.Schema(
  {
    hotel_name: {
      type: String,
      required: [true, "Tên khách sạn là bắt buộc"],
    },
    country: {
      type: String,
      required: [true, "Quốc gia là bắt buộc"],
    },
    img: {
      type: String,
      required: false, // img ở cấp cao nhất
    },
    rooms: [RoomSchema], // Tên mảng là 'rooms'
  },
  { timestamps: true }
);

// 3. XUẤT MODEL
export default mongoose.model("Hotel", HotelSchema);
