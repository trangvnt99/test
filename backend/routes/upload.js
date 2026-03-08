const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { verifyToken, isAdmin } = require('../middlewares/auth');

// 1. Cấu hình nơi lưu trữ và tên file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Lưu file vào thư mục uploads ở gốc dự án
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Đổi tên file để tránh trùng lặp: Thêm timestamp vào trước tên gốc
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

// 2. Bộ lọc file (Chỉ cho phép upload ảnh)
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    // Kiểm tra đuôi file
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    // Kiểm tra mimetype
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Chỉ cho phép tải lên các định dạng ảnh (jpeg, jpg, png, gif, webp)!'));
    }
};

// 3. Khởi tạo Multer với cấu hình trên
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn dung lượng file tối đa là 5MB
    fileFilter: fileFilter
});



// 4. Route xử lý upload (Bảo vệ bằng middleware: phải đăng nhập và là admin)
// 'image' là tên của field (key) mà client gửi lên chứa file
router.post('/', verifyToken, isAdmin, upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Vui lòng chọn một file ảnh hợp lệ.' });
        }

        // Tạo URL động dựa trên host hiện tại để client có thể truy cập ảnh
        // Ví dụ kết quả: http://localhost:5000/uploads/image-16789...jpg
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

        res.status(200).json({
            message: 'Tải ảnh lên thành công!',
            url: imageUrl
        });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server khi tải ảnh lên', error: error.message });
    }
});

module.exports = router;