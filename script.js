function performSearch() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() !== '') {
        // 使用Google搜索
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
        window.open(searchUrl, '_blank');
    }
}

// 为搜索输入框添加回车键监听
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 