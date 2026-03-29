document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postName = urlParams.get('post');
    const viewer = document.getElementById('markdown-viewer');

    if (postName) {
        const filePath = `content/${postName}.md`;

        fetch(filePath)
            .then(response => {
                if (!response.ok) throw new Error("Không tìm thấy bài viết này!");
                return response.text();
            })
            .then(markdownText => {
                viewer.innerHTML = marked.parse(markdownText);
                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightElement(block);
                });
            })
            .catch(error => {
                viewer.innerHTML = `
                    <div style="text-align: center; padding: 40px 0;">
                        <h2 style="color:#ef4444;">❌ Lỗi 404</h2>
                        <p style="color: #64748b;">${error.message}</p>
                        <p>Đảm bảo file <b>${postName}.md</b> đang nằm trong thư mục <b>content</b> nhé!</p>
                    </div>
                `;
            });
    } else {
        viewer.innerHTML = `
            <h1 style="border:none; margin-bottom:10px;">Chào mừng đến với Blog! 🚀</h1>
            <p style="font-size: 1.1rem; color: #64748b;">Trang này dùng để đọc bài viết. Vui lòng quay lại Trang Chủ để chọn bài nhé.</p>
        `;
    }
});
