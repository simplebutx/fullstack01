const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db');
const app = express();

// JSON 파싱
app.use(express.json());

// CORS 설정
const allowedOrigins = [
  'http://localhost:5173',
   env.FRONTEND_URL,
];

app.use(
  cors({
    origin(origin, callback) {
      // Postman 같은 비브라우저 요청
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      console.log('❌ CORS 차단:', origin);
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);


// 테스트용 API
app.get('/api/hello', (req, res) => {
  res.json({ msg: '백엔드에서 온 메시지!' });
});

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버 열림: http://localhost:${PORT}`);
});
