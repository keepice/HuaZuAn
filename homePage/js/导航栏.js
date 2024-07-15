// 获取汉堡按钮和响应式导航菜单
const hamburgerButton = document.querySelector('.navbar-toggler');
const responsiveNav = document.querySelector('.responsive-nav');

// 定义一个函数来检查窗口大小并决定是否显示响应式导航菜单
function adjustResponsiveMenuVisibility() {
    if (window.innerWidth > 1500) {
        // 如果窗口宽度大于1500px，隐藏响应式导航菜单
        responsiveNav.style.display = 'none';
    } else {
        // 如果窗口宽度小于或等于1500px，允许显示响应式导航菜单
        // 注意：这里不直接设置display，而是保持它的状态，因为用户可能希望它显示
        // 如果你希望在此条件下总是显示，你可以设置为 'block'
    }
}

// 初始化时调用此函数
adjustResponsiveMenuVisibility();

// 添加窗口大小变化的事件监听器
window.addEventListener('resize', adjustResponsiveMenuVisibility);

// 添加按钮的点击事件监听器
hamburgerButton.addEventListener('click', function () {
    responsiveNav.style.display = responsiveNav.style.display === 'block' ? 'none' : 'block';
});

