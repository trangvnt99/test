import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { content as languageData } from "../data/language";
export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const { lang } = useLanguage();
  const t = languageData[lang].articles;

  // const userRole = localStorage.getItem("role");

  const defaultThumbnail =
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000";

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch("http://localhost:5000/api/articles");
        const data = await res.json();
        setArticles(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Lỗi tải dữ liệu:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [lang]); // Fetch lại nếu ngôn ngữ thay đổi (nếu API có hỗ trợ)

  const getCleanText = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    let text = div.textContent || div.innerText || "";
    return text.length > 150 ? text.substring(0, 150) + "..." : text;
  };

  //   if (loading)
  //     return (
  //       <div className="loading-esri">
  //         <div className="spinner-border text-primary" role="status"></div>
  //       </div>
  //     );
  if (loading)
    return (
      <div className="loading-esri">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">{t.loading}</span>
        </div>
      </div>
    );

  return (
    <div className="esri-wrapper bg-white min-vh-100">
      {/* --- HEADER SECTION --- */}
      <header className="esri-header-section py-5">
        <div className="esri-container">
          <nav className="mb-2">
            <span className="esri-breadcrumb">
              {/* TRANG CHỦ / TIN TỨC & THÔNG BÁO */}
              {t.breadcrumb}
            </span>
          </nav>
          {/* <h1 className="esri-main-title">Cộng đồng Dữ liệu Địa không gian</h1> */}
          <h1 className="esri-main-title">{t.main_title}</h1>
          <p className="esri-sub-title text-muted">
            {/* Cập nhật những thông tin mới nhất về công nghệ, dữ liệu và các thông
            báo quan trọng từ hệ thống DITAGIS. */}
            {t.sub_title}
          </p>
        </div>
      </header>

      {/* --- ARTICLES LIST --- */}
      <main className="esri-content-section pb-5">
        <div className="esri-container">
          {articles.length === 0 ? (
            // <div className="p-5 text-center border">Chưa có bài viết nào.</div>
            <div className="p-5 text-center border">{t.no_articles}</div>
          ) : (
            // <div className="esri-grid">
            //   {articles.map((a) => (
            //     <article key={a.id} className="esri-article-card">
            //       <div className="row g-0">
            //         <div className="col-md-5 position-relative">
            //           <Link to={`/articles/${a.id}`}>
            //             <img
            //               src={a.thumbnail || defaultThumbnail}
            //               className="esri-card-img"
            //               alt={a.title}
            //             />
            //           </Link>
            //           <span className="esri-card-tag">Tin tức</span>
            //         </div>
            //         <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
            //           <div>
            //             <div className="esri-card-meta small mb-2">
            //               <span className="text-dark fw-bold">
            //                 {a.author || "admin"}
            //               </span>
            //               <span className="mx-2">•</span>
            //               <span>
            //                 {new Date(
            //                   a.created_at || a.create_at,
            //                 ).toLocaleDateString("vi-VN")}
            //               </span>
            //             </div>
            //             <h2 className="esri-card-h3">
            //               <Link to={`/articles/${a.id}`}>{a.title}</Link>
            //             </h2>
            //             <p className="esri-card-excerpt">
            //               {getCleanText(a.content)}
            //             </p>
            //           </div>
            //           <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
            //             <Link
            //               to={`/articles/${a.id}`}
            //               className="esri-link-detail"
            //             >
            //               CHI TIẾT <i className="bi bi-arrow-right ms-1"></i>
            //             </Link>
            //           </div>
            //         </div>
            //       </div>
            //     </article>
            //   ))}
            // </div>
            <div className="esri-grid">
              {articles.map((a) => (
                <article key={a.id} className="esri-article-card">
                  <div className="row g-0">
                    <div className="col-md-5 position-relative">
                      <Link to={`/articles/${a.id}`}>
                        <img
                          src={a.thumbnail || defaultThumbnail}
                          className="esri-card-img"
                          alt={a.title}
                        />
                      </Link>
                      <span className="esri-card-tag">{t.tag_news}</span>
                    </div>
                    <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
                      <div>
                        <div className="esri-card-meta small mb-2">
                          <span className="text-dark fw-bold">
                            {a.author || t.author_default}
                          </span>
                          <span className="mx-2">•</span>
                          <span>
                            {new Date(
                              a.created_at || a.create_at,
                            ).toLocaleDateString(
                              lang === "vi" ? "vi-VN" : "en-US",
                            )}
                          </span>
                        </div>
                        <h2 className="esri-card-h3">
                          <Link to={`/articles/${a.id}`}>{a.title}</Link>
                        </h2>
                        <p className="esri-card-excerpt">
                          {getCleanText(a.content)}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                        <Link
                          to={`/articles/${a.id}`}
                          className="esri-link-detail"
                        >
                          {t.read_more}{" "}
                          <i className="bi bi-arrow-right ms-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* --- CUSTOM CSS FIX LỆCH LỀ --- */}
      <style>{`
                /* ESRI CONTAINER: Đảm bảo khớp với Navbar của bạn */
                .esri-container {
                    width: 100%;
                    max-width: 1240px; /* Độ rộng tối đa */
                    margin: 0 auto;
                    padding: 0 40px; /* Đẩy lùi vào để khớp với Logo */
                }

                @media (max-width: 992px) {
                    .esri-container { padding: 0 20px; }
                }

                .esri-main-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #323232;
                    letter-spacing: -0.5px;
                }

                .esri-breadcrumb {
                    font-size: 0.75rem;
                    color: #005e95;
                    font-weight: 600;
                }

                /* Button đúng kiểu ESRI: Vuông, xanh đậm */
                .esri-btn-new {
                    background-color: #005e95;
                    color: white;
                    padding: 10px 24px;
                    text-decoration: none;
                    display: inline-block;
                    font-weight: 600;
                    border-radius: 2px;
                    transition: all 0.2s;
                }
                .esri-btn-new:hover {
                    background-color: #004670;
                    color: white;
                }

                /* Card ngang chuẩn ESRI Blog */
                .esri-article-card {
                    border: 1px solid #e0e0e0;
                    margin-bottom: 2rem;
                    transition: all 0.3s ease;
                }
                .esri-article-card:hover {
                    border-color: #005e95;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
                }

                .esri-card-img {
                    width: 100%;
                    height: 260px;
                    object-fit: cover;
                }

                .esri-card-tag {
                    position: absolute;
                    bottom: 0; left: 0;
                    background: #005e95;
                    color: white;
                    padding: 4px 12px;
                    font-size: 0.7rem;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                .esri-card-h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                }
                .esri-card-h3 a {
                    color: #323232;
                    text-decoration: none;
                }
                .esri-card-h3 a:hover {
                    color: #005e95;
                }

                .esri-card-excerpt {
                    font-size: 0.95rem;
                    color: #565656;
                    line-height: 1.6;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .esri-link-detail {
                    color: #005e95;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.8rem;
                }

                .loading-esri {
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
    </div>
  );
}
