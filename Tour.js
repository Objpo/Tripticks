// backend/models/Tour.js
import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
  tour_id: String,
  tour_name: String,
  country: String,
  description: String,
  price: Number,
  duration_hours: Number,
  available_seats: Number,
  last_updated: String,
});

export default mongoose.model("Tour", TourSchema);
