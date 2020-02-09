<?php
header("Access-Control-Allow-Origin:*");

header('Access-Control-Allow-Methods:POST');

header('Access-Control-Allow-Headers:x-requested-with, content-type');
$con = new mysqli('localhost', 'root', '123456', 'meilele');
    // 删除数据已有的数据
    $phone = $_REQUEST["phone"];
    $delete = "delete from user1 where phone='$phone';";
    $con->query($delete)===TRUE;
   
?>