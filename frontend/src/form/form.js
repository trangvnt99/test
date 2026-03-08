import React, { useState } from 'react';

const NewArticleForm = () => {
    // Quản lý trạng thái của form
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    // const [categories, setCategories] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);
    const [tags, setTags] = useState([]);

    // Danh sách thể loại giả lập
    const categories = [
        { id: 1, name: 'Thông Báo - Kế Hoạch' },
        { id: 2, name: 'Dữ liệu đào tạo' },
        { id: 3, name: 'Công trình đã công bố' },
        { id: 4, name: 'Sản phẩm' },
        { id: 5, name: 'Tin tức' }
    ];

    // Danh sách tags giả lập
    const availableTags = [
        { id: 1, name: 'Tin nóng' },
        { id: 2, name: 'Phân tích' },
        { id: 3, name: 'Sự kiện' },
        { id: 4, name: 'Báo cáo' }
    ];

    // Xử lý khi form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Tạo object dữ liệu gửi lên backend
        const newArticle = {
            title,
            content,
            category_id: category,
            image_url: imageUrl ? URL.createObjectURL(imageUrl) : '',
            tags
        };

        console.log('Dữ liệu bài viết:', newArticle);

        // Thêm logic gọi API tại đây để gửi dữ liệu lên server
        // Ví dụ: fetch('/api/articles', { method: 'POST', body: JSON.stringify(newArticle), headers: { 'Content-Type': 'application/json' } })
        fetch('/api/articles', {
            method: 'POST',
            body: JSON.stringify(newArticle),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log('Thành công:', data))
            .catch(error => console.error('Lỗi:', error));
    };

    // Xử lý khi chọn ảnh
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImageUrl(e.target.files[0]);
        }
    };

    return (
        <div className='bg-blue-300 w-svh h-svh'>
            <h2 className='font-bold text-center text-4xl pt-4'>ĐĂNG TIN MỚI</h2>
            <form onSubmit={handleSubmit} className='bg-red-50'>
                {/* Tiêu đề bài viết */}
                <div>
                    <label className='font-bold text-left text-2xl m-4'>Tiêu đề:</label>
                    <br />
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className='border-2 border-gray-300 rounded-md p-2 m-4 w-1/2'
                    />
                </div>

                {/* Nội dung bài viết */}
                <div>
                    <label className='font-bold text-left text-2xl m-4'>Nội dung:</label>
                    <br />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className='border-2 border-gray-300 rounded-md p-2 m-4 w-11/12 h-7/12'
                    />
                </div>

                {/* Thể loại bài viết */}
                <div>
                    <label className='font-bold text-left text-2xl m-4'>Thể loại:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="" className=''>Chọn thể loại</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Upload ảnh */}
                <div>
                    <label className='font-bold text-left text-2xl m-4'>Hình ảnh:</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>

                {/* Tags */}
                <div>
                    <label className='font-bold text-left text-2xl m-4'>Tags:</label>
                    {availableTags.map((tag) => (
                        <div key={tag.id}>
                            <input
                                className='m-2 ml-10 text-xl'
                                type="checkbox"
                                id={`tag-${tag.id}`}
                                value={tag.id}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setTags([...tags, tag.id]);
                                    } else {
                                        setTags(tags.filter((t) => t !== tag.id));
                                    }
                                }
                                }
                            />
                            <label htmlFor={`tag-${tag.id}`}>{tag.name}</label>
                        </div>
                    ))}
                </div>

                {/* Nút submit */}
                <div className='m-4 text-center mb-10'>
                    <button type="submit" className='border-2 border-gray-300 mb-10 bg-white rounded-md text-2xl text-center p-2 pl-4 pr-4 font-bold hover:border-blue-500 hover:bg-blue-500 hover:text-white'>ĐĂNG TIN</button>
                </div>
            </form>
        </div>
    );
};

export default NewArticleForm;
