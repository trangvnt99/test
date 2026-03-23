import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Lấy dữ liệu từ localStorage mà bạn đã lưu lúc Login thành công
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Kiểm tra: Nếu KHÔNG có token HOẶC role KHÔNG PHẢI admin
  if (!token || role !== "admin") {
    // Đẩy người dùng về trang login
    // replace: true để người dùng không bấm "Back" quay lại trang Admin được
    return <Navigate to="/login" replace />;
  }

  // Nếu là Admin hợp lệ, cho phép render các component con (children)
  return children;
};

export default ProtectedRoute;
