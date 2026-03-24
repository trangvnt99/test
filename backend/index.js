const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Load các biến từ file .env

// Import các file routes
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/articles');
const uploadRoutes = require('./routes/upload');

console.log("Check authRoutes:", typeof authRoutes);
console.log("Check articleRoutes:", typeof articleRoutes);
console.log("Check uploadRoutes:", typeof uploadRoutes);

const app = express();

// --- MIDDLEWARES ---
app.use(cors()); // Cấp quyền cho frontend (như React) gọi API
app.use(express.json()); // Phân tích dữ liệu JSON gửi từ client lên
app.use(express.urlencoded({ extended: true })); // Hỗ trợ nhận dữ liệu từ form

// Cho phép trình duyệt truy cập trực tiếp vào thư mục uploads để hiển thị ảnh
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- ROUTES ---
app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/upload', uploadRoutes);

// Route mặc định để test xem server có sống không
app.get('/', (req, res) => {
    res.send('Server cho db ditagis đang chạy ngon lành!');
});

// --- KHỞI ĐỘNG SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});