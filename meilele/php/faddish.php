<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');

$mysqli = new Mysqli('localhost', 'root', '123456', 'meilele');

$sql = "select id,title,price,sell_count,banner1,type FROM  details";
$result = $mysqli->query($sql);

while($faddish = $result->fetch_assoc()){
    $faddishs[] = $faddish; 
}

echo json_encode($faddishs) 
 
?>