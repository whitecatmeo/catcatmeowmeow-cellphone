function checkLogin() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;   
        // 检查用户名和密码是否与预设值匹配
        if (username === "小可愛寶貝" && password === "15yearsbirthday5201314") {
                location.href=("https://whitecatmeo.github.io/catcatmeowmeow-cellphone/%E7%94%9F%E6%97%A5%E5%BD%B1%E7%89%87.html");
                return false;
        } else {
                location.href=("https://whitecatmeo.github.io/catcatmeowmeow-cellphone/%E5%AF%86%E7%A2%BC%E8%BC%B8%E5%85%A5%E9%8C%AF%E8%AA%A4.html");
                return false;
        }
}
