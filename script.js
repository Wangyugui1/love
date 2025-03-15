document.addEventListener('DOMContentLoaded', function() {
    // 设置恋爱开始的日期（格式：年, 月-1, 日）
    // 注意：月份是从0开始的，所以1月是0，2月是1，以此类推
    const startDate = new Date(2025, 1, 25); // 这里设置为2025年2月25日
    
    function updateTimer() {
        const now = new Date();
        const difference = now - startDate;
        
        // 处理未来日期（如果现在的日期早于起始日期）
        if (difference < 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
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
        
        // 根据时间长度添加颜色渐变
        updateColors(days);
    }
    
    // 根据相处天数更新颜色
    function updateColors(days) {
        const intensity = Math.min(1, days / 1000); // 最大强度为1，在1000天时达到
        const r = Math.floor(231 * (1 - intensity) + 41 * intensity);
        const g = Math.floor(76 * (1 - intensity) + 128 * intensity);
        const b = Math.floor(60 * (1 - intensity) + 185 * intensity);
        
        // 更新数字颜色
        const timeElements = document.querySelectorAll('.time-block span:first-child');
        timeElements.forEach(element => {
            element.style.color = `rgb(${r}, ${g}, ${b})`;
        });
    }
    
    // 立即更新一次
    updateTimer();
    
    // 每秒更新一次
    setInterval(updateTimer, 1000);
    
    // 添加鼠标悬停效果
    const loveText = document.querySelector('.love-text');
    loveText.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 15px 30px rgba(31, 38, 135, 0.3)';
    });
    
    loveText.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 8px 32px rgba(31, 38, 135, 0.2)';
    });
});
