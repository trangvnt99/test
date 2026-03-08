const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articles.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth');

// ==========================================
// CÁC ROUTE PUBLIC (Ai cũng có thể truy cập)
// ==========================================

// 1. Lấy danh sách tất cả bài viết
// Endpoint: GET /api/articles
router.get('/', articleController.getAllArticles);

// 2. Lấy chi tiết 1 bài viết cụ thể theo ID
// Endpoint: GET /api/articles/:id
router.get('/:id', articleController.getArticleById);


// ==========================================
// CÁC ROUTE PROTECTED (Chỉ Admin mới được thao tác)
// ==========================================

// 3. Thêm bài viết mới
// Endpoint: POST /api/articles
router.post('/', verifyToken, isAdmin, articleController.createArticle);

// 4. Cập nhật bài viết theo ID
// Endpoint: PUT /api/articles/:id
router.put('/:id', verifyToken, isAdmin, articleController.updateArticle);

// 5. Xóa bài viết theo ID
// Endpoint: DELETE /api/articles/:id
router.delete('/:id', verifyToken, isAdmin, articleController.deleteArticle);

// Thay đổi trạng thái Ẩn/Hiện: PATCH /api/articles/:id/visibility
router.patch('/:id/visibility', articleController.toggleVisibility);
module.exports = router;