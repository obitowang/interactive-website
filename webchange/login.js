

document.addEventListener('DOMContentLoaded', function () {
    var back_button = document.getElementById('back_button');
    back_button.addEventListener('click', function () {
        window.location.href = '../index.html'
    });
    var button_intro = document.getElementById('intro_button'); // 使用適合您按鈕的選擇器
    button_intro.addEventListener('click', function () {
        window.location.href='../web_intro/intro.html'
    });
    

});
function random_plus(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
    }
document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('login_submit').addEventListener('click', function () {
        event.preventDefault();
        // 用户输入的用户名和密码
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // 读取account.json

        fetch('account.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('网络响应不是OK');
                }
                return response.json();
            })
            .then(data => {
                const user = data.users.find(u => u.username === username);
             
                if (username=="" || password=="") {
                    document.getElementById('username').value = "";
                    document.getElementById('password').value = "";
                    alert("請輸入完整訊息");
                    return;
                }
                if (!user && password != null) {

                    alert("登入成功");
                    localStorage.setItem('login', 'true');
                    localStorage.setItem('username', username);
                    localStorage.setItem('level', random_plus(1,20));
                    localStorage.setItem('dgd', random_plus(160,900));
                    localStorage.setItem('dhd',random_plus(460,1900));
                    window.location.href = '../logined_web/logined.html'
                    
                }
                if (user.password !== password) {

                    // 只清除密码栏
                    document.getElementById('password').value = "";
                    alert("密碼錯誤");
                    return;
                }
                alert("登入成功");
                localStorage.setItem('login', 'true');
                localStorage.setItem('username', user.username);
                localStorage.setItem('level', user.level);
                localStorage.setItem('dgd', user.dgd);
                localStorage.setItem('dhd', user.dhd);
                window.location.href = '../logined_web/logined.html'
            })
            .catch(error => {
                console.error('获取account.json出错:', error);

            });
    });
});
