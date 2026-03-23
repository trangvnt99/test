-- -- phpMyAdmin SQL Dump
-- -- version 5.2.1
-- -- https://www.phpmyadmin.net/
-- --
-- -- Máy chủ: 127.0.0.1
-- -- Thời gian đã tạo: Th3 10, 2026 lúc 09:06 AM
-- -- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- -- Phiên bản PHP: 8.2.12

-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- START TRANSACTION;
-- SET time_zone = "+00:00";


-- /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
-- /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
-- /*!40101 SET NAMES utf8mb4 */;

-- --
-- -- Cơ sở dữ liệu: `ditagis`
-- --

-- -- --------------------------------------------------------

-- --
-- -- Cấu trúc bảng cho bảng `articles`
-- --

-- CREATE TABLE `articles` (
--   `id` int(11) NOT NULL,
--   `title` varchar(255) NOT NULL,
--   `content` text DEFAULT NULL,
--   `author` varchar(100) DEFAULT NULL,
--   `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
--   `is_visible` tinyint(1) DEFAULT 1
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --
-- -- Đang đổ dữ liệu cho bảng `articles`
-- --

-- INSERT INTO `articles` (`id`, `title`, `content`, `author`, `created_at`, `is_visible`) VALUES
-- (5, 'ĐÔ THỊ THÔNG MINH', 'Ngày nay GIS càng ngày càng phát triển, càng ngày càng nhiều người dùng đến GIS Thông minh luôn là thước đo trong tất cả các hình thái xã hội, Xã hội ngày nay đã mở ra những định nghĩa hoàn toàn khác, sự khác biệt lớn giữa những gì đang diễn ra và những gì đã diễn ra trong quá khứ không phải là điều duy chuyển từ thủ công sang công nghiệp kỹ thuật số mà là sự chuyển đổi để tạo nên những hệ thống không chỉ có trí thông minh của con người và những hệ thống ấy đã sáng tạo nên một định nghĩa mới của đô thị thế kỷ 21 ĐÔ THỊ THÔNG MINH.\nXem thêm tại: https://www.youtube.com/watch?v=uzrARS5qnSE', 'admin', '2025-10-15 19:37:08', 1),
-- (6, 'ddd', '<p>ddddd</p><p><br></p><p>ddd<img src=\"http://localhost:5000/uploads/image-1772910629386-762483934.jpg\"></p><p><br></p><p><br></p><p><br></p><p><br></p><p>dđ</p>', 'admin', '2026-03-07 19:10:45', 1),
-- (7, 'Đô thị thông minh', '<p>Ngày nay GIS càng ngày càng phát triển, càng ngày càng nhiều người dùng đến GIS Thông minh luôn là thước đo trong tất cả các hình thái xã hội, Xã hội ngày nay đã mở ra những định nghĩa hoàn toàn khác, sự khác biệt lớn giữa những gì đang diễn ra và những gì đã diễn ra trong quá khứ không phải là điều duy chuyển từ thủ công sang công nghiệp kỹ thuật số mà là sự chuyển đổi để tạo nên những hệ thống không chỉ có trí thông minh của con người và những hệ thống ấy đã sáng tạo nên một định nghĩa mới của đô thị thế kỷ 21 ĐÔ THỊ THÔNG MINH.</p><p class=\"ql-align-justify\">Xem thêm: https://www.youtube.com/watch?v=uzrARS5qnSE</p><p class=\"ql-align-justify\"><img src=\"http://localhost:3000/static/media/Capture.a9fc2efe495691dac901.png\"></p>', 'admin', '2026-03-08 18:14:30', 1);

-- -- --------------------------------------------------------

-- --
-- -- Cấu trúc bảng cho bảng `users`
-- --

-- CREATE TABLE `users` (
--   `id` int(11) NOT NULL,
--   `username` varchar(50) DEFAULT NULL,
--   `password` varchar(255) DEFAULT NULL,
--   `role` enum('admin','user') DEFAULT 'user'
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --
-- -- Đang đổ dữ liệu cho bảng `users`
-- --

-- INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
-- (1, 'admin1', 'ditagis20110994', 'admin'),
-- (2, 'admin', '$2b$10$NTXj8p2vI0WZnfNWYRZls.4q9z64zZ0Lhd8N6BfFwAqBKzp4.TzV2', 'admin');

-- --
-- -- Chỉ mục cho các bảng đã đổ
-- --

-- --
-- -- Chỉ mục cho bảng `articles`
-- --
-- ALTER TABLE `articles`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- Chỉ mục cho bảng `users`
-- --
-- ALTER TABLE `users`
--   ADD PRIMARY KEY (`id`),
--   ADD UNIQUE KEY `username` (`username`);

-- --
-- -- AUTO_INCREMENT cho các bảng đã đổ
-- --

-- --
-- -- AUTO_INCREMENT cho bảng `articles`
-- --
-- ALTER TABLE `articles`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

-- --
-- -- AUTO_INCREMENT cho bảng `users`
-- --
-- ALTER TABLE `users`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
-- COMMIT;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 10, 2026 lúc 09:06 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB

-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ditagis`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_visible` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=8;

--
-- Đang đổ dữ liệu cho bảng `articles`
--

INSERT INTO `articles` (`id`, `title`, `content`, `author`, `created_at`, `is_visible`) VALUES
(5, 'ĐÔ THỊ THÔNG MINH', 'Ngày nay GIS càng ngày càng phát triển, càng ngày càng nhiều người dùng đến GIS Thông minh luôn là thước đo trong tất cả các hình thái xã hội, Xã hội ngày nay đã mở ra những định nghĩa hoàn toàn khác, sự khác biệt lớn giữa những gì đang diễn ra và những gì đã diễn ra trong quá khứ không phải là điều duy chuyển từ thủ công sang công nghiệp kỹ thuật số mà là sự chuyển đổi để tạo nên những hệ thống không chỉ có trí thông minh của con người và những hệ thống ấy đã sáng tạo nên một định nghĩa mới của đô thị thế kỷ 21 ĐÔ THỊ THÔNG MINH.\nXem thêm tại: https://www.youtube.com/watch?v=uzrARS5qnSE', 'admin', '2025-10-15 19:37:08', 1),
(6, 'ddd', '<p>ddddd</p><p><br></p><p>ddd<img src=\"http://localhost:5000/uploads/image-1772910629386-762483934.jpg\"></p><p><br></p><p><br></p><p><br></p><p><br></p><p>dđ</p>', 'admin', '2026-03-07 19:10:45', 1),
(7, 'Đô thị thông minh', '<p>Ngày nay GIS càng ngày càng phát triển, càng ngày càng nhiều người dùng đến GIS Thông minh luôn là thước đo trong tất cả các hình thái xã hội, Xã hội ngày nay đã mở ra những định nghĩa hoàn toàn khác, sự khác biệt lớn giữa những gì đang diễn ra và những gì đã diễn ra trong quá khứ không phải là điều duy chuyển từ thủ công sang công nghiệp kỹ thuật số mà là sự chuyển đổi để tạo nên những hệ thống không chỉ có trí thông minh của con người và những hệ thống ấy đã sáng tạo nên một định nghĩa mới của đô thị thế kỷ 21 ĐÔ THỊ THÔNG MINH.</p><p class=\"ql-align-justify\">Xem thêm: https://www.youtube.com/watch?v=uzrARS5qnSE</p><p class=\"ql-align-justify\"><img src=\"http://localhost:3000/static/media/Capture.a9fc2efe495691dac901.png\"></p>', 'admin', '2026-03-08 18:14:30', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL UNIQUE,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('admin','user') DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=3;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(1, 'admin1', 'ditagis20110994', 'admin'),
(2, 'admin', '$2b$10$NTXj8p2vI0WZnfNWYRZls.4q9z64zZ0Lhd8N6BfFwAqBKzp4.TzV2', 'admin');

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;