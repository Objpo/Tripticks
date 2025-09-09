document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([40.69847032728747, -73.9514422416687], 13);

    // Thêm tile từ OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
    }).addTo(map);

    // Marker
    L.marker([40.69847032728747, -73.9514422416687])
        .addTo(map)
        .bindPopup("Tripticks Travel Agency")
        .openPopup();
});
