const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function seedCollection(db, name, data) {
  const collection = db.collection(name);
  const count = await collection.countDocuments();
  if (count === 0) {
    await collection.insertMany(data);
    console.log(`✅ Seeded ${name}`);
  } else {
    console.log(`ℹ️ Collection ${name} already has ${count} documents`);
  }
}

async function initTripticksDB() {
  try {
    await client.connect();
    const db = client.db("Tripticks_db");

    // Seed countries
    const countries = [
      { _id: new ObjectId(), name: "Vietnam", description: "Rich culture and landscapes" },
      { _id: new ObjectId(), name: "Thailand", description: "Beaches and temples" },
      { _id: new ObjectId(), name: "Japan", description: "Tradition meets technology" }
    ];
    await seedCollection(db, "countries", countries);

    // Map for reuse
    const countryMap = Object.fromEntries(countries.map(c => [c.name, c._id]));

    // Seed hotels
    const hotels = [
      { name: "Hanoi Pearl Hotel", city: "Hanoi", country_id: countryMap["Vietnam"], rating: 4, price_per_night: 75 },
      { name: "Phuket Paradise Resort", city: "Phuket", country_id: countryMap["Thailand"], rating: 5, price_per_night: 95 },
      { name: "Tokyo Sky Hotel", city: "Tokyo", country_id: countryMap["Japan"], rating: 5, price_per_night: 150 }
    ];
    await seedCollection(db, "hotels", hotels);

    // Seed tours
    const tours = [
      { name: "Halong Bay Cruise", country_id: countryMap["Vietnam"], description: "Cruise through limestone islands", duration_days: 2, price: 200 },
      { name: "Bangkok Temple Tour", country_id: countryMap["Thailand"], description: "Visit iconic temples", duration_days: 2, price: 180 },
      { name: "Kyoto Heritage Tour", country_id: countryMap["Japan"], description: "Ancient temples and gardens", duration_days: 3, price: 350 }
    ];
    await seedCollection(db, "tours", tours);

    // Seed users
    const users = [
      { _id: new ObjectId(), username: "user1", email: "user1@gmail.com", password_hash: "hashed_pw_1", full_name: "Nguyen Van A", created_at: new Date() },
      { _id: new ObjectId(), username: "user2", email: "user2@gmail.com", password_hash: "hashed_pw_2", full_name: "Tran Thi B", created_at: new Date() }
    ];
    await seedCollection(db, "users", users);

    // Seed bookings
    const tourBookings = [
      { user_id: users[0]._id, tour_id: tours[0]._id, booking_date: new Date(), num_guests: 2, total_price: 400, status: "pending" },
      { user_id: users[1]._id, tour_id: tours[1]._id, booking_date: new Date(), num_guests: 1, total_price: 180, status: "confirmed" }
    ];
    await seedCollection(db, "tour_bookings", tourBookings);

    const hotelBookings = [
      { user_id: users[0]._id, hotel_id: hotels[0]._id, check_in: new Date("2025-10-01"), check_out: new Date("2025-10-05"), num_guests: 2, total_price: 300, status: "pending" },
      { user_id: users[1]._id, hotel_id: hotels[1]._id, check_in: new Date("2025-11-01"), check_out: new Date("2025-11-03"), num_guests: 1, total_price: 190, status: "confirmed" }
    ];
    await seedCollection(db, "hotel_bookings", hotelBookings);

    // Indexes for performance
    await db.collection("users").createIndex({ email: 1 }, { unique: true });
    await db.collection("hotels").createIndex({ city: 1 });
    await db.collection("tours").createIndex({ country_id: 1 });

    console.log("🎉 Cơ sở dữ liệu Tripticks đã được khởi tạo thành công!");
  } catch (err) {
    console.error("❌ Lỗi khởi tạo:", err);
  } finally {
    await client.close();
  }
}

initTripticksDB();