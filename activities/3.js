// 获取当前时间并更新页面上的时间显示
function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = `${currentTime}`;
}

// 更新时间间隔为每秒钟
setInterval(updateTime, 1000);

// 页面加载时先运行一次更新时间函数，以显示初始时间
updateTime();
