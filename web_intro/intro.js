




document.addEventListener('DOMContentLoaded', function () {
    // 確保 DOM 完全加載\
    var go_to_shop_btn = document.getElementById('go_to_shop_btn'); 
    var login_button = document.getElementById('login_buton'); 
    var loginStatus = localStorage.getItem('login');
    var username = localStorage.getItem('username');
    var levlel =localStorage.getItem('level');
    var dgd =localStorage.getItem('dgd');
    var dhd =localStorage.getItem('dhd');
    var navbar = document.getElementById('navbar-brand'); 
    var navbar_two = document.getElementById('navbar-brand_two'); 
    if (loginStatus === 'true') {
        
        login_button.textContent="登出"
        go_to_shop_btn.style.display=''
        navbar.style.display=''
        navbar_two.style.display=''
        document.getElementById('greeting_bar').textContent = `你好 ,  ${username}`;
        document.getElementById('info_bar').textContent = `等級: ${levlel} , 狗狗幣:  ${dgd} , 狗毛幣:  ${dhd}  `;
        
    }else{
        go_to_shop_btn.style.display="none"
        login_button.textContent="登入"
        navbar_two.style.display="none"
        document.getElementById('greeting_bar').textContent = "";
        document.getElementById('info_bar').textContent = "";
        navbar.style.display="none"
    }
    var shop_buton = document.getElementById('go_to_shop_btn'); 

    shop_buton.addEventListener('click', function () {
        
        window.location.href='../shopweb/shop.html'

    });
    
    login_button.addEventListener('click', function () {
        if (loginStatus === 'true') {
            localStorage.setItem('login', 'false');
            window.location.href='../index.html'
        }else{
            window.location.href='../webchange/login.html'
        }
        
    });

    
    var back_button = document.getElementById('back_button');
    back_button.addEventListener('click', function () {
        if (loginStatus === 'true') {
            window.location.href = '../logined_web/logined.html'
        }else{
            window.location.href = '../index.html'
        }
        
    });
});

