<?php
session_start();
if(isset($_POST['password']) && $_POST['password'] == 'admin'){
    $_SESSION['ok'] = 1;
    header('location:?');
}
if(!isset($_SESSION['ok'])){
    exit('
        <form method="post">
            密码：<input type="password" name="password" />
            <input type="submit" value="登陆" />
        </form>
    ');
}
?><html>
<head>
<title>title</title>
</head>
<body>
恭喜你你什么也没有找到
</body>
</html>