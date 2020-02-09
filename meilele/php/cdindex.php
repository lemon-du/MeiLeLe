<?php
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE,OPTIONS');
    header('Access-Control-Allow-Headers:x-requested-with,Content-type');
    $con=new mysqli('localhost','root','123456','meilele');
        $select="select * from intro order by id asc;";
        $txt=$con->query($select);
        if($txt->num_rows>0){
            while($arr=$txt->fetch_assoc()){
                $array[]=$arr;
            }
        }
        echo json_encode($array);
?>