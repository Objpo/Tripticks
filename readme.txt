PACIFIC ADMIN VIEWS (Laravel Blade)
-----------------------------------

1) Copy cấu trúc vào dự án Laravel của bạn:
   resources/views/layouts/admin.blade.php
   resources/views/admin/dashboard.blade.php
   public/admin/css/style.css

2) Thêm route nhanh trong routes/web.php:
   Route::get('/admin', function () { return view('admin.dashboard'); })->name('admin.dashboard');

3) Truy cập: http://your-app.test/admin

Màu sắc, bố cục và cảm hứng lấy từ template client (cam - trắng - xanh lá).
Bạn có thể mở rộng thêm các trang: tours.blade.php, hotels.blade.php, bookings.blade.php...
