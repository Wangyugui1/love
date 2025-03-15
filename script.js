document.addEventListener('DOMContentLoaded', function() {
    // 设置恋爱开始的日期（格式：年, 月-1, 日）
    // 注意：月份是从0开始的，所以1月是0，2月是1，以此类推
    const startDate = new Date(2025, 1, 25); // 这里设置为2025年2月25日
    
    function updateTimer() {
        const now = new Date();
        const difference = now - startDate;
        
        // 计算天数、小时、分钟和秒数
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // 更新HTML元素
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // 立即更新一次
    updateTimer();
    
    // 每秒更新一次
    setInterval(updateTimer, 1000);
});
