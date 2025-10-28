import express from 'express';
import crypto from 'crypto'; // Dùng để tạo hash (có trong demo)
import querystring from 'qs'; // Dùng để sort (có trong demo)
import moment from 'moment'; // Dùng để format thời gian (có trong demo)
import TourBooking from '../models/TourBooking.js'; // Model tour
import HotelBooking from '../models/HotelBooking.js'; // Model hotel


const router = express.Router();


// -------------------------------------------------------------------
// 1. TẠO URL THANH TOÁN CHO TOUR
// -------------------------------------------------------------------
router.post('/payment/create_tour_payment', async (req, res) => {
    // Dữ liệu booking từ frontend
    const { name, email, tour_data, guests, date, hotel } = req.body;

    if (!tour_data) {
        return res.status(400).json({ message: "Vui lòng chọn tour." });
    }

    const selectedTour = JSON.parse(tour_data);

    // 💡 Giả định: giá tour = giá (price) * số khách (guests)
    const totalAmount = selectedTour.price * guests;

    // --- BƯỚC 1: Tạo booking "Pending" trong DB ---
    let savedBooking;
    try {
        const newBooking = new TourBooking({
            name,
            email,
            tour: selectedTour.tour_name, // Chỉ lưu tên tour
            guests,
            date,
            hotel,
            amount: totalAmount, // Lưu tổng số tiền
            booking_status: "Pending"
        });
        savedBooking = await newBooking.save();
    } catch (dbError) {
        console.error("Lỗi lưu DB:", dbError);
        return res.status(500).json({ message: "Lỗi khi tạo booking." });
    }

    // --- BƯỚC 2: Dán code tạo URL VNPAY của bạn vào đây ---
    // (Đây là code từ demo VNPAY, đã được sửa đổi)

    process.env.TZ = 'Asia/Ho_Chi_Minh';
    let createDate = moment(new Date()).format('YYYYMMDDHHmmss');

    const ipAddr = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);

    const tmnCode = process.env.VNP_TMN_CODE;
    const secretKey = process.env.VNP_HASH_SECRET;
    let vnpUrl = process.env.VNP_URL;
    const returnUrl = process.env.VNP_RETURN_URL;

    // 💡 Lấy thông tin từ booking đã lưu
    const orderId = savedBooking._id.toString();
    const amount = savedBooking.amount * 100; // VNPAY dùng đơn vị xu
    const orderInfo = `tour-booking-${orderId}`; // QUAN TRỌNG: để nhận diện khi return

    let vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    vnp_Params['vnp_Locale'] = 'vn';
    vnp_Params['vnp_CurrCode'] = 'USD';
    vnp_Params['vnp_TxnRef'] = orderId; // 💡 Dùng _id của booking
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    vnp_Params['vnp_OrderType'] = 'other';
    vnp_Params['vnp_Amount'] = amount;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;

    // (Đây là hàm sort từ demo)
    vnp_Params = sortObject(vnp_Params);

    let signData = querystring.stringify(vnp_Params, { encode: false });
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
    vnp_Params['vnp_SecureHash'] = signed;

    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

    // Trả URL về cho frontend
    res.json({ paymentUrl: vnpUrl });
});

