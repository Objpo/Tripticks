@extends('layouts.admin')

@section('title', 'Dashboard')

@section('content')
<div class="container-fluid px-0">

    <div class="row g-3">
        <div class="col-6 col-lg-3">
            <div class="card stat-card border-0 shadow-sm">
                <div class="card-body text-center">
                    <div class="stat-label">Tổng Tour</div>
                    <div class="stat-value text-success">120</div>
                </div>
            </div>
        </div>
        <div class="col-6 col-lg-3">
            <div class="card stat-card border-0 shadow-sm">
                <div class="card-body text-center">
                    <div class="stat-label">Khách sạn</div>
                    <div class="stat-value text-primary">45</div>
                </div>
            </div>
        </div>
        <div class="col-6 col-lg-3">
            <div class="card stat-card border-0 shadow-sm">
                <div class="card-body text-center">
                    <div class="stat-label">Đơn hôm nay</div>
                    <div class="stat-value text-warning">32</div>
                </div>
            </div>
        </div>
        <div class="col-6 col-lg-3">
            <div class="card stat-card border-0 shadow-sm">
                <div class="card-body text-center">
                    <div class="stat-label">Doanh thu tháng</div>
                    <div class="stat-value text-danger">$12,540</div>
                </div>
            </div>
        </div>
    </div>

    <div class="row g-3 mt-1">
        <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-white fw-semibold">Doanh thu theo tháng</div>
                <div class="card-body">
                    <canvas id="revenueChart" height="100"></canvas>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-white fw-semibold">Booking theo loại</div>
                <div class="card-body">
                    <canvas id="bookingChart" height="100"></canvas>
                </div>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm mt-3">
        <div class="card-header bg-white fw-semibold">Đơn hàng mới nhất</div>
        <div class="card-body p-0">
            <table class="table table-hover align-middle mb-0">
                <thead class="table-light">
                    <tr>
                        <th>#</th>
                        <th>Khách hàng</th>
                        <th>Dịch vụ</th>
                        <th>Trạng thái</th>
                        <th>Ngày đặt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1001</td>
                        <td>Nguyễn Văn A</td>
                        <td>Tour Đà Nẵng</td>
                        <td><span class="badge bg-warning">Chờ xác nhận</span></td>
                        <td>29/08/2025</td>
                    </tr>
                    <tr>
                        <td>1002</td>
                        <td>Trần Thị B</td>
                        <td>Khách sạn Hà Nội</td>
                        <td><span class="badge bg-success">Đã thanh toán</span></td>
                        <td>28/08/2025</td>
                    </tr>
                    <tr>
                        <td>1003</td>
                        <td>Phạm Văn C</td>
                        <td>Tour Sapa</td>
                        <td><span class="badge bg-danger">Đã hủy</span></td>
                        <td>28/08/2025</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</div>
@endsection

@section('scripts')
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
const ctx1 = document.getElementById('revenueChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        datasets: [{
            label: 'Doanh thu ($)',
            data: [1200, 1500, 1800, 2000, 2500, 3000, 4000],
            borderColor: '#ff5722',
            backgroundColor: 'rgba(255,87,34,0.1)',
            tension: 0.3,
            fill: true
        }]
    },
    options: {
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
    }
});

const ctx2 = document.getElementById('bookingChart').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Tour', 'Khách sạn'],
        datasets: [{
            data: [65, 35],
            backgroundColor: ['#4caf50','#2196f3']
        }]
    },
    options: { plugins: { legend: { position: 'bottom' } } }
});
</script>
@endsection
