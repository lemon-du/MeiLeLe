<?php 
	error_reporting(0);
	header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Methods:GET');
    header('Access-Control-Allow-Headers:x-requested-with, content-type');
    $con = new Mysqli('localhost', 'root', '123456', 'meilele');
    $select="select * from shopping_car;";
    $result=$con->query($select);
    while($arr=$result->fetch_assoc()) {
            $arr1[]=$arr;
    }
    echo json_encode($arr1);
?>