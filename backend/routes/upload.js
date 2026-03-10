const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config(); // Bắt buộc để đọc các biến CLOUDINARY trong file .env

const { verifyToken, isAdmin } = require('../middlewares/auth');

// 1. Cấu hình kết nối Cloudinary bằng chìa khóa trong file .env
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// 2. Cấu hình kho lưu trữ (Thay thế hoàn toàn cho diskStorage cũ)
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'ditagis_articles', // Tên thư mục nó sẽ tự tạo trên mây
        allowed_formats: ['jpeg', 'jpg', 'png', 'gif', 'webp'], // Tự động lọc đuôi file, không cần viết hàm fileFilter thủ công nữa
    }
});

// 3. Khởi tạo Multer
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Vẫn giữ giới hạn 5MB an toàn của bạn
});

// 4. Route xử lý upload
router.post('/', verifyToken, isAdmin, upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Vui lòng chọn một file ảnh hợp lệ.' });
        }

        // ĐIỀU KỲ DIỆU LÀ Ở ĐÂY: 
        // req.file.path bây giờ không phải là 'uploads/abc.jpg' nữa, 
        // mà nó chứa sẵn đường link URL vĩnh viễn từ Cloudinary (ví dụ: https://res.cloudinary.com/...)
        res.status(200).json({
            message: 'Tải ảnh lên mây thành công!',
            url: req.file.path
        });
    } catch (error) {
        console.error("Lỗi Upload:", error);
        res.status(500).json({ message: 'Lỗi server khi tải ảnh lên mây', error: error.message });
    }
});

// Bắt lỗi nếu file vượt quá dung lượng 5MB
router.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ message: 'Dung lượng ảnh vượt quá 5MB!' });
        }
    }
    res.status(500).json({ message: error.message });
});

module.exports = router;