import axios from "axios";


const api = axios.create({
    baseURL: "/api", 
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});


const getToken = () => {
    return typeof window !== 'undefined' ? localStorage.getItem("token") : null;
};


const getAuthHeaders = () => {
    const token = getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
};


/**
 * Lấy danh sách phòng/khách sạn. Có thể truyền tham số để lọc/tìm kiếm.
 * @param {object} [params={}] 
 */
export const getHotels = async (params = {}) => {
    try {
        const queryString = new URLSearchParams(params).toString();
        const endpoint = `/hotels${queryString ? `?${queryString}` : ''}`;
        console.log("Axios calling:", endpoint);

        const response = await api.get(endpoint);
        if (!Array.isArray(response.data)) {
            
        }
        return response.data;
    } catch (error) {
        
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


export const postBooking = async (bookingData) => {
    try {
        
        const headers = getAuthHeaders();
        const response = await api.post("/bookings/tour", bookingData, { headers });
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Lỗi server. Không thể đặt chỗ.";
        throw new Error(errorMessage);
    }
};


export const getBookingHistory = async () => {
    try {
        const headers = getAuthHeaders();
        if (!headers.Authorization) {
            throw new Error("Vui lòng đăng nhập để xem lịch sử đặt chỗ.");
        }

        const response = await api.get("/payment/history", { headers });

        return response.data; 
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Lỗi khi lấy lịch sử đặt chỗ.";
        throw new Error(errorMessage);
    }
};


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
