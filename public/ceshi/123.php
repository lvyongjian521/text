<?php
$username = 'root';
$password = 'lvyongjian';
if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW']) || ($_SERVER['PHP_AUTH_USER'] != $username) ||
($_SERVER['PHP_AUTH_PW'] != $password)){
 header('HTTP/1.1401 Unauthorized');
 header('WWW-Authenticate:Basic realm="Guitar Wars"');
 exit('<h2>502 bad gateway</h2>Sorry,you must enter a username and password to access this page.');
 }
?>

<html>

</html>