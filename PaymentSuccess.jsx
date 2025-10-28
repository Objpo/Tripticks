import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const PaymentSuccess = () => {
    return (
        <div>
            <Navbar />
            <div className="container" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="text-center" style={{ color: 'black' }}>
                    <h1 style={{ color: 'green' }}>Thanh toán thành công!</h1>
                    <p>Cảm ơn bạn đã đặt dịch vụ. Chúng tôi sẽ liên hệ với bạn sớm nhất.</p>
                    <Link to="/" className="btn btn-primary">Về Trang Chủ</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PaymentSuccess;