const db = require('../db');

// 1. Lấy danh sách tất cả bài viết
exports.getAllArticles = async (req, res) => {
    try {
        const query = 'SELECT id, title, title_en, content, content_en, author, created_at, is_visible FROM articles ORDER BY created_at DESC';
        const [articles] = await db.query(query);

        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server khi tải danh sách bài viết", error: error.message });
    }
};

// 2. Lấy chi tiết 1 bài viết cụ thể theo ID 
exports.getArticleById = async (req, res) => {
    const articleId = req.params.id;
    try {
        const query = 'SELECT id, title, title_en, content, content_en, author, created_at, is_visible FROM articles WHERE id = ?';
        const [article] = await db.query(query, [articleId]);

        if (article.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy bài viết!" });
        }

        res.status(200).json(article[0]);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server khi tải bài viết", error: error.message });
    }
};

// 3. Thêm bài viết mới
exports.createArticle = async (req, res) => {
    const { title, title_en, content, content_en } = req.body;
    const authorName = req.user.username;

    if (!title || !content) {
        return res.status(400).json({ message: "Tiêu đề và nội dung (Tiếng Việt) không được để trống!" });
    }

    try {
        const query = 'INSERT INTO articles (title, title_en, content, content_en, author) VALUES (?, ?, ?, ?, ?)';
        const [result] = await db.query(query, [
            title,
            title_en || null,
            content,
            content_en || null,
            authorName
        ]);

        res.status(201).json({
            message: "Tạo bài viết thành công!",
            articleId: result.insertId
        });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server khi tạo bài viết", error: error.message });
    }
};

// 4. Cập nhật bài viết
exports.updateArticle = async (req, res) => {
    const articleId = req.params.id;
    const { title, title_en, content, content_en } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: "Tiêu đề và nội dung (Tiếng Việt) không được để trống!" });
    }

    try {
        const [existing] = await db.query('SELECT id FROM articles WHERE id = ?', [articleId]);
        if (existing.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy bài viết để cập nhật!" });
        }

        const query = 'UPDATE articles SET title = ?, title_en = ?, content = ?, content_en = ? WHERE id = ?';
        await db.query(query, [
            title,
            title_en || null,
            content,
            content_en || null,
            articleId
        ]);

        res.status(200).json({ message: "Cập nhật bài viết thành công!" });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server khi cập nhật bài viết", error: error.message });
    }
};

// 5. Xóa bài viết
exports.deleteArticle = async (req, res) => {
    const articleId = req.params.id;

    try {
        const [existing] = await db.query('SELECT id FROM articles WHERE id = ?', [articleId]);
        if (existing.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy bài viết để xóa!" });
        }

        await db.query('DELETE FROM articles WHERE id = ?', [articleId]);

        res.status(200).json({ message: "Xóa bài viết thành công!" });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server khi xóa bài viết", error: error.message });
    }
};

// 6. Ẩn/Hiện bài viết 
exports.toggleVisibility = async (req, res) => {
    const { id } = req.params;
    try {
        const [articles] = await db.query('SELECT is_visible FROM articles WHERE id = ?', [id]);
        if (articles.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy bài viết!" });
        }

        const newStatus = !articles[0].is_visible;

        await db.query('UPDATE articles SET is_visible = ? WHERE id = ?', [newStatus, id]);

        res.status(200).json({ message: "Cập nhật trạng thái thành công!", is_visible: newStatus });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};