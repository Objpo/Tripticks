import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// 💡 LƯU Ý: Giả định bạn đã import User Model ở đây
import User from "../models/User.js";

const router = express.Router();

// 💡 ĐÃ SỬA LỖI ĐỊNH TUYẾN: Thêm tiền tố /auth vào route
// Endpoint: POST /api/auth/signup
router.post("/auth/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // kiểm tra trùng email
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email đã tồn tại!" });

    // mã hoá mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "Đăng ký thành công!" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
});

// 💡 ĐÃ SỬA LỖI ĐỊNH TUYẾN: Thêm tiền tố /auth vào route
// Endpoint: POST /api/auth/login
router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Sai email hoặc mật khẩu!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Sai email hoặc mật khẩu!" });

    // tạo token JWT
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET || "mysecret",
      { expiresIn: "2h" }
    );

    res.json({
      message: "Đăng nhập thành công!",
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
});


// 💡 ĐÃ SỬA LỖI ĐỊNH TUYẾN: Thêm tiền tố /auth vào route
// Endpoint: GET /api/auth/profile
router.get("/auth/profile", async (req, res) => {
  try {
    // Lấy token từ header Authorization: "Bearer <token>"
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Không có token!" });

    // Giải mã token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "mysecret");

    // Tìm người dùng trong DB
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(404).json({ message: "Không tìm thấy người dùng!" });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Token không hợp lệ!" });
  }
});

export default router;
