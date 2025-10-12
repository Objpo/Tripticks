// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Lấy đường dẫn hiện tại (vì ES module không có __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Kết nối MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Kết nối MongoDB thành công!");
  } catch (error) {
    console.error("❌ Lỗi kết nối MongoDB:", error.message);
    process.exit(1);
  }
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ⚙️ Cấu hình upload ảnh
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "pacific-main/images"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// ⚙️ Cấu hình folder tĩnh (phục vụ giao diện Pacific)
app.use(express.static(path.join(__dirname, "pacific-main")));

// ✅ Route test để kiểm tra server
app.get("/", (req, res) => {
  res.send("✅ Server Tripticks đang chạy thành công!");
});

// ✅ Route upload ảnh (ví dụ)
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("Không có file được tải lên!");
  }
  res.json({
    message: "Tải ảnh thành công!",
    filePath: `/images/${req.file.filename}`,
  });
});

// ✅ Khởi động server
app.listen(port, async () => {
  await connectDB();
  console.log(`🚀 Server đang chạy tại: http://localhost:${port}`);
});
