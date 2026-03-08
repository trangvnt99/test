const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Đăng ký tài khoản mới: POST /api/auth/register
router.post('/register', authController.register);

// Đăng nhập: POST /api/auth/login
router.post('/login', authController.login);

// Dòng này siêu quan trọng, thiếu nó là ra chữ "object" ngay!
module.exports = router;