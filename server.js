import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import hotelRoutes from "./routes/hotelRoutes.js";
import tourRoutes from "./routes/tourRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import hotelbookingRoutes from "./routes/hotelbookingRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const mongoURI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Triptick_db";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, 
  })
  .then(() => console.log(" MongoDB connected successfully to Triptick_db!"))
  .catch((err) => console.error(" MongoDB connection error:", err));


mongoose.connection.on("connected", () =>
  console.log(" Mongoose connected to MongoDB")
);
mongoose.connection.on("error", (err) =>
  console.error(" Mongoose connection error:", err)
);
mongoose.connection.on("disconnected", () =>
  console.warn(" Mongoose disconnected")
);

app.use("/api", hotelRoutes);
app.use("/api", tourRoutes);
app.use("/api", authRoutes);
app.use("/api", bookingRoutes);
app.use("/api", hotelbookingRoutes);
app.use("/api", paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));