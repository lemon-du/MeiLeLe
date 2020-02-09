<?php
header("Access-Control-Allow-Origin:*");

header('Access-Control-Allow-Methods:POST');

header('Access-Control-Allow-Headers:x-requested-with, content-type');
$con = new mysqli('localhost', 'root', '123456', 'meilele');
    // 存储数据到已有的数据库表中
    $name = $_REQUEST["name"];
    $phone = $_REQUEST["phone"];
    $city = $_REQUEST["city"];
    $inset = "insert into site (name,phone,city) values ('$name','$phone','$city');";
    $con->query($inset)===TRUE
?>