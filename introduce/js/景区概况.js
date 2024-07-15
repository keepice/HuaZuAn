document.addEventListener('DOMContentLoaded', function() {
    const slideshow = document.querySelector('.slideshow');
    const images = slideshow.querySelectorAll('img');
    let currentIndex = 0;
    let intervalId;

    // 初始化，只显示第一张图片
    showImage(currentIndex);

    // 点击图片切换下一张
    slideshow.addEventListener('click', function() {
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

// 添加汉堡按钮的点击事件监听器
hamburgerButton.addEventListener('click', function() {
    responsiveNav.style.display = responsiveNav.style.display === 'block' ? 'none' : 'block';
});