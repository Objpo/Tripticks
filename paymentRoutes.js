import express from 'express';
import crypto from 'crypto'; 
import querystring from 'qs'; 
import moment from 'moment'; 
import TourBooking from '../models/TourBooking.js'; 
import HotelBooking from '../models/HotelBooking.js'; 


const router = express.Router();



router.post('/payment/create_tour_payment', async (req, res) => {
  
    const { name, email, tour_data, guests, date, hotel } = req.body;

    if (!tour_data) {
        return res.status(400).json({ message: "Vui lòng chọn tour." });
    }
    if (isNaN(guests) || guests ===0) {
        return res.status(400).json({ message: "Số lượng khách không được để trống." });
    }
    if (isNaN(guests) || guests <= 0) {
        return res.status(400).json({ message: "Số lượng khách không hợp lệ." });
    }
    if (isNaN(guests) || guests >10) {
        return res.status(400).json({ message: "quý khách vui lòng đặt thêm tour." });
    }



    const selectedTour = JSON.parse(tour_data);

  
    const totalAmount = selectedTour.price ;
    if (guests > 8) {
       totalAmount *guests;
    }

  
    let savedBooking;
    try {
        const newBooking = new TourBooking({
            name,
            email,
            tour: selectedTour.tour_name, 
            guests:guests,
            date,
            hotel,
            amount: totalAmount, 
            booking_status: "Pending"
        });
        savedBooking = await newBooking.save();
    } catch (dbError) {
        console.error("Lỗi lưu DB:", dbError);
        return res.status(500).json({ message: "Lỗi khi tạo booking." });
    }


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
    

    const orderId = savedBooking._id.toString();
    const amount = savedBooking.amount * 2632200;
    const orderInfo = `tour-booking-${orderId}`; 
    let vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    vnp_Params['vnp_Locale'] = 'vn';
    vnp_Params['vnp_CurrCode'] = 'VND';
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


router.post('/payment/create_hotel_payment', async (req, res) => {
   
    const { name, email, room_data, guests, date } = req.body;

    const numberOfGuests = parseInt(guests, 10);
    if (isNaN(numberOfGuests) || numberOfGuests <= 0) {
        return res.status(400).json({ message: "Số lượng khách không hợp lệ." });
    }
    if (isNaN(numberOfGuests) || numberOfGuests ===0) {
        return res.status(400).json({ message: "Số lượng khách không được để trống." });
    }
    if (isNaN(numberOfGuests) || !Number.isInteger(numberOfGuests)) {
        return res.status(400).json({ message: "Số lượng khách phải là số nguyên." });
    }
    if (isNaN(numberOfGuests) || numberOfGuests >10) {
        return res.status(400).json({ message: "quý khách vui lòng đặt thêm phòng." });
    }
    if (!room_data) {
        return res.status(400).json({ message: "Vui lòng chọn phòng." });
    }

    const selectedRoom = JSON.parse(room_data);

    
    const totalAmount = selectedRoom.price_per_night;
    if (numberOfGuests > 8) {
       totalAmount *guests;
    }



  
    let savedBooking;
    try {
        const newBooking = new HotelBooking({
            name,
            email,
            guests: numberOfGuests,
            date,
            room_name: selectedRoom.room_name,
            hotel_id: selectedRoom.hotel_id,
            amount: totalAmount,
            booking_status: "Pending"
        });
        savedBooking = await newBooking.save();
    } catch (dbError) {
        console.error("Lỗi lưu DB:", dbError);
        return res.status(500).json({ message: "vui lòng không chọn ngày quá khứ." });
    }

    
    process.env.TZ = 'Asia/Ho_Chi_Minh';
    let createDate = moment(new Date()).format('YYYYMMDDHHmmss');
    const ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const tmnCode = process.env.VNP_TMN_CODE;
    const secretKey = process.env.VNP_HASH_SECRET;
    let vnpUrl = process.env.VNP_URL;
    const returnUrl = process.env.VNP_RETURN_URL;

    const orderId = savedBooking._id.toString();
    const amount = savedBooking.amount * 2632200;
    const orderInfo = `hotel-booking-${orderId}`; 

    let vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    vnp_Params['vnp_Locale'] = 'vn';
    vnp_Params['vnp_CurrCode'] = 'VND';
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


router.get('/payment/vnpay_return', async (req, res) => {
   
    let vnp_Params = req.query;
    let secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    const secretKey = process.env.VNP_HASH_SECRET;
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");

   
    const orderId = vnp_Params['vnp_TxnRef'];
    const responseCode = vnp_Params['vnp_ResponseCode'];
    const orderInfo = vnp_Params['vnp_OrderInfo'];

 
    if (secureHash === signed && responseCode === '00') {
        try {
            

            if (orderInfo.startsWith('tour-booking')) {
                await TourBooking.findByIdAndUpdate(orderId, { booking_status: "Completed" });
            } else if (orderInfo.startsWith('hotel-booking')) {
                await HotelBooking.findByIdAndUpdate(orderId, { booking_status: "Completed" });
            }

           
            res.redirect('http://localhost:5174/payment-success');

        } catch (dbError) {
            console.error("Lỗi cập nhật DB:", dbError);
 
            res.redirect('http://localhost:5174/payment-failure');
        }
    } else {
 
        try {
         
            if (orderInfo.startsWith('tour-booking')) {
                await TourBooking.findByIdAndUpdate(orderId, { booking_status: "Failed" });
            } else if (orderInfo.startsWith('hotel-booking')) {
                await HotelBooking.findByIdAndUpdate(orderId, { booking_status: "Failed" });
            }
        } catch (e) { }

       
        res.redirect('http://localhost:5174/payment-failure');
    }
});



function sortObject(obj) {
    let sorted = {};
    let str = [];
    let key;
    for (key in obj) {
        // Object.prototype.hasOwnProperty.call  gọi hàm 
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
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