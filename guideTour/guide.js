document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('image');

    let isZoomed = false; // 用于跟踪当前是否处于放大状态

    image.addEventListener('click', function(event) {
        if (!isZoomed) {
            const img = event.currentTarget;

            // 创建放大后的图片副本
            const zoomedImg = img.cloneNode();
            zoomedImg.classList.add('zoomed-image');
            zoomedImg.style.transform = 'scale(2)'; // 设置放大倍数

            // 设置放大后图片的位置为原始图片的位置
            zoomedImg.style.position = 'absolute';
            zoomedImg.style.left = img.offsetLeft + 'px';
            zoomedImg.style.top = img.offsetTop + 'px';

            // 将放大后的图片添加到和原始图片同一层级
            img.parentElement.appendChild(zoomedImg);

            // 点击放大后的图片，返回原始大小
            zoomedImg.addEventListener('click', function() {
                zoomedImg.remove();
                isZoomed = false; // 设置为未放大状态
            });

            isZoomed = true; // 设置为放大状态
        } else {
            // 如果已经放大，则点击时移除放大图片并设置为未放大状态
            const zoomedImg = document.querySelector('.zoomed-image');
            if (zoomedImg) {
                zoomedImg.remove();
                isZoomed = false;
            }
        }
    });
});
