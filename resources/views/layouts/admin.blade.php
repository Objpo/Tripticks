<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title') | Admin - Pacific Travel</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="{{ asset('admin/css/style.css') }}" rel="stylesheet">
</head>
<body>
    <div class="sidebar shadow-sm">
        <div class="brand d-flex align-items-center gap-2 mb-3">
            <div class="brand-dot"></div>
            <h4 class="m-0 fw-bold">Pacific Admin</h4>
        </div>
        <a class="nav-link" href="{{ route('admin.dashboard') }}">Dashboard</a>
        <a class="nav-link" href="#">Quản lý Tour</a>
        <a class="nav-link" href="#">Quản lý Khách sạn</a>
        <a class="nav-link" href="#">Quản lý Đơn hàng</a>
        <a class="nav-link" href="#">Người dùng</a>
        <a class="nav-link" href="#">Blog</a>
        <a class="nav-link" href="#">Cài đặt</a>
    </div>

    <div class="page">
        <div class="topbar d-flex align-items-center justify-content-between">
            <div class="title">@yield('title')</div>
            <div class="actions d-flex align-items-center gap-3">
                <input type="text" class="form-control form-control-sm search" placeholder="Tìm kiếm ...">
                <button class="btn btn-outline-secondary btn-sm">Thông báo</button>
                <div class="avatar">A</div>
            </div>
        </div>

        <main class="content">
            @yield('content')
        </main>
    </div>

    @yield('scripts')
</body>
</html>
