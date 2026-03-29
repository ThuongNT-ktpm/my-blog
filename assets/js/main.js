function renderPosts() {
    const postListContainer = document.getElementById('post-list');
    let htmlContent = '';

    posts.forEach(post => {
        let tagsHtml = post.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        htmlContent += `
            <div class="post-card">
                <h3>${post.title}</h3>
                <span class="date">${post.date}</span>
                <div class="tags-container">${tagsHtml}</div>
                <p>${post.description}</p>
                <a href="read.html?post=${post.filename}" class="read-more-btn">Đọc bài viết &rarr;</a>
            </div>
        `;
    });

    if (postListContainer) {
        postListContainer.innerHTML = htmlContent;
    }
}

document.addEventListener('DOMContentLoaded', renderPosts);
