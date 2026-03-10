// File: middlewares/upload.js
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();

// 1. Cấu hình kết nối với tài khoản Cloudinary của bạn
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// 2. Cấu hình kho lưu trữ (Storage)
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'ditagis_articles', // Tên thư mục nó sẽ tự tạo trên Cloudinary để chứa ảnh của bạn
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'gif'] // Các đuôi ảnh được phép
    }
});

// 3. Khởi tạo Multer với kho lưu trữ Cloudinary
const upload = multer({ storage: storage });

module.exports = upload;