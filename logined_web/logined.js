
document.addEventListener('DOMContentLoaded', function () {
    let supportCount = 0;
    var loginStatus = localStorage.getItem('login');
    var username = localStorage.getItem('username');
    var levlel =localStorage.getItem('level');
    var dgd =localStorage.getItem('dgd');
    var dhd =localStorage.getItem('dhd');
    let now_dhd=Number(dhd)
    if (loginStatus === 'true') {
        document.getElementById('greeting_bar').textContent = `你好 ,  ${username}`;
        document.getElementById('info_bar').textContent = `等級: ${levlel} , 狗狗幣:  ${dgd} , 狗毛幣:  ${dhd}  `;
    }

    
    // 確保 DOM 完全加載
    var button = document.getElementById('gameButton'); // 使用適合您按鈕的選擇器
    var logout_buton = document.getElementById('logout_buton'); 
    var shop_buton = document.getElementById('shop_forward_buton'); 
   
    var audio = new Audio('../clickgame/clicksound.mp3');
    
    logout_buton.addEventListener('click', function () {
        localStorage.setItem('login', 'false');
        window.location.href='../index.html'

    });

    var get_button = document.getElementById('get_button'); 
    
    get_button.addEventListener('click', function () {
        if(supportCount<5){
            alert("點擊次數太少 不能提取!!!")
        }else{



            var quotient = Math.floor(supportCount/5);
            var reminder = supportCount%5
            now_dhd +=quotient
            document.getElementById('info_bar').textContent = `等級: ${levlel} , 狗狗幣:  ${dgd} , 狗毛幣:  ${now_dhd}  `;
            document.getElementById('supportCount').textContent = `助力次數: ${reminder}`;
            supportCount = reminder
           
            localStorage.setItem('dhd',now_dhd);
        }

    });

    shop_buton.addEventListener('click', function () {
        
        window.location.href='../shopweb/shop.html'

    });
    var button_intro = document.getElementById('intro_button'); // 使用適合您按鈕的選擇器
    button_intro.addEventListener('click', function () {
        window.location.href='../web_intro/intro.html'
    });
    button.addEventListener('click', function () {
        if (loginStatus === 'true') {
            
            supportCount++;
            document.getElementById('supportCount').textContent = `助力次數: ${supportCount}`;
        }
        audio.load();
        audio.volume = 0.8;
        audio.play();
        document.getElementById('sad_dog_pic').src = "../clickgame/happydog.png";
        setTimeout(function () {
            document.getElementById('sad_dog_pic').src = "../clickgame/saddog.png";
            audio.pause();
            audio.currentTime = 0;
        }, 1000);
    });
});



var images = [
    '../poordogpic/poordog1.webp',
    '../poordogpic/poordog2.webp',
    '../poordogpic/poordog3.webp',
    '../poordogpic/poordog4.webp',
    '../poordogpic/poordog5.webp',
    '../poordogpic/poordog6.webp',
    '../poordogpic/poordog7.webp'
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
