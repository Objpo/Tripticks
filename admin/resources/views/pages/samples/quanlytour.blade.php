<!DOCTYPE html>
<html lang="vi">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Quản lý tour du lịch</title>

  <!-- plugins:css -->
  <link rel="stylesheet" href="../../vendors/feather/feather.css">
  <link rel="stylesheet" href="../../vendors/ti-icons/css/themify-icons.css">
  <link rel="stylesheet" href="../../vendors/css/vendor.bundle.base.css">
  <!-- inject:css -->
  <link rel="stylesheet" href="../../css/vertical-layout-light/style.css">
  <!-- endinject -->
  <link rel="shortcut icon" href="../../images/favicon.png" />
</head>

<body>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper bg-light p-4">

        <!-- Tiêu đề -->
        <div class="row mb-4">
          <div class="col-12 text-center">
            <h2 class="font-weight-bold text-info">HỆ THỐNG QUẢN LÝ TOUR DU LỊCH</h2>
            <p class="text-muted">Theo dõi tour, khách đăng ký và doanh thu</p>
          </div>
        </div>

        <!-- Thống kê tổng quan -->
        <div class="row text-center">
          <div class="col-md-3 mb-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h4 class="text-info">25</h4>
                <p class="mb-0">Tổng số tour</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h4 class="text-success">320</h4>
                <p class="mb-0">Khách đã đặt</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h4 class="text-warning">4</h4>
                <p class="mb-0">Tour khởi hành hôm nay</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h4 class="text-danger">150.000.000₫</h4>
                <p class="mb-0">Doanh thu tháng này</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Danh sách tour -->
        <div class="row mt-4">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Danh sách tour hiện có</h4>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Mã tour</th>
                        <th>Tên tour</th>
                        <th>Điểm đến</th>
                        <th>Ngày khởi hành</th>
                        <th>Giá (₫)</th>
                        <th>Tình trạng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>T001</td>
                        <td>Tour Đà Lạt 3N2Đ</td>
                        <td>Đà Lạt</td>
                        <td>15/10/2025</td>
                        <td>3.500.000</td>
                        <td><label class="badge badge-success">Còn chỗ</label></td>
                      </tr>
                      <tr>
                        <td>T002</td>
                        <td>Tour Phú Quốc 4N3Đ</td>
                        <td>Phú Quốc</td>
                        <td>20/10/2025</td>
                        <td>5.200.000</td>
                        <td><label class="badge badge-warning">Sắp đầy</label></td>
                      </tr>
                      <tr>
                        <td>T003</td>
                        <td>Tour Hà Giang 5N4Đ</td>
                        <td>Hà Giang</td>
                        <td>09/10/2025</td>
                        <td>6.800.000</td>
                        <td><label class="badge badge-danger">Đã khóa</label></td>
                      </tr>
                      <tr>
                        <td>T004</td>
                        <td>Tour Hạ Long 2N1Đ</td>
                        <td>Hạ Long</td>
                        <td>10/10/2025</td>
                        <td>2.200.000</td>
                        <td><label class="badge badge-success">Còn chỗ</label></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <footer class="mt-4 text-center">
          <p class="text-muted mb-0">© 2025 Quản lý tour du lịch - All rights reserved.</p>
        </footer>

      </div>
    </div>
  </div>

  <!-- plugins:js -->
  <script src="../../vendors/js/vendor.bundle.base.js"></script>
  <script src="../../js/off-canvas.js"></script>
  <script src="../../js/hoverable-collapse.js"></script>
  <script src="../../js/template.js"></script>
  <script src="../../js/settings.js"></script>
  <script src="../../js/todolist.js"></script>
</body>

</html>
