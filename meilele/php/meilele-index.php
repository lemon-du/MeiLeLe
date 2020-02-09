<?php
header("Access-Control-Allow-Origin:*");

header('Access-Control-Allow-Methods:POST');

header('Access-Control-Allow-Headers:x-requested-with, content-type');

$con = new mysqli('localhost', 'root', '123456', 'meilele');
   


$sql = "select * from commodity;";
$result = $con->query($sql);
while($arr=$result->fetch_assoc()) {
    $text[] = $arr;
};
print_r(json_encode($text));
?>