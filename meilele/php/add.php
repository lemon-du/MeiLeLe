<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');

$mysqli = new Mysqli('localhost', 'root', '123456', 'meilele');

$sql = "select * FROM  shopping_car";
$result = $mysqli->query($sql);

while($add = $result->fetch_assoc()){
    $adds[] = $add; 
}

echo json_encode($adds) 
 
?>