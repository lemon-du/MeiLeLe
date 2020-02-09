<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
     $img=$_GET["img"];
     $price=$_GET["money"];
     $title=$_GET["product"];
     $type=$_GET["type"];
     $connect = new Mysqli('localhost', 'root', '123456', 'meilele');
     $insert="insert into shopping_car(title,img,price,type)values('$title','$img','$price','$type');";
     if($connect->query($insert)) {
        echo "插入成功";
    }else {
        echo "插入失败".$connect->error;
    }
?>