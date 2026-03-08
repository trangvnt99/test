const bcrypt = require('bcrypt');
const db = require('./db');

async function createAdmin() {
    const username = 'admin';
    const plainPassword = '123456'; // Mật khẩu bạn muốn đặt cho admin
    const role = 'admin';

    try {
        // 1. Mã hóa mật khẩu
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(plainPassword, salt);

        // 2. Lưu vào database
        await db.query(
            'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
            [username, hashedPassword, role]
        );

        console.log("Đã tạo tài khoản admin thành công!");
        console.log(`Username: ${username} | Password: ${plainPassword}`);
        console.log(`Mật khẩu đã mã hóa trong DB: ${hashedPassword}`);

    } catch (error) {
        console.error("Lỗi:", error.message);
    }
    process.exit(); // Tắt script sau khi chạy xong
}

createAdmin();