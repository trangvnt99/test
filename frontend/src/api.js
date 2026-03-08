import axios from 'axios';

const API_URL = 'http://localhost:3000/api/articles';  // URL của backend

export const getArticles = () => {
    return axios.get(`${API_URL}/articles`);
};

export const getArticleById = (id) => {
    return axios.get(`${API_URL}/articles/${id}`);
};

// Gửi bài viết mới lên server
export const createArticle = (articleData) => {
    return axios.post(`${API_URL}/articles`, articleData);
};
