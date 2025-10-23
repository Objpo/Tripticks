import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
  tour_id: { type: String, required: true, unique: true },
  tour_name: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  duration_hours: { type: String },
  available_seats: { type: Number },
  // 💡 TRƯỜNG IMG (Ảnh Tour) để hiển thị trên frontend
  img: { type: String, required: false },
  last_updated: { type: String },
}, { timestamps: true });

// Tránh lỗi OverwriteModelError
const Tour = mongoose.models.Tour || mongoose.model("Tour", TourSchema);

export default Tour;