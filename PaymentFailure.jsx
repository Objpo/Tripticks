// ...
const PaymentFailure = () => {
    return (
        <div>
            <Navbar />
            <div className="container" style={{ minHeight: '50vh', /* ... */ }}>
                <div className="text-center" style={{ color: 'black' }}>
                    <h1 style={{ color: 'red' }}>Thanh toán thất bại!</h1>
                    <p>Đã có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại.</p>
                    <Link to="/booking" className="btn btn-primary">Thử Lại</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default PaymentFailure;