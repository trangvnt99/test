const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware xác thực Token chung
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Truy cập bị từ chối!" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Lưu thông tin user (id, username, role) vào req
        next();
    } catch (err) {
        res.status(400).json({ message: "Token không hợp lệ!" });
    }
};

// Middleware chỉ dành cho Admin
const isAdmin = (req, res, next) => {
    // Khi login, bạn cần lưu 'role' vào JWT payload để ở đây kiểm tra được
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).json({ message: "Bạn không có quyền thực hiện hành động này!" });
    }
};

module.exports = { verifyToken, isAdmin };