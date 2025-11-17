import mongoose from "mongoose";

// 1. ĐỊNH NGHĨA SCHEMA 
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

// 2. ĐỊNH NGHĨA SCHEMA cho hotel
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
      required: false, 
    },
    rooms: [RoomSchema], 
  },
  { timestamps: true }
);

// xuat model
export default mongoose.model("Hotel", HotelSchema);
