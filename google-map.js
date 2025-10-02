function initMap() {
    // Tạo map tại vị trí PTIT Hồ Chí Minh
    var map = L.map('map').setView([10.8507, 106.7714], 16);

    // Load tile từ OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Thêm marker tại PTIT HCM
    var marker = L.marker([10.8507, 106.7714]).addTo(map);

    // Thêm popup
    marker.bindPopup("<b>PTIT Hồ Chí Minh</b><br>Học viện Công nghệ Bưu chính Viễn thông").openPopup();
}

// Gọi khi load xong web
window.addEventListener("load", initMap);
