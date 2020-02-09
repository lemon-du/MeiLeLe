<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');
$mysqli = new Mysqli('localhost', 'root', '123456', 'meilele');
$type = $_GET['type'];
$sql = "select * FROM details where type = '{$type}';";
$result = $mysqli->query($sql);

while($details = $result->fetch_assoc()){
    echo json_encode($details); 
}

?>