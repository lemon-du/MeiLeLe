<?php
    error_reporting(0); 
    header('Access-Control-Allow-Origin: *');   
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS'); 
    header('Access-Control-Allow-Headers: x-requested-with, content-type');  
     $servername="localhost";
     $name = "root";
     $password = "123456";
     $mysql = "meilele";
     $connect = new mysqli($servername, $name, $password, $mysql);
     $phone = $_REQUEST["phone"];
     $pass = $_REQUEST["password"];
     $select= "select * from user where phone='$phone';";
     $num=$connect->query($select);
     if($num->num_rows<=0) {
         $insert="insert into user(phone,password) values ('$phone','$pass');";
         if($connect->query($insert)===TRUE) {
            echo "<script>localStorage.setItem('usererr2', 1); window.location='../register.html';</script>";
         }
     }else {
         echo "<script>localStorage.setItem('usererr1', 1); window.location='../register.html';</script>";
     }
     $connect->close();
?>