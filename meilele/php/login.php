<?php 
    header('Access-Control-Allow-Origin: *');   
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS'); 
    header('Access-Control-Allow-Headers: x-requested-with, content-type');  
    $servername="localhost";
    $name = "root";
    $password = "123456";
    $mysql = "meilele";
    $con = new mysqli($servername, $name, $password, $mysql);

    $admin = $_REQUEST["inp-phone1"];
    $pass = $_REQUEST["inp-password"];

    $select = "select * from user;";

    $test = $con->query($select);
    if($test->num_rows>0) {
        while($arr=$test->fetch_assoc()) {
            if($admin==$arr["phone"] and $pass==$arr["password"]) {
                echo "<script>localStorage.setItem('userStatus','loginError'); window.location='../my_meilele.html';</script>";
                $ins="insert into user1(phone,password) values ('$admin','$pass');";
                if( $num = $con->query($ins)){
                    echo "插入成功";
                }else{
                  echo "插入失败";
                }
            } else {
                echo "<script>localStorage.setItem('usererr', 1); window.location='../login.html';</script>";
            }
        }
    };
    $con->close();
?>
