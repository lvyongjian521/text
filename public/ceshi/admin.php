<?php
$password = "lyj312325824";//密码 
$p = "";if(isset($_COOKIE["isview"]) and $_COOKIE["isview"] == $password){ 
$isview = true;}else{ 
if(isset($_POST["pwd"])){ 
if($_POST["pwd"] == $password){ 
setcookie("isview",$_POST["pwd"],time()+86400);$isview = true;}else{$p = (empty($_POST["pwd"])) ?"请输入密码." : "<div style=\"color:#F00;\">密码不正确.</div>";} 
}else{$isview = false;$p = "此页面加密请输入密码。";}}?>
<?php if($isview){?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<title>使用后请关闭！</title>
<style type="text/css">
body{background:none;}
.passport{width:400px;position:absolute;left:50%;
top:50%;margin-left:-200px;margin-top:-55px;font-size:18px;text-align:center;line-height:30px;/*color:red;*/}
</style>
</head>
<body>
<div class="passport">
你没有权限访问，请与网络管理员联系
</div>
</body>
</html> 
<?php }else{?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<title>此页面加密请输入密码！</title> 
<style type="text/css">
body{background:none;}
.passport{border:1px solid red;background-color:#FFFFCC;
width:400px;height:100px;position:absolute;left:49.9%;top:49.9%;margin-left:-200px;margin-top:-55px;
font-size:14px;text-align:center;line-height:30px;color:#746A6A;}
</style>
</head>
<body>
<div class="passport"><div style="padding-top:20px;"> 
<form action="" method="post" style="margin:0px;">
password:<input type="password" name="pwd" /> <input type="submit" value="OK" /> 
</form> 
<?php echo $p;?> 
</div></div> 
</body>
</html> 
<?php }?>