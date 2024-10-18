document.addEventListener('DOMContentLoaded', function () {

    var shop_secret_song = 'false'
    var loginStatus = localStorage.getItem('login');
    var username = localStorage.getItem('username');
    var levlel =localStorage.getItem('level');
    var dgd =localStorage.getItem('dgd');
    var dhd =localStorage.getItem('dhd');
    var button_intro = document.getElementById('intro_button'); // 使用適合您按鈕的選擇器
    button_intro.addEventListener('click', function () {
        window.location.href='../web_intro/intro.html'
    });
    if (loginStatus === 'true') {
        document.getElementById('greeting_bar').textContent = `你好 ,  ${username}`;
        document.getElementById('info_bar').textContent = `等級: ${levlel} , 狗狗幣:  ${dgd} , 狗毛幣:  ${dhd}  `;
    }
    
    // 確保 DOM 完全加載
    var buy_button = document.getElementById('buy_button'); // 使用適合您按鈕的選擇器
    var buy_button_2 = document.getElementById('buy_button_2'); // 使用適合您按鈕的選擇器
    var buy_button_3 = document.getElementById('buy_button_3'); // 使用適合您按鈕的選擇器
    var logout_buton = document.getElementById('logout_buton'); 
    var buy_button_4 = document.getElementById('buy_button_4'); // 使用適合您按鈕的選擇器
    var buy_button_5 = document.getElementById('buy_button_5'); // 使用適合您按鈕的選擇器
    var buy_button_6 = document.getElementById('buy_button_6'); // 使用適合您按鈕的選擇器
    var img_button = document.getElementById('img_button'); // 使用適合您按鈕的選擇器
    logout_buton.addEventListener('click', function () {
        localStorage.setItem('login', 'false');
        window.location.href='../index.html'

    });
    var audio_song = new Audio('davidloman_song.wav');
    img_button.addEventListener('click', function () {
      
        if(shop_secret_song == "false"){
            audio_song.load();
            shop_secret_song = "true"
            audio_song.volume = 0.7;
            audio_song.play();

        }else{
            audio_song.load();
            audio_song.pause();
            audio_song.currentTime = 0;
            shop_secret_song = "false"
        }
        
    });
    var audio = new Audio('davidloman_sound.wav');
    buy_button.addEventListener('click', function () {
        alert("系統維護中 無法購買")
    });
    buy_button_2.addEventListener('click', function () {
        audio.volume = 0.7;
        audio.play();
        
        alert("系統維護中 無法購買")
    });
    buy_button_3.addEventListener('click', function () {
        alert("系統維護中 無法購買")
    });
    buy_button_4.addEventListener('click', function () {
        alert("系統維護中 無法購買")
    });
    buy_button_5.addEventListener('click', function () {
        alert("系統維護中 無法購買")
    });
    buy_button_6.addEventListener('click', function () {
        alert("系統維護中 無法購買")
    });
    var back_button = document.getElementById('back_button');

    back_button.addEventListener('click', function () {
        
        window.location.href = '../logined_web/logined.html'
    });
});


