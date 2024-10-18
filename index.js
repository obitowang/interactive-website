
document.addEventListener('DOMContentLoaded', function () {

    // 確保 DOM 完全加載
    var button = document.getElementById('gameButton'); // 使用適合您按鈕的選擇器
    var button_intro = document.getElementById('intro_button'); // 使用適合您按鈕的選擇器
    var login_button = document.getElementById('login_buton'); 
    var audio = new Audio('clickgame/clicksound.mp3');
    
    login_button.addEventListener('click', function () {
        window.location.href='webchange/login.html'
    });
    button.addEventListener('click', function () {
        audio.load();
        audio.volume = 0.8;

        audio.play();
        document.getElementById('sad_dog_pic').src = "clickgame/happydog.png";
        setTimeout(function () {
            document.getElementById('sad_dog_pic').src = "clickgame/saddog.png";
            audio.pause();
            audio.currentTime = 0;
        }, 1000);
    });
    button_intro.addEventListener('click', function () {
        window.location.href='web_intro/intro.html'
    });
});


var images = [
    'poordogpic/poordog1.webp',
    'poordogpic/poordog2.webp',
    'poordogpic/poordog3.webp',
    'poordogpic/poordog4.webp',
    'poordogpic/poordog5.webp',
    'poordogpic/poordog6.webp',
    'poordogpic/poordog7.webp'
];
let currentIndex = 0; // 目前顯示的圖片索引
        const imageContainer = document.getElementById('poor_dog_pic');
        // 更換圖片的函數
        function changeImage() {
            document.getElementById('poor_dog_pic').src = images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length; // 更新索引以輪播到下一張圖片


        }

        // 每3秒更換一次圖片
        setInterval(changeImage, 4000);

        // 初始化第一張圖片
        changeImage();
