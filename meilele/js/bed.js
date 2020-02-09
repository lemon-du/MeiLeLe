mui.init();
mui('body').on('shown', '.mui-popover', function(e) {
});
mui('body').on('hidden', '.mui-popover', function(e) {
});
var swiper = new Swiper('.banner1',{
    pagination:{
        el:".swiper-pagination"
    },
    observer:true,
    observeparents:true
});
var swipers = new Swiper('.flash-sale-container ',{
    init:false,
    slidesPerView : 'auto', 
    observer:true,
    observeparents:true
});
setTimeout(function () {
    swipers.init();
},1000)
var swiper = new Swiper('.banner6',{
    pagination:{
        el:".swiper-pagination"
    },
     observer:true,
     observeparents:true
});
var swiper1 = new Swiper('.banner7',{
    init:false,
    slidesPerView : 'auto', 
    observer:true,
    observeparents:true,
})
setTimeout(function () {
    swiper1.init();
},1000)
var swiper = new Swiper('.today-news',{
    pagination:{
        el:".swiper-pagination"
    },
     observer:true,
     observeparents:true
});
$(function() {
    var name=window.location.search.substring(1).split("=")[1];
    $.ajax({
        type:"get",
        url:"http://localhost/php/test.php",
        data:{
            name:name
        },
        dataType:"json",
        success(data) {
            // 顶部轮播
            for(var i=0;i<data[0].banner_url.length;i++) {
                $(".banner1 .swiper-wrapper").append(`
                    <div class="swiper-slide">
                        <a href="detail.html?${data[0].banner_url[i].type_sort}">
                            <img src="${data[0].banner_url[i].banner_img_url}"/>
                        </a>
                    </div>
                `)
            }
            // 限时抢购
            for(var i=0;i<data[0].flash_sale.length;i++) {
                $("#column_1_0 ul").append(`
                    <li class="swiper-slide flash-sale-item">
                        <div class="item-img">
                            <span class="end rush">${data[0].flash_sale[i].goods_tag}</span>
                            <a href="detail.html?type=${data[0].flash_sale[i].type_sort}">
                                <img src="${data[0].flash_sale[i].img_url}">
                            </a>
                        </div>
                        <div class="item-info">
                            <div class="countdown yeEnd">
                                <span class="lt"></span>
                                <span class="time"></span>
                                <span class="rt"></span>
                                <p class="JS_time end"><i></i>${data[0].flash_sale[i].goods_tag}</p>     
                            </div>
                            <p class="item-info-title">
                                <a href="detail.html?type=${data[0].flash_sale[i].type_sort}">${data[0].flash_sale[i].goods_title}</a>
                            </p>
                            <p class="item-info-price">
                                ¥<span>${data[0].flash_sale[i].goods_price}</span>
                                <span class="original-price">${data[0].flash_sale[i].original_price}</span>
                            </p>
                        </div>
                    </li>
                `)
            }
            // 新品首发
            for(var i=0;i<data[0].hot.length;i++) {
                $("#column_1_1 .goods-list").append(`
                    <li class="goods-item">
                        <div class="goods-img">
                            <div class="tag"></div>
                            <a href="detail.html?type=${data[0].hot[i].type_sort}">
                                <img src="${data[0].hot[i].img_url}">
                                <p class="goods-sale">
                                    已售<span class="s1-309493">${data[0].hot[i].goods_tag}</span>
                                </p>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            <a href="detail.html?type=${data[0].hot[i].type_sort}">${data[0].hot[i].goods_title}</a>
                        </h3>
                        <p class="goods-price-wrap">
                            ¥<span class="goods-price">${data[0].hot[i].goods_price}</span>
                        </p>
                    </li>
                `)
            }
             // 实木床
            for(var i=0;i<data[0].wood.length;i++) {
                $("#column_1 .goods-list").append(`
                    <li class="goods-item">
                        <div class="goods-img">
                            <div class="tag"></div>
                            <a href="detail.html?type=${data[0].wood[i].type_sort}">
                                <img src="${data[0].wood[i].img_url}">
                                <p class="goods-sale">
                                    <span class="s1-309493">${data[0].wood[i].goods_tag}</span>
                                </p>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            <a href="detail.html?type=${data[0].wood[i].type_sort}">${data[0].wood[i].goods_title}</a>
                        </h3>
                        <p class="goods-price-wrap">
                            ¥<span class="goods-price">${data[0].wood[i].goods_price}</span>
                        </p>
                    </li>
                `)
            }
             // 真皮床
             for(var i=0;i<data[0].fur.length;i++) {
                $("#column_2 .goods-list").append(`
                    <li class="goods-item">
                        <div class="goods-img">
                            <div class="tag"></div>
                            <a href="detail.html?type=${data[0].fur[i].type_sort}">
                                <img src="${data[0].fur[i].img_url}">
                                <p class="goods-sale">
                                   <span class="s1-309493">${data[0].fur[i].goods_tag}</span>
                                </p>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            <a href="detail.html?type=${data[0].fur[i].type_sort}">${data[0].fur[i].goods_title}</a>
                        </h3>
                        <p class="goods-price-wrap">
                            ¥<span class="goods-price">${data[0].fur[i].goods_price}</span>
                        </p>
                    </li>
                `)
            }
            // 现代床
            for(var i=0;i<data[0].modern.length;i++) {
                $("#column_3 .goods-list").append(`
                    <li class="goods-item">
                        <div class="goods-img">
                            <div class="tag"></div>
                            <a href="detail.html?type=${data[0].modern[i].type_sort}">
                                <img src="${data[0].modern[i].img_url}">
                                <p class="goods-sale">
                                   <span class="s1-309493">${data[0].modern[i].goods_tag}</span>
                                </p>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            <a href="detail.html?type=${data[0].modern[i].type_sort}">${data[0].modern[i].goods_title}</a>
                        </h3>
                        <p class="goods-price-wrap">
                            ¥<span class="goods-price">${data[0].modern[i].goods_price}</span>
                        </p>
                    </li>
                `)
            }
             // 北欧床
            for(var i=0;i<data[0].northern.length;i++) {
                $("#column_4 .goods-list").append(`
                    <li class="goods-item">
                        <div class="goods-img">
                            <div class="tag"></div>
                            <a href="detail.html?type=${data[0].northern[i].type_sort}">
                                <img src="${data[0].northern[i].img_url}">
                                <p class="goods-sale">
                                   <span class="s1-309493">${data[0].northern[i].goods_tag}</span>
                                </p>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            <a href="detail.html?type=${data[0].northern[i].type_sort}">${data[0].northern[i].goods_title}</a>
                        </h3>
                        <p class="goods-price-wrap">
                            ¥<span class="goods-price">${data[0].northern[i].goods_price}</span>
                        </p>
                    </li>
                `)
            }
             // 中式床
            for(var i=0;i<data[0].chinese.length;i++) {
                $("#column_5 .goods-list").append(`
                    <li class="goods-item">
                        <div class="goods-img">
                            <div class="tag"></div>
                            <a href="detail.html?type=${data[0].chinese[i].type_sort}">
                                <img src="${data[0].chinese[i].img_url}">
                                <p class="goods-sale">
                                   <span class="s1-309493">${data[0].chinese[i].goods_tag}</span>
                                </p>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            <a href="detail.html?type=${data[0].chinese[i].type_sort}">${data[0].chinese[i].goods_title}</a>
                        </h3>
                        <p class="goods-price-wrap">
                            ¥<span class="goods-price">${data[0].chinese[i].goods_price}</span>
                        </p>
                    </li>
                `)
            }
             // 高箱床
            for(var i=0;i<data[0].beauty.length;i++) {
                $("#column_6 .goods-list").append(`
                    <li class="goods-item">
                        <div class="goods-img">
                            <div class="tag"></div>
                            <a href="detail.html?type=${data[0].beauty[i].type_sort}">
                                <img src="${data[0].beauty[i].img_url}">
                                <p class="goods-sale">
                                   <span class="s1-309493">${data[0].beauty[i].goods_tag}</span>
                                </p>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            <a href="detail.html?type=${data[0].beauty[i].type_sort}">${data[0].beauty[i].goods_title}</a>
                        </h3>
                        <p class="goods-price-wrap">
                            ¥<span class="goods-price">${data[0].beauty[i].goods_price}</span>
                        </p>
                    </li>
                `)
            }
            // 双层床
            for(var i=0;i<data[0].mini.length;i++) {
                $("#column_7 .goods-list").append(`
                    <li class="goods-item">
                        <div class="goods-img">
                            <div class="tag"></div>
                            <a href="detail.html?type=${data[0].mini[i].type_sort}">
                                <img src="${data[0].mini[i].img_url}">
                                <p class="goods-sale">
                                   <span class="s1-309493">${data[0].mini[i].goods_tag}</span>
                                </p>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            <a href="detail.html?type=${data[0].mini[i].type_sort}">${data[0].mini[i].goods_title}</a>
                        </h3>
                        <p class="goods-price-wrap">
                            ¥<span class="goods-price">${data[0].mini[i].goods_price}</span>
                        </p>
                    </li>
                `)
            }
            // 折叠床
            for(var i=0;i<data[0].tide.length;i++) {
                $("#column_8 .goods-list").append(`
                    <li class="goods-item">
                        <div class="goods-img">
                            <div class="tag"></div>
                            <a href="detail.html?type=${data[0].tide[i].type_sort}">
                                <img src="${data[0].tide[i].img_url}">
                            </a>
                        </div>
                        <h3 class="goods-title">
                            <a href="detail.html?type=${data[0].tide[i].type_sort}">${data[0].tide[i].goods_title}</a>
                        </h3>
                        <p class="goods-price-wrap">
                            ¥<span class="goods-price">${data[0].tide[i].goods_price}</span>
                        </p>
                    </li>
                `)
            }
            // 客厅搭配
            for(var i=0;i<data[0].areaItem.length;i++) {
                $(".area-list").append(`
                    <li class="swiper-slide area-item ">
                        <div class="area-item-img">
                            <span class="arrow"></span>
                            <a href="detail.html?type=${data[0].areaItem[i][0].type_sort}">
                                <img src="${data[0].areaItem[i][0].area_item_img}">
                            </a>
                        </div>
                        <ul class="product-list">
                            <li class="product-item">
                                <div class="product-img">
                                    <a href="detail.html?type=${data[0].areaItem[0][i+1].type_sort}">
                                        <img src="${data[0].areaItem[0][i+1].img_url}">
                                    </a>
                                </div>
                                <h3 class="product-title">
                                    <a href="detail.html?type=${data[0].areaItem[0][i+1].type}">${data[0].areaItem[0][i+1].goods_title}</a>
                                </h3>
                                <p class="product-price">${data[0].areaItem[0][i+1].goods_price}</p>
                            </li>
                            <li class="product-item">
                                <div class="product-img">
                                    <a href="detail.html?type=${data[0].areaItem[1][i+1].type_sort}">
                                        <img src="${data[0].areaItem[1][i+1].img_url}">
                                    </a>
                                </div>
                                <h3 class="product-title">
                                    <a href="detail.html?type=${data[0].areaItem[0][i+1].type_sort}">${data[0].areaItem[1][i+1].goods_title}</a>
                                </h3>
                                <p class="product-price">${data[0].areaItem[1][i+1].goods_price}</p>
                            </li>
                            <li class="product-item">
                                <div class="product-img">
                                    <a href="detail.html?type=${data[0].areaItem[2][i+1].type_sort}">
                                        <img src="${data[0].areaItem[2][i+1].img_url}">
                                    </a>
                                </div>
                                <h3 class="product-title">
                                    <a href="detail.html?type=${data[0].areaItem[0][i+1].type_sort}">${data[0].areaItem[2][i+1].goods_title}</a>
                                </h3>
                                <p class="product-price">${data[0].areaItem[2][i+1].goods_price}</p>
                            </li>
                        </ul>
                    </li>
                `)
            }
            // 悦享生活
            for(var i=0;i<data[0].series.length;i++) {
                $(".collocation-list").append(`
                    <li class="collocation-item swiper-slide">
                        <a href="detail.html?type=${data[0].series[i].type_sort}">
                            <p class="collocation-tip">${data[0].series[i].goods_tag}</p>
                            <img src="${data[0].series[i].img_url}" style="width:100% ;height:100%;">
                        </a>
                    </li>
                `)
            }
            // 30种设计师设计
             for(var i=0;i<data[0].new_list.length;i++) {
                $(".today-news-list").append(`
                    <li class="today-news-item swiper-slide ">
                        <h3>
                            <a href="javascript:void(0);">${data[0].new_list[i].goods_title}</a>
                        </h3>
                        <div class="today-news-content">
                            <div class="news-img">
                                <a href="javascript:void(0);">
                                    <img src="${data[0].new_list[i].img_url}">
                                </a>
                            </div>
                            <p class="news-icon">
                                <span></span>
                            </p>
                            <p class="news-title">
                                <a href="javascript:void(0);">
                                ${data[0].new_list[i].content}
                                    <span>[全文]<span>
                                </a>
                            </p>
                        </div>
                    </li>
                `)
            }
            // 猜你喜欢
            for(var i=0;i<data[0].like.length;i++) {
                $(".guess-like .good-list").append(`
                    <li class="goods-item">
                        <div class="goods-img">
                            <a href="detail.html?type=${data[0].like[i].type_sort}">
                                <img src="${data[0].like[i].img_url}">
                            </a>
                        </div>
                        <h3 class="goods-title">
                            <a href="detail.html?type=${data[0].like[i].type_sort}">${data[0].like[i].goods_title}</a>
                        </h3>
                        <p class="goods-price-wrap">
                            ¥<span class="goods-price">${data[0].like[i].goods_price}</span>
                        </p>
                    </li>
                `)
            }
        },
        error(error) {
            console.log(error);
        }  
    })
    $(window).scroll(function(e){
        var scrollTop=$(window).scrollTop();
        // 回到顶部
        if(scrollTop>300) {
            $(".sidebar-btn .back-top").removeClass("hidden");
        }else {
            $(".sidebar-btn .back-top").addClass("hidden");
        }
        // 导航条定位
        for(var i=0;i<$(".floor-moudle").length;i++) {
            var pageTop=$(".floor-moudle").eq(i).offset().top;
            var pageHeight=$(".floor-moudle").eq(i).height();
            if(scrollTop>pageTop&&scrollTop<(pageTop+pageHeight)) {
                $(".sub-nav").removeClass("fixed");
                $(".sub-nav").eq(i).addClass("fixed");
            }
            if(scrollTop<$(".sales-promotion").offset().top||scrollTop>$(".floor-tx").offset().top) {
                $(".sub-nav").removeClass("fixed");
                $(".sub-nav-item").css("backgroundColor","");
            }
        }
        // 模块1
        if(scrollTop>=$(".sales-promotion").offset().top&&scrollTop<($(".sales-promotion").offset().top+$("#column_1_0").height()+60)){
            $(".sub-nav-item").eq(0).css("backgroundColor","rgb(255, 124, 26)");
        }else {
            $(".sub-nav-item").eq(0).css("backgroundColor","");
        }
        if(scrollTop>=$("#column_1_1").offset().top-25&&scrollTop<($("#column_1_1").offset().top+$("#column_1_1").height())){
            $(".sub-nav-item").eq(1).css("backgroundColor","rgb(255, 124, 26)");
            $(".sub-nav-item").eq(2).css("backgroundColor","");
        }else {
            $(".sub-nav-item").eq(1).css("backgroundColor","");
        }
        // 模块2
        for(var i=0;i<$(".bed-module").length;i++){
            var top=$(".bed-module").eq(i).offset().top-50;
            var height=$(".bed-module").eq(i).height();
            if(scrollTop>top&&scrollTop<(top+ height)) {
                $(".floor-bed .sub-nav-item").css("backgroundColor","");
                $(".floor-bed .sub-nav-item").eq(i).css("backgroundColor","rgb(255, 124, 26)");
            }
        }
    })
    // 点击跳到相应的位置
    $(".sub-nav-item").click(function(){
        var id=$(this).data("id");
        var t=$('#'+id).offset().top;
        document.documentElement.scrollTop=(t-20);
        document.body.scrollTop=(t-20);     
    })
    $('.back-top').click(function(){
        //获取当前scrollTop的位置
        var curScroll = $(window).scrollTop();
        //上升的位移
        var speed = 15;
        if(curScroll>0){
            setInterval(timer,1);
        }
        function timer(){
            if(curScroll>0){
                curScroll = curScroll-speed;
                $(window).scrollTop(curScroll);
                if(curScroll<=0){
                    $(window).scrollTop(0);
                    clearInterval(timer);
                }
            }
        }
    })
})