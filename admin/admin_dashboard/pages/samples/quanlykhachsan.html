<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quản lý khách sạn quốc tế</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f8f9fa;
      padding: 20px;
    }
    h2 {
      text-align: center;
      color: #007bff;
    }
    .container {
      display: flex;
      gap: 20px;
      margin-top: 30px;
    }
    .column {
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      flex: 1;
      padding: 15px;
      height: 450px;
      overflow-y: auto;
    }
    .item {
      padding: 10px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      transition: background 0.2s;
    }
    .item:hover {
      background: #f1f1f1;
    }
    .selected {
      background: #e0f0ff;
    }
    .hotel-info h3 {
      color: #28a745;
    }
    .badge {
      padding: 3px 8px;
      border-radius: 4px;
      color: white;
      font-size: 0.9em;
    }
    .badge-booked {
      background-color: #dc3545;
    }
    .badge-empty {
      background-color: #28a745;
    }
  </style>
</head>
<body>
  <h2>HỆ THỐNG QUẢN LÝ KHÁCH SẠN QUỐC TẾ</h2>

  <div class="container">
    <div class="column" id="countries">
      <h3>🌍 Quốc gia</h3>
    </div>
    <div class="column" id="hotels">
      <h3>🏨 Khách sạn</h3>
    </div>
    <div class="column" id="hotel-info">
      <h3>📋 Thông tin chi tiết</h3>
    </div>
  </div>

  <script>
    const data = {
      "Việt Nam": [
        {
          name: "Vinpearl Đà Nẵng",
          rooms: [
            { type: "Deluxe", amenities: ["WiFi", "Hồ bơi", "Ăn sáng"], booked: true, customer: "Nguyễn Văn A" },
            { type: "Standard", amenities: ["WiFi", "Bữa sáng"], booked: false },
            { type: "Suite", amenities: ["WiFi", "Spa", "Ban công", "Ăn sáng"], booked: true, customer: "Trần Thị B" }
          ]
        },
        {
          name: "The Reverie Sài Gòn",
          rooms: [
            { type: "Standard", amenities: ["WiFi"], booked: false },
            { type: "Deluxe", amenities: ["WiFi", "Ăn sáng"], booked: false },
            { type: "Suite", amenities: ["WiFi", "Hồ bơi", "Spa"], booked: true, customer: "John Smith" }
          ]
        }
      ],
      "Thái Lan": [
        {
          name: "Bangkok Palace",
          rooms: [
            { type: "Standard", amenities: ["WiFi"], booked: true, customer: "Sara Tan" },
            { type: "Deluxe", amenities: ["WiFi", "Hồ bơi"], booked: false }
          ]
        },
        {
          name: "Phuket Resort",
          rooms: [
            { type: "Deluxe", amenities: ["WiFi", "Ăn sáng", "Spa"], booked: false },
            { type: "Suite", amenities: ["WiFi", "Hồ bơi", "Ban công"], booked: true, customer: "Mark Lee" }
          ]
        }
      ]
      // bạn có thể thêm các quốc gia khác tương tự ở đây
    };

    const countryCol = document.getElementById("countries");
    const hotelCol = document.getElementById("hotels");
    const infoCol = document.getElementById("hotel-info");

    function showCountries() {
      countryCol.innerHTML = "<h3>🌍 Quốc gia</h3>";
      Object.keys(data).forEach(country => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = country;
        div.onclick = () => showHotels(country);
        countryCol.appendChild(div);
      });
    }

    function showHotels(country) {
      hotelCol.innerHTML = "<h3>🏨 Khách sạn</h3>";
      infoCol.innerHTML = "<h3>📋 Thông tin chi tiết</h3>";

      data[country].forEach(hotel => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = hotel.name;
        div.onclick = () => showHotelInfo(hotel);
        hotelCol.appendChild(div);
      });
    }

    function showHotelInfo(hotel) {
      infoCol.innerHTML = `<h3>${hotel.name}</h3>`;

      const total = hotel.rooms.length;
      const booked = hotel.rooms.filter(r => r.booked).length;

      const info = document.createElement("div");
      info.className = "hotel-info";
      info.innerHTML = `
        <p><b>Tổng số phòng:</b> ${total}</p>
        <p><b>Phòng đã có khách:</b> ${booked}</p>
        <hr>
        <h4>Danh sách phòng:</h4>
        ${hotel.rooms.map(r => `
          <p>
            <b>Loại phòng:</b> ${r.type} <br>
            <b>Tiện ích:</b> ${r.amenities.join(", ")} <br>
            ${r.booked 
              ? `<span class="badge badge-booked">Đã đặt</span> (Khách: ${r.customer})`
              : `<span class="badge badge-empty">Trống</span>`}
          </p>
          <hr>
        `).join('')}
      `;
      infoCol.appendChild(info);
    }

    showCountries();
  </script>
</body>
</html>
