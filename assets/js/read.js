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
                let dateStr = "";
                // Xử lý YAML Frontmatter (---) ở đầu file
                const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;
                const match = markdownText.match(frontmatterRegex);
                if (match) {
                    const frontmatter = match[1];
                    const dateMatch = frontmatter.match(/date:\s*"?([^"\n]+)"?/);
                    if (dateMatch) {
                        let rawDate = dateMatch[1];
                        // Nếu date dạng YYYY-MM-DD thì chuyển qua DD/MM/YYYY
                        if (rawDate.includes("-")) {
                            const parts = rawDate.split("-");
                            if (parts.length === 3) dateStr = `${parts[2]}/${parts[1]}/${parts[0]}`;
                            else dateStr = rawDate;
                        } else {
                            dateStr = rawDate;
                        }
                    }
                    markdownText = markdownText.replace(frontmatterRegex, '');
                }

                viewer.innerHTML = marked.parse(markdownText);

                if (dateStr) {
                    const h1 = viewer.querySelector('h1');
                    const metaDiv = document.createElement('div');
                    metaDiv.className = 'post-publish-date';
                    metaDiv.innerHTML = `
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>Đăng ngày: <strong>${dateStr}</strong></span>
                    `;
                    if (h1) {
                        h1.insertAdjacentElement('afterend', metaDiv);
                    } else {
                        viewer.prepend(metaDiv);
                    }
                }

                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightElement(block);
                });
            })
            .catch(error => {
                viewer.innerHTML = `
                    <div style="text-align: center; padding: 40px 0;">
                        <h2 style="color:#ef4444;">Lỗi 404</h2>
                        <p style="color: #64748b;">${error.message}</p>
                        <p>Bài viết <b>${postName}.md</b> chưa có hoàn thiện vui lòng quay lại trang chủ để chọn bài viết khác nhé!</p>
                        <a href="index.html" style="color: #ef4444;">Quay lại trang chủ</a>
                    </div>
                `;
            });
    } else {
        viewer.innerHTML = `
            <h1 style="border:none; margin-bottom:10px;">Chào mừng đến với Blog!</h1>
            <p style="font-size: 1.1rem; color: #64748b;">Trang này dùng để đọc bài viết. Vui lòng quay lại Trang Chủ để chọn bài nhé.</p>
        `;
    }
});
