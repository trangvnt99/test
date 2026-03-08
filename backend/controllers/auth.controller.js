const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// ==========================================
// 1. ĐĂNG KÝ NGƯỜI DÙNG MỚI
// ==========================================
exports.register = async (req, res) => {
    // Lấy dữ liệu từ client gửi lên (bỏ email vì DB không có)
    const { username, password, role } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!" });
    }

    try {
        // 1. Kiểm tra username đã tồn tại chưa
        const [existingUser] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Tên đăng nhập đã tồn tại!" });
        }

        // 2. Băm mật khẩu (Salt round = 10)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Set quyền mặc định là 'user' nếu lúc đăng ký không truyền lên role
        const userRole = role || 'user';

        // 4. Lưu vào database
        await db.query(
            'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
            [username, hashedPassword, userRole]
        );

        res.status(201).json({ message: "Đăng ký thành công!" });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};

// ==========================================
// 2. ĐĂNG NHẬP
// ==========================================
exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!" });
    }

    try {
        // 1. Tìm user trong DB theo username
        const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if (users.length === 0) {
            return res.status(404).json({ message: "Người dùng không tồn tại!" });
        }

        const user = users[0];

        // 2. Kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Mật khẩu không chính xác!" });
        }

        // 3. Tạo JWT Token (Gói cả id, username và role vào token)
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        // 4. Trả về thông tin (ẩn mật khẩu đi trước khi gửi về client)
        const { password: _, ...userWithoutPassword } = user;
        res.status(200).json({
            message: "Đăng nhập thành công",
            token,
            user: userWithoutPassword
        });

    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};