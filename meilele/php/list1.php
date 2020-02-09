<?php
header("Access-Control-Allow-Origin:*");

header('Access-Control-Allow-Methods:POST');

header('Access-Control-Allow-Headers:x-requested-with, content-type');

$con = new mysqli('localhost', 'root', '123456', 'meilele');
    // if($con->connect_error) {
    //     // die('连接失败');
    //     echo $con->connect_error;
    // };
    // echo '连接成功';
    $sql = "select * from site;";
    $result = $con->query($sql);
    while($arr=$result->fetch_assoc()) {
        $text[] = $arr;
    };
    print_r(json_encode($text));
?>