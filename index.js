import axios from "axios";

// Tạo instance Axios với cấu hình mặc định
const api = axios.create({
    baseURL: "/api", // Sử dụng proxy, không cần hardcode localhost:5000
    timeout: 30000, // Tăng timeout lên 30 giây để tránh lỗi khi backend chậm
    headers: {
        "Content-Type": "application/json",
    },
});

// Lấy tất cả các phòng từ tất cả khách sạn
export const getHotels = async () => {
    try {
        const response = await api.get("/hotels");
        console.log("Dữ liệu thô từ /hotels:", response.data); // Debug
        if (!Array.isArray(response.data)) {
            throw new Error("Dữ liệu từ API không phải là mảng.");
        }
        return response.data; // Trả về mảng các phòng (rooms)
    } catch (error) {
        const errorMessage = error.response?.status
            ? `Lỗi ${error.response.status}: ${error.response?.data?.message || error.message}`
            : `Lỗi khi lấy danh sách phòng: ${error.message}`;
        throw new Error(errorMessage);
    }
};

// Lấy các phòng theo quốc gia
export const getHotelsByCountry = async (country) => {
    try {
        const response = await api.get(`/hotels/country/${country}`);
        console.log(`Dữ liệu thô từ /hotels/country/${country}:`, response.data); // Debug
        if (!Array.isArray(response.data)) {
            throw new Error("Dữ liệu từ API không phải là mảng.");
        }
        return response.data; // Trả về mảng các phòng (rooms) theo quốc gia
    } catch (error) {
        const errorMessage = error.response?.status
            ? `Lỗi ${error.response.status}: ${error.response?.data?.message || error.message}`
            : `Lỗi khi lấy phòng ở ${country}: ${error.message}`;
        throw new Error(errorMessage);
    }
};

// Lấy chi tiết phòng theo ID khách sạn và index (thay thế getHotelById)
export const getHotelByIdAndIndex = async (id, index) => {
    try {
        const response = await api.get(`/hotels/${id}/hotel/${index}`);
        console.log(`Dữ liệu thô từ /hotels/${id}/hotel/${index}:`, response.data); // Debug
        if (!response.data) {
            throw new Error("Dữ liệu từ API không hợp lệ.");
        }
        return response.data; // Trả về một object (phần tử trong rooms)
    } catch (error) {
        const errorMessage = error.response?.status
            ? `Lỗi ${error.response.status}: ${error.response?.data?.message || error.message}`
            : `Lỗi khi lấy phòng với ID ${id} và index ${index}: ${error.message}`;
        throw new Error(errorMessage);
    }
};

// Lấy tất cả tour
export const getTours = async () => {
    try {
        const response = await api.get("/tours");
        console.log("Dữ liệu thô từ /tours:", response.data); // Debug
        if (!Array.isArray(response.data)) {
            throw new Error("Dữ liệu từ API không phải là mảng.");
        }
        return response.data; // Trả về mảng các tài liệu Tour
    } catch (error) {
        const errorMessage = error.response?.status
            ? `Lỗi ${error.response.status}: ${error.response?.data?.message || error.message}`
            : `Lỗi khi lấy danh sách tour: ${error.message}`;
        throw new Error(errorMessage);
    }
};

// (Tùy chọn) Thêm nếu cần lấy toàn bộ thông tin khách sạn
export const getHotelDetailsById = async (id) => {
    try {
        const response = await api.get(`/hotels/${id}`);
        console.log(`Dữ liệu thô từ /hotels/${id}:`, response.data); // Debug
        if (!response.data) {
            throw new Error("Dữ liệu từ API không hợp lệ.");
        }
        return response.data; // Trả về một tài liệu Hotel (nếu route được thêm vào hotelRoutes.js)
    } catch (error) {
        const errorMessage = error.response?.status
            ? `Lỗi ${error.response.status}: ${error.response?.data?.message || error.message}`
            : `Lỗi khi lấy khách sạn với ID ${id}: ${error.message}`;
        throw new Error(errorMessage);
    }
};