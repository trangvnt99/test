import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext"; // 1. Import context
import { content as languageData } from "../data/language"; // 2. Import data
const TinTuc = () => {
  const { lang } = useLanguage(); // 3. Lấy ngôn ngữ hiện tại
  const t = languageData[lang]?.news || {}; // 4. Trỏ tới mục news
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    const fetchLatestArticles = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/articles");
        const data = await res.json();

        if (Array.isArray(data)) {
          // 1. Lọc ra các bài viết đang ở trạng thái Công khai (is_visible = true)
          const publicArticles = data.filter(
            (a) => a.is_visible !== 0 && a.is_visible !== false,
          );

          // 2. Chỉ cắt lấy 3 bài đầu tiên (vì Backend đã xếp bài mới nhất lên đầu rồi)
          setLatestArticles(publicArticles.slice(0, 3));
        }
      } catch (error) {
        console.error("Lỗi khi tải tin tức:", error);
      }
    };

    fetchLatestArticles();
  }, []);

  // Hàm bóc tách nội dung thô từ mã HTML của React-Quill để làm đoạn preview ngắn
  const getCleanText = (html) => {
    if (!html) return "";
    const div = document.createElement("div");
    div.innerHTML = html;
    let text = div.textContent || div.innerText || "";
    return text.length > 100 ? text.substring(0, 100) + " [...]" : text;
  };

  return (
    <>
      {/* */}
      <div className="grid grid-cols-7 mb-4">
        <h2 className="pl-5 text-3xl font-bold text-center col-span-2 md:col-span-1">
          {/* TIN TỨC */}
          {t.title}
        </h2>
        <div className="bg-slate-500 col-span-5 md:col-span-6 h-0.5 mt-auto mb-auto w-11/12"></div>
      </div>

      {/* */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-center items-center pr-20 pl-20 m-3 pb-12">
        {latestArticles.length === 0 ? (
          <div className="col-span-3 text-gray-500 italic mt-5">
            {/* Đang cập nhật tin tức... */}
            {t.loading}
          </div>
        ) : (
          latestArticles.map((article) => (
            <div
              key={article.id}
              className="hover:text-gray-800 w-10/12 mr-auto ml-auto h-full"
            >
              {/* Thêm class block và h-full cho thẻ Link để nó bám sát chiều cao */}
              <Link to={`/articles/${article.id}`} className="block h-full">
                {/* Xóa lg:h-64, thay bằng h-full */}
                <div className="h-full flex flex-col hover:shadow-2xl rounded-xl p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300 overflow-hidden bg-white border border-gray-100">
                  {/* Tiêu đề */}
                  <h5 className="font-bold text-xl uppercase line-clamp-2 mb-1">
                    {article.title}
                  </h5>

                  {/* Ngày tháng */}
                  <h6 className="text-gray-400 pb-3 mb-3 text-sm font-medium border-b border-gray-100">
                    {new Date(
                      article.created_at || article.create_at,
                    ).toLocaleDateString("vi-VN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </h6>

                  {/* Nội dung preview: Xóa flex-grow để chữ tự nhiên, không bị kéo giãn */}
                  <p className="text-gray-500 text-sm line-clamp-3 text-left">
                    {getCleanText(article.content)}
                  </p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default TinTuc;
