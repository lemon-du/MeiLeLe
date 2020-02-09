<?php
	header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE,OPTIONS');
    header('Access-Control-Allow-Headers:x-requested-with,Content-type');
    $word=$_GET["word"];
    $con = new Mysqli('localhost', 'root', '123456', 'meilele');
    $del="delete from shopping_car where title='{$word}';";
    if($con->query($del)) {
        echo "删除成功";
    }else {
        echo "删除失败";
    }
?>