<?php
   header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE,OPTIONS');
    header('Access-Control-Allow-Headers:x-requested-with,Content-type');
    $key=$_GET["tag"];
    $key=urldecode($key);
    $con=new mysqli("localhost","root","123456","meilele");
    $select="select * from yuemu where tag='{$key}' or introduction like'%{$key}%'";
    $result=$con->query($select);
    while($arr=$result->fetch_assoc()) {
            $arr1[]=$arr;
    }
    echo json_encode($arr1);
?>