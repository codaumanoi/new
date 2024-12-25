const snowflakes = document.querySelectorAll('.snowflake');

snowflakes.forEach(snowflake => {
    const randomX = Math.random() * window.innerWidth;
    const randomDuration = Math.random() * 7 + 6; // Thời gian rơi từ 2 đến 5 giây
    const randomDelay = Math.random() * 5; // Độ trễ ngẫu nhiên

    snowflake.style.left = `${randomX}px`;
    snowflake.style.animationDuration = `${randomDuration}s`;
    snowflake.style.animationDelay = `${randomDelay}s`;
});