// -------------------------------------------------------------------
// 2. TẠO URL THANH TOÁN CHO HOTEL (Tương tự)
// -------------------------------------------------------------------
router.post('/payment/create_hotel_payment', async (req, res) => {
    // Dữ liệu booking từ frontend
    const { name, email, room_data, guests, date } = req.body;

    if (!room_data) {
        return res.status(400).json({ message: "Vui lòng chọn phòng." });
    }

    const selectedRoom = JSON.parse(room_data);

    // 💡 Giả định: giá phòng = giá (price_per_night) * số khách (guests)
    // (Bạn có thể cần logic phức tạp hơn, ví dụ * số đêm)
    const totalAmount = selectedRoom.price_per_night * guests;

    // --- BƯỚC 1: Tạo booking "Pending" trong DB ---
    let savedBooking;
    try {
        const newBooking = new HotelBooking({
            name,
            email,
            guests,
            date,
            room_name: selectedRoom.room_name,
            hotel_id: selectedRoom.hotel_id,
            amount: totalAmount,
            booking_status: "Pending"
        });
        savedBooking = await newBooking.save();
    } catch (dbError) {
        console.error("Lỗi lưu DB:", dbError);
        return res.status(500).json({ message: "Lỗi khi tạo booking." });
    }

    // --- BƯỚC 2: Dán code tạo URL VNPAY (Y hệt như trên) ---
    process.env.TZ = 'Asia/Ho_Chi_Minh';
    let createDate = moment(new Date()).format('YYYYMMDDHHmmss');
    const ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const tmnCode = process.env.VNP_TMN_CODE;
    const secretKey = process.env.VNP_HASH_SECRET;
    let vnpUrl = process.env.VNP_URL;
    const returnUrl = process.env.VNP_RETURN_URL;

    const orderId = savedBooking._id.toString();
    const amount = savedBooking.amount * 100;
    const orderInfo = `hotel-booking-${orderId}`; // QUAN TRỌNG: để nhận diện

    let vnp_Params = {};
    // ... (Toàn bộ các trường vnp_Params y hệt như endpoint tour)
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    vnp_Params['vnp_Locale'] = 'vn';
    vnp_Params['vnp_CurrCode'] = 'USD';
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    vnp_Params['vnp_OrderType'] = 'other';
    vnp_Params['vnp_Amount'] = amount;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;

    vnp_Params = sortObject(vnp_Params);

    let signData = querystring.stringify(vnp_Params, { encode: false });
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
    vnp_Params['vnp_SecureHash'] = signed;

    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

    res.json({ paymentUrl: vnpUrl });
});

// -------------------------------------------------------------------
// 3. XỬ LÝ KẾT QUẢ VNPAY TRẢ VỀ (vnpay_return)
// -------------------------------------------------------------------
router.get('/payment/vnpay_return', async (req, res) => {
    // --- BƯỚC 1: Dán code VERIFY từ demo VNPAY vào đây ---
    let vnp_Params = req.query;
    let secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    const secretKey = process.env.VNP_HASH_SECRET;
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");

    // Lấy thông tin booking từ query
    const orderId = vnp_Params['vnp_TxnRef'];
    const responseCode = vnp_Params['vnp_ResponseCode'];
    const orderInfo = vnp_Params['vnp_OrderInfo'];

    // --- BƯỚC 2: Kiểm tra chữ ký và kết quả ---
    if (secureHash === signed && responseCode === '00') {
        try {
            // Thanh toán thành công!
            // Cập nhật trạng thái booking trong DB

            if (orderInfo.startsWith('tour-booking')) {
                await TourBooking.findByIdAndUpdate(orderId, { booking_status: "Completed" });
            } else if (orderInfo.startsWith('hotel-booking')) {
                await HotelBooking.findByIdAndUpdate(orderId, { booking_status: "Completed" });
            }

            // 💡 Chuyển hướng về trang success
            res.redirect('http://localhost:5174/payment-success');

        } catch (dbError) {
            console.error("Lỗi cập nhật DB:", dbError);
            // 💡 Chuyển hướng về trang failure
            res.redirect('http://localhost:5174/payment-failure');
        }
    } else {
        // Thanh toán thất bại (chữ ký không khớp hoặc lỗi VNPAY)
        try {
            // (Không bắt buộc) Cập nhật trạng thái "Failed"
            if (orderInfo.startsWith('tour-booking')) {
                await TourBooking.findByIdAndUpdate(orderId, { booking_status: "Failed" });
            } else if (orderInfo.startsWith('hotel-booking')) {
                await HotelBooking.findByIdAndUpdate(orderId, { booking_status: "Failed" });
            }
        } catch (e) { }

        // 💡 Chuyển hướng về trang failure
        res.redirect('http://localhost:5174/payment-failure');
    }
});


// 💡 Hàm sortObject (lấy từ demo)
function sortObject(obj) {
    let sorted = {};
    let str = [];
    let key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}


export default router;