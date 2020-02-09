<?php  
    header("content-Type:application/json;charset=utf-8");
    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Credentials:true");
    $con = new mysqli('localhost', 'root', '12345', 'new_buy');

        if($con->connect_error) {
        die('连接失败');
    };
    $select="select * from new_buy where trim(title)!='' and trim(img_url)!='';";
    $selects= $con->query($select);
    
    while($goods=$selects->fetch_assoc()) {
        $arr[] = $goods;
    };
    echo json_encode($arr);

    
?>