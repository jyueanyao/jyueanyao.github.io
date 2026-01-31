// 創建導航欄HTML內容
const createNavBar = () => {
  const navHTML = `
    <div class="container nav">
      <a href="index.html" class="brand" style="text-decoration: none;">
        <span class="brand-text">Julia Yao</span>
      </a>
      <nav class="nav__links" aria-label="Main navigation">
        <a href="https://drive.google.com/file/d/1p9JfSayPRHn9ztjnRlRQqekNmAJl0Klr/view?usp=drive_link" target="_blank" rel="noopener">Resume</a>
        <a href="https://www.linkedin.com/in/juliayao333/" target="_blank" rel="noopener">LinkedIn</a>
      </nav>
    </div>
  `;

  // 找到header元素並插入導航欄
  const header = document.querySelector('.header');
  if (header) {
    header.innerHTML = navHTML;
  }
};

// 當DOM加載完成時初始化導航欄
document.addEventListener('DOMContentLoaded', createNavBar);
