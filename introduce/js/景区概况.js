document.addEventListener('DOMContentLoaded', function () {
    const slideshow = document.querySelector('.slideshow');
    const images = slideshow.querySelectorAll('img');
    let currentIndex = 0;
    let intervalId;

    // 初始化，只显示第一张图片
    showImage(currentIndex);

    // 点击图片切换下一张
    slideshow.addEventListener('click', function () {
        clearInterval(intervalId); // 清除自动播放的定时器
        nextImage();
        intervalId = setInterval(nextImage, 3000); // 重新设置自动播放
    });

    // 自动播放
    intervalId = setInterval(nextImage, 3000);

    function showImage(index) {
        // 先隐藏所有图片
        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease-in-out'; // 添加渐变效果
        });

        // 显示当前图片
        images[index].style.opacity = '1';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
});
// 获取汉堡按钮和响应式导航菜单
const hamburgerButton = document.querySelector('.navbar-toggler');
const responsiveNav = document.querySelector('.responsive-nav');

// 定义一个函数来检查窗口大小并决定是否显示响应式导航菜单
function adjustResponsiveMenuVisibility() {
    if (window.innerWidth > 0) {
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
document.addEventListener('click', function (event) {
    // 检查点击事件是否发生在响应式导航菜单或汉堡按钮上
    const isClickInsideNav = responsiveNav.contains(event.target);
    const isClickOnHamburger = event.target === hamburgerButton;

    // 如果点击事件发生在响应式导航菜单以外且不是汉堡按钮，则关闭导航栏
    if (!isClickInsideNav && !isClickOnHamburger) {
        responsiveNav.style.display = 'none';
    }
});
