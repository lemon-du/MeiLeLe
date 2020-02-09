<?php
    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Methods:GET');
    header('Access-Control-Allow-Headers:x-requested-with, content-type');
    $connect=new mysqli("localhost","root","123456","meilele");
    $name=$_REQUEST["name"];
    $select="select *from list_sofa where list_index='{$name}';";
    $result=$connect->query($select);
    $hot=array();$cloth=array();$wood=array();$fur=array();$modern=array(); $ban=array();
    $northern=array();$chinese=array();$beauty=array();$mini=array();$tide=array();
    $item1=array();$item2=array();$item3=array();$series=array();$new_list=array();$like=array();
    $flash_sale=array();
    if($result->num_rows>0) {
        while($arr=$result->fetch_assoc()){
           $arrs[]=$arr;
        }
        for($i=0;$i<count($arrs);$i++) {
            if(!empty($arrs[$i]['banner_img_url'])) {
                array_push($ban,$arrs[$i]);
            }
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="hot") {
                array_push($hot,$arrs[$i]);
            }
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="cloth") {
                array_push($cloth,$arrs[$i]);
            }
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="wood") {
                array_push($wood,$arrs[$i]);
            }
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="fur") {
                array_push($fur,$arrs[$i]);
            }
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="modern") {
                array_push($modern,$arrs[$i]);
            }
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="northern") {
                array_push($northern,$arrs[$i]);
            }
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="chinese") {
                array_push($chinese,$arrs[$i]);
            }
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="beauty") {
                array_push($beauty,$arrs[$i]);
            }
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="mini") {
                array_push($mini,$arrs[$i]);
            }
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="tide") {
                array_push($tide,$arrs[$i]);
            }
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="living1") {
                array_push($item1,$arrs[$i]);
            }     
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="living2") {
                array_push($item2,$arrs[$i]);
            }     
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="living3") {
                array_push($item3,$arrs[$i]);
            }     
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="series") {
                array_push($series,$arrs[$i]);
            }     
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="new_list") {
                array_push($new_list,$arrs[$i]);
            }     
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="like") {
                array_push($like,$arrs[$i]);
            }     
        }
        for($i=0;$i<count($arrs);$i++) {
            if($arrs[$i]['type']=="flash_sale") {
                array_push($flash_sale,$arrs[$i]);
            }     
        }
        $aeraItem=array($item1,$item2,$item3);
        $type=array("banner_url"=>$ban,"hot"=>$hot,"cloth"=>$cloth,"wood"=>$wood,"fur"=>$fur,"modern"=>$modern,"northern"=>$northern,
        "chinese"=>$chinese,"beauty"=>$beauty,"mini"=>$mini,"tide"=>$tide,"areaItem"=>$aeraItem,"series"=>$series,"new_list"=>$new_list,
        "like"=>$like,"flash_sale"=>$flash_sale);
    }
    $data[]=$type;
    echo json_encode($data);
?>  