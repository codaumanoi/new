//document.querySelector('h4').style.display = 'none'; // Ẩn phần tử h4
document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('T ko phải là lập trình viên chuyên nghiệp nên chỉ được có vậy thôi ok:))))');
});
document.getElementById('checkButton').addEventListener('click', function() {
    const inputWord = document.getElementById('inputWord').value.trim();
    const message = document.getElementById('message');
    if (inputWord === 'H2SO') 
        {
            message.textContent = 'Welcome to Đế Chế Mất Não :))';
            message.style.color = 'green';
            document.getElementById('openButton').addEventListener('click', function() {
                const envelope = document.getElementById('envelope');
                envelope.classList.toggle('open');
            const snowflakes = document.querySelectorAll('.snowflake');
            snowflakes.forEach(snowflake => {
                const randomX = Math.random() * window.innerWidth;
                const randomDuration = Math.random() * 3 + 4; // Thời gian rơi từ x đến y giây
                const randomDelay = Math.random() * 6; // Độ trễ ngẫu nhiên
            
                snowflake.style.left = `${randomX}px`;
                snowflake.style.animationDuration = `${randomDuration}s`;
                snowflake.style.animationDelay = `${randomDelay}s`;
       
            });
            document.getElementById('openButton').addEventListener('click', function() {
                document.getElementById('openButton').style.display = 'none'; // Ẩn nút khi nhấn
                document.getElementById('toggleButton').style.display = 'inline-block'; // Hiển thị nút khác
            });
            
            document.getElementById('toggleButton').addEventListener('click', function() {
                document.getElementById('caythong').style.display = 'inline-block'; // Hiển thị lại nút
                document.getElementById('toggleButton').style.display = 'none'; // Ẩn nút hiển thị
            });
        });
        } 
    else 
    
    {
        const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
    const randomX = Math.random() * window.innerWidth;
    const randomDuration = Math.random() * 999 + 9999; // Thời gian rơi từ 2 đến 5 giây
    const randomDelay = Math.random() * 99999; // Độ trễ ngẫu nhiên

    snowflake.style.left = `${randomX}px`;
    snowflake.style.animationDuration = `${randomDuration}s`;
    snowflake.style.animationDelay = `${randomDelay}s`;
});
        message.textContent = 'Bro không phải là thành viên của đế chế!';
        message.style.color = 'red';
    }
});
