import axios from "axios";

// Tạo instance Axios với cấu hình mặc định
const api = axios.create({
    baseURL: "/api", // Sử dụng proxy để kết nối tới Express
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Hàm trợ giúp để lấy token một cách an toàn
const getToken = () => {
    return typeof window !== 'undefined' ? localStorage.getItem("token") : null;
};

// Hàm trợ giúp để tạo Authorization Header
const getAuthHeaders = () => {
    const token = getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
};

// ---------------------------------------------------------------------
// 1. CHỨC NĂNG LẤY DỮ LIỆU CHUNG (HOTEL & TOUR)
// ---------------------------------------------------------------------

// index.js (Phiên bản đã sửa)

/**
 * Lấy danh sách phòng/khách sạn. Có thể truyền tham số để lọc/tìm kiếm.
 * @param {object} [params={}] - Các tham số tìm kiếm (destination, checkin, checkout, price).
 */
export const getHotels = async (params = {}) => { // PHẢI CÓ (params = {})
    try {
        // 1. Dùng URLSearchParams để chuyển đổi params thành chuỗi
        const queryString = new URLSearchParams(params).toString();

        // 2. Xây dựng endpoint với chuỗi truy vấn (nếu có)
        const endpoint = `/hotels${queryString ? `?${queryString}` : ''}`;

        // Dòng debug bạn thấy đang bị lỗi, nó chỉ ra endpoint là /hotels
        console.log("Axios calling:", endpoint);

        const response = await api.get(endpoint);

        // ... (phần xử lý phản hồi giữ nguyên)
        if (!Array.isArray(response.data)) {
            // ...
        }
        return response.data;
    } catch (error) {
        // ...
    }
};

// Lấy tất cả tour
export const getTours = async () => {
    try {
        const response = await api.get("/tours");
        if (!Array.isArray(response.data)) throw new Error("Dữ liệu tour không phải là mảng.");
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || `Lỗi khi lấy danh sách tour: ${error.message}`;
        throw new Error(errorMessage);
    }
};

// ---------------------------------------------------------------------
// 2. CHỨC NĂNG ĐẶT CHỖ (BOOKING)
// ---------------------------------------------------------------------

// Gửi Booking mới (POST /api/bookings/tour)
export const postBooking = async (bookingData) => {
    try {
        // Có thể thêm Authorization header nếu backend yêu cầu
        const headers = getAuthHeaders();
        const response = await api.post("/bookings/tour", bookingData, { headers });
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Lỗi server. Không thể đặt chỗ.";
        throw new Error(errorMessage);
    }
};

// ---------------------------------------------------------------------
// 3. CHỨC NĂNG THANH TOÁN & LỊCH SỬ (YÊU CẦU TOKEN)
// ---------------------------------------------------------------------

// Lấy lịch sử đặt chỗ (GET /api/payment/history)
export const getBookingHistory = async () => {
    try {
        const headers = getAuthHeaders();
        if (!headers.Authorization) {
            throw new Error("Vui lòng đăng nhập để xem lịch sử đặt chỗ.");
        }

        const response = await api.get("/payment/history", { headers });

        return response.data; // Trả về object chứa { history: [...], totalDue: N }
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Lỗi khi lấy lịch sử đặt chỗ.";
        throw new Error(errorMessage);
    }
};

// Gửi yêu cầu xử lý thanh toán (POST /api/payment/process)
export const postPaymentProcess = async (paymentData) => {
    try {
        const headers = getAuthHeaders();
        if (!headers.Authorization) {
            throw new Error("Vui lòng đăng nhập để thực hiện thanh toán.");
        }

        const response = await api.post("/payment/process", paymentData, { headers });
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Lỗi server. Thanh toán không thành công.";
        throw new Error(errorMessage);
    }
};

// ---------------------------------------------------------------------
// 4. CHỨC NĂNG XÁC THỰC (PROFILE)
// ---------------------------------------------------------------------

// Lấy thông tin user profile (GET /api/auth/profile)
export const getProfile = async () => {
    try {
        const headers = getAuthHeaders();
        if (!headers.Authorization) throw new Error("Yêu cầu đăng nhập.");

        const response = await api.get("/auth/profile", { headers });
        return response.data;
    } catch (error) {
        throw new Error("Không thể tải profile. Token không hợp lệ.");
    }
};

// 5. Đăng nhập
export const login = async (credentials) => {
    try {
        const response = await api.post("/auth/login", credentials);
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || "Đăng nhập thất bại.";
        throw new Error(message);
    }
};

// 6. Đăng ký
export const signup = async (userData) => {
    try {
        const response = await api.post("/auth/signup", userData);
        return response.data;
    } catch (error) {
        const message = error.response?.data?.message || "Đăng ký thất bại.";
        throw new Error(message);
    }
};
