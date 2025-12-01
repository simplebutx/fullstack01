// mongoDB 연결하기
const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB 연결 성공");
  } catch (err) {
    console.error("❌ MongoDB 연결 실패:", err);
    process.exit(1); // 실패하면 서버 종료
  }
}

  const db = mongoose.connection;
  connectDB();

  module.exports = db;