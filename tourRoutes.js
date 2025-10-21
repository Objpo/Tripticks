import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const Tour = mongoose.model("Tour", new mongoose.Schema({
    tour_id: String,
    tour_name: String,
    country: String,
    description: String,
    price: Number,
    duration_hours: Number,
    available_seats: Number,
    last_updated: String,
}));

router.get("/", async (req, res) => {
    const tours = await Tour.find();
    res.json(tours);
});

export default router;
