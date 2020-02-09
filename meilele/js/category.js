$(function(){
    var data=window.location.search;
    var url=data.substring(1);
    $(document).scroll(function(){
        var scrollTop=$(window).scrollTop();
        if(scrollTop> 10){
            $(".table-hd").addClass("fixed")
        }else {
            $(".table-hd").removeClass("fixed")
        }
    })
    $(".styles li a").click(function() { 
        $(this).addClass("current");
        $(this).parent().parent().prev().removeClass("select");
    })
    $(".price li a").click(function() {
      $(".price li a").removeClass("current");
      $(this).addClass("current");
      $(this).parent().parent().parent().removeClass("mui-active");
      $(this).parent().parent().prev().removeClass("select");
    }) 
    $(".all li a").click(function() {
      $(".all li a").removeClass("current");
      $(this).addClass("current");
      $(this).parent().parent().parent().removeClass("mui-active");
      $(this).parent().parent().prev().html($(this).html());
      $(this).parent().parent().prev().removeClass("select");
    }) 
    $(".btn-reset").click(function() {
        $(".styles li a").removeClass("current");
        $(this).parent().parent().prev().addClass("select");
    })
    $(".btn-sure").click(function() {
        $(this).parent().parent().parent().removeClass("mui-active");
    })
    $("#back").click(function(){
        window.history.go(-1);
    })
    // 在此处进行数据请求的测试(降序)
    $("#desc").click(function(){
        $.ajax({
            type:"POST",
            url:'http://localhost/php/desc.php',
            data:{
                url:url,
            },
            dataType: 'json',
            success:function(data){
                $("#alllist").empty();
                for(var i=0;i<data.length;i++){
                    $("#alllist").append(`
                        <li class="goods-li">
                            <div class="item">
                                <a href="detail.html?type=${data[i].type}" class="img-a">
                                    <img src="${data[i].img_url}" alt="">
                                </a>
                                <div class="goods-date">
                                    <div class="extra2">
                                        <span class="price-name self-support">${data[i].self_support}</span>
                                        <span class="price-name optimization">${data[i].optimize}</span>
                                    </div>
                                    <p>
                                        <a href="detail.html?type=${data[i].type}">${data[i].name}</a>
                                    </p>
                                    <div class="extra">
                                        <span class="RMB">￥</span>
                                        <span class="JS_price">${data[i].price}</span>
                                        <span class="goods-saled">已售
                                            <span id="saled-num">${data[i].sale_count}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    `)
                    if(data[i].self_support===null||data[i].self_support==""){
                        $(".self-support").eq(i).css("display","none")
                    }
                    if(data[i].optimize===null||data[i].optimize==""){
                        $(".optimization").eq(i).css("display","none")
                    }
                }
            },
            error:function(error){
                console.log(error);
            }
        })
    })
    // ***************************************
    // 升序排列的请求
    $("#asc").click(function(){
        $.ajax({
            type:"POST",
            url:'http://localhost/php/asc.php',
            data:{
                url:url,
            },
            dataType: 'json',
            success:function(data){
                console.log(data)
                $("#alllist").empty();
                for(var i=0;i<data.length;i++){
                    $("#alllist").append(`
                        <li class="goods-li">
                            <div class="item">
                                <a href="detail.html?type=${data[i].type}" class="img-a">
                                    <img src="${data[i].img_url}" alt="">
                                </a>
                                <div class="goods-date">
                                    <div class="extra2">
                                        <span class="price-name self-support">${data[i].self_support}</span>
                                        <span class="price-name optimization">${data[i].optimize}</span>
                                    </div>
                                    <p>
                                        <a href="detail.html?type=${data[i].type}">${data[i].name}</a>
                                    </p>
                                    <div class="extra">
                                        <span class="RMB">￥</span>
                                        <span class="JS_price">${data[i].price}</span>
                                        <span class="goods-saled">已售
                                            <span id="saled-num">${data[i].sale_count}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    `)
                    if(data[i].self_support===null||data[i].self_support==""){
                        $(".self-support").eq(i).css("display","none")
                    }
                    if(data[i].optimize===null||data[i].optimize==""){
                        $(".optimization").eq(i).css("display","none")
                    }
                }
            },
            error:function(error){
                console.log(error);
            }
        })
    })
    // *****************
    //销量排序
    $("#sale").click(function(){
        $.ajax({
            type:"POST",
            url:'http://localhost/php/count.php',
            data:{
                url:url,
            },
            dataType: 'json',
            success:function(data){
                console.log(data)
                $("#alllist").empty();
                for(var i=0;i<data.length;i++){
                    $("#alllist").append(`
                        <li class="goods-li">
                            <div class="item">
                                <a href="detail.html?type=${data[i].type}" class="img-a">
                                    <img src="${data[i].img_url}" alt="">
                                </a>
                                <div class="goods-date">
                                    <div class="extra2">
                                        <span class="price-name self-support">${data[i].self_support}</span>
                                        <span class="price-name optimization">${data[i].optimize}</span>
                                    </div>
                                    <p>
                                        <a href="detail.html?type=${data[i].type}">${data[i].name}</a>
                                    </p>
                                    <div class="extra">
                                        <span class="RMB">￥</span>
                                        <span class="JS_price">${data[i].price}</span>
                                        <span class="goods-saled">已售
                                            <span id="saled-num">${data[i].sale_count}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    `)
                    if(data[i].self_support===null||data[i].self_support==""){
                        $(".self-support").eq(i).css("display","none")
                    }
                    if(data[i].optimize===null||data[i].optimize==""){
                        $(".optimization").eq(i).css("display","none")
                    }
                }
            },
            error:function(error){
                console.log(error);
            }
        })
    })
    // **************
    //正常请求数据
    $.ajax({
        type:"POST",
        url:'http://localhost/php/category.php',
        data:{
            url:url,
        },
        dataType: 'json',
        success:function(data){
            for(var i=0;i<data.length;i++){
                $("#alllist").append(`
                    <li class="goods-li">
                        <div class="item">
                            <a href="detail.html?type=${data[i].type}" class="img-a">
                                <img src="${data[i].img_url}" alt="">
                            </a>
                            <div class="goods-date">
                                <div class="extra2">
                                    <span class="price-name self-support">${data[i].self_support}</span>
                                    <span class="price-name optimization">${data[i].optimize}</span>
                                </div>
                                <p>
                                    <a href="detail.html?type=${data[i].type}">${data[i].name}</a>
                                </p>
                                <div class="extra">
                                    <span class="RMB">￥</span>
                                    <span class="JS_price">${data[i].price}</span>
                                    <span class="goods-saled">已售
                                        <span id="saled-num">${data[i].sale_count}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                `)
                if(data[i].self_support===null||data[i].self_support==""){
                    $(".self-support").eq(i).css("display","none")
                }
                if(data[i].optimize===null||data[i].optimize==""){
                    $(".optimization").eq(i).css("display","none")
                }
            }
        },
        error:function(error){
            console.log(error);
        }
    })
})
