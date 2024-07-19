document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    function updateActivePage() {
        pages.forEach((page, index) => {
            if (index === currentPage) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    function scrollToPage(pageIndex) {
        if (pageIndex >= 0 && pageIndex < pages.length) {
            currentPage = pageIndex;
            updateActivePage();
            pages[currentPage].scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'start' });
        } else if (pageIndex >= pages.length) {
            // If scrolling beyond the last page, loop back to the first page
            currentPage = 0;
            updateActivePage();
            pages[currentPage].scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'start' });
        }
    }

    document.addEventListener('wheel', function (event) {
        event.preventDefault();
        if (event.deltaY > 0) {
            // Scrolling down
            scrollToPage(currentPage + 1);
        } else if (event.deltaY < 0) {
            // Scrolling up
            scrollToPage(currentPage - 1);
        }
    });

    updateActivePage(); // Initial state
});
// 获取汉堡按钮和响应式导航菜单
const hamburgerButton = document.querySelector('.navbar-toggler');
const responsiveNav = document.querySelector('.responsive-nav');

// 定义一个函数来检查窗口大小并决定是否显示响应式导航菜单
function adjustResponsiveMenuVisibility() {
    if (window.innerWidth > 0) {
        // 如果窗口宽度大于1000px，隐藏响应式导航菜单
        responsiveNav.style.display = 'none';
    } else {
        // 如果窗口宽度小于或等于1000px，允许显示响应式导航菜单
        // 注意：这里不直接设置display，而是保持它的状态，因为用户可能希望它显示
        // 如果你希望在此条件下总是显示，你可以设置为 'block'
    }
}

// 初始化时调用此函数
adjustResponsiveMenuVisibility();

// 添加窗口大小变化的事件监听器
window.addEventListener('resize', adjustResponsiveMenuVisibility);

// 添加汉堡按钮的点击事件监听器
hamburgerButton.addEventListener('click', function () {
    responsiveNav.style.display = responsiveNav.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('click', function (event) {
    // 检查点击事件是否发生在响应式导航菜单或汉堡按钮上
    const isClickInsideNav = responsiveNav.contains(event.target);
    const isClickOnHamburger = event.target === hamburgerButton;

    // 如果点击事件发生在响应式导航菜单以外且不是汉堡按钮，则关闭导航栏
    if (!isClickInsideNav && !isClickOnHamburger) {
        responsiveNav.style.display = 'none';
    }
});
