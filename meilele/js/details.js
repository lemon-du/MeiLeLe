// 字体自适应 
(function() {
    function w() {
        var r=document.documentElement;
        var a=r.getBoundingClientRect().width;
        if(a>650) {
            a=650
        }
        rem=a/16;
        r.style.fontSize=rem+"px";
    }
    var t;
    w();
    window.addEventListener("resize",function() {
        clearTimeout(t)
        t=setTimeout(w,300);
    },false)
})()
//  头部
mui.init({
    swipeBack: true //启用右滑关闭功能
});
mui('body').on('shown', '.mui-popover', function(e) {
});
mui('body').on('hidden', '.mui-popover', function(e) {
});
// 请求后台数据库
var url = window.location.search
var arr = url.split("=")
var type = arr[1]
$.ajax({
    type: "get",
    url: "http://localhost/php/detail.php?type="+type,
    dataType: "json",
    success: function(data) {
        $(".tittup").before(`
            <div class="swiper-slide">
                <img id="img1" src="${data.banner1}">
            </div>
            <div class="swiper-slide">
                <img src="${data.banner2}">
            </div>
            <div class="swiper-slide">
                <img src="${data.banner3}">
            </div>
        `)
        $(".padding-box").append(`
            <ul class="goods-sell JS_goods_sell">
                <li><strong class="t1">¥</strong>
                    <strong id="JS_goods_effect_price" class="t2">${data.price}</strong> 
                    <span style="display:inline-block;width:6px;"></span>
                    <span id="JS-price-notice" class="JS_experience goods-price-notice">降价通知</span>
                </li>
                <li><span id="JS_goods_sale_num">已售 ${data.sell_count}</span></li>
            </ul>
            <h2><span class="optimization"></span>
            <span id="js_add">${data.title}</span>
            
            </h2>
            <h3 id="JS_goods_red_title">${data.content}</h3>
        `)
        // 降价通知
        $("#JS-price-notice").click(function() {
            $("#plg-pop-con").remove()
            $(".plg-mask").show()
            $("body").append(`<div id="plg-pop-con" class="plg-pop-con" style="z-index: 2019; display: none;">
                <div id='plg-pop-box' class='plg-box'>
                    <div class='plg-pop-header'>
                        <div class='plg-pop-title'>
                            <img src='https://image.meilele.com/images/201702/1487027137580221909.png'>
                        </div>
                        <div class='plg-pop-close'></div>
                    </div>
                    <div class='plg-opr-con'>
                        <div class='plg-pop-prompt'>如商品在30日内降价，将通过短信通知您</div>
                        <form id='plg-pop-form' class='plg-pop-form'>
                            <div id='jsPriceDownPhoneBox' class='plg-pop-input-con'>
                                <input id='plg-pop-input-phone' type='tel' name='phone' maxlength='11' placeholder='请输入手机号，用于接收降价提醒'>
                            </div>
                        </form>
                        <div class='plg-pop-btn'>立即订阅</div>
                        <div class='plg-pop-warn'></div>
                    </div>
                </div>
            </div>`)
            $("#plg-pop-con").addClass("layer-ui-container-active").show()
            // 关闭弹框
            $(".plg-pop-close").click(function() {
                $("#plg-pop-con").removeClass("layer-ui-container-active").addClass("layer-ui-container")
                $(".plg-mask").hide()
            })
            // 验证手机号
            var phonepatt=/^1[3-9]\d{9}$/;
            $(".plg-pop-btn").click(function() {
                if($("#plg-pop-input-phone").val().replace(/(^\s*)|(\s*$)/g, "")==""){
                    if(!$(".plg-pop-warn").is("span")) { 
                        $(".plg-pop-warn").empty()
                        $(".plg-pop-warn").append(`
                            <span>
                                <i></i>
                                请输入手机号!
                            </span>
                        `)
                    }
                }else if(!phonepatt.test($("#plg-pop-input-phone").val())) {
                    if(!$(".plg-pop-warn").is("span")) {
                        $(".plg-pop-warn").empty()
                        $(".plg-pop-warn").append(`
                            <span>
                                <i></i>
                                手机号输入有误!
                            </span>
                        `)
                    }
                }else {
                    $("#plg-pop-con").removeClass("layer-ui-container-active").addClass("layer-ui-container")
                    $(".plg-mask").hide()
                }
            })
        })
        // 商品详细介绍
        $(function() {
            $("#JS_goods_red_title").click(function() {
                $("#JS_goods_red_title").toggleClass("ellipsis")
            })
        })
        //图文详情 
        $("#JS_goods_attr_box").append(`
            <div class="pic">
                <img src="${data.img_url1}">
            </div>
            <div class="pic">
                <img src="${data.img_url2}">
            </div>
            <div class="pic">
                <img src="${data.img_url3}">
            </div>
            <div class="pic">
                <img src="${data.banner1}">
            </div>
            <div class="pic">
                <img src="${data.banner2}">
            </div>
            <div class="pic">
                <img src="${data.banner3}">
            </div>
        `)
        $("#JS_goods_extend_guige").append(`
            <div>${data.standard}</div>
        `)
        $("#JS_goods_extend_offer").append(`
            <div class="resemblance">
                <img src="https://image.meilele.com/wap/images/goods/no-offer.png">
                    <br><span>暂无推荐商品</span>
            </div>
        `)
        // 图文详情tab切换
        $(".current-list").click(function() {
            $(this).addClass("current").siblings().removeClass("current")
            $(".content-item").eq($(this).index()).addClass("goods_item_on").siblings().removeClass("goods_item_on")
        })
    },
    error: function(error) {
        console.log(error);
    }
})
// 轮播图
var mySwiper = new Swiper('#JS_gallery_swiper_container',{
    pagination: {
        el: '.swiper-pagination',
        slidesPerView: "auto",
        type: 'fraction',
        init: false,
        observer: true,
        observeParents: true,
        autoplay:{
            delay: 2000,
            disableOnInteraction: false
        }
    },
})
// 保障弹框
window.onload=function(){
    var mask = mui.createMask(function(){
        document.getElementsByClassName('tankuang')[0].classList.remove('show'); 
    });
    mui('.me')[0].onclick=function(e){
        e.stopPropagation();
        e.preventDefault();
        mask.show();
        document.getElementsByClassName('tankuang')[0].classList.add('show'); 
        $("body").css("position","fixed")
    }
    $("body").click(function() {
        $("body").css("position","")
    })
    $(".close").click(function() {
        mask.close()
    }) 
}   
// 爆款推荐  看了又看
    $.ajax({
        type: "get",
        url: "http://localhost/php/faddish.php",
        dataType: "json",
        success: function(data) {
            var random=Math.floor(Math.random()*80)
            for(var i=random; i<random+8; i++) {
                 $("#faddishs").append(`
                    <div class="swiper-slide content_list">
                        <a href="detail.html?id=${data[i].type}" class="content_list_item">
                            <div class="item_img">
                                <img src="${data[i].banner1}">
                            </div>
                            <h3 class="item_title">${data[i].title}</h3>
                            <h4 class="item_price">￥${data[i].price}</h4>
                        </a>
                    </div>
                `)
            }
            var randoms=Math.floor(Math.random()*80)
            for(var i=randoms; i<randoms+10; i++) {
                 $(".goods_list").append(`
                 <li class="list_good">
                    <a href="detail.html?id=${data[i].type}">
                        <div class="good_img">
                            <img src="${data[i].banner1}">
                        </div>
                        <h3 class="good_price">￥${data[i].price}</h3>
                        <h4 class="good_title">${data[i].title}</h4>
                        <h5 class="good_sales">已售${data[i].sell_count}</h5>
                    </a>
                </li>
                `)
            }
        },
        error: function(error) {
            console.log(error);
        }
    })
// 爆款推荐
var swipers = new Swiper('.hot_recommend_content', {
    slidesPerView: 2.5,
    init: false,
    spaceBetween: 30,
    observer:true,
    observeParents:true
});  
setTimeout(function() {
    swipers.init()
},1000)
// 返回上一页
$(".layout-back").click(function() {
    window.history.go(-1)
})
function count() {
    $.ajax({
        type: "get",
        url: "http://localhost/php/add.php",
        dataType: "json",
        success: function(data) {
            $("#JS_goods_cart_number").text(data.length).addClass("shop_car")
        },
        error: function(error) {
            console.log(error);
        }
    })
}
count()
// 加入购物车 
$(".cart_only").click(function() {
    var img=$("#img1").prop("src");
    var price="¥"+$("#JS_goods_effect_price").text();
    var title=$("#js_add").text();
	console.log($("#js_add"))
	console.log($("#JS_goods_effect_price"))
    var flag=window.location.search.split("=")[1];
    $.ajax({
        url:"http://localhost/php/shopping.php",
        type:"get",
       data: {
            img:img,
			money:price,
			 product:title,
			 type:flag
         },
         success: function(data) {
             console.log("121")
         },
         error: function(error) {
             console.log("11",error)
         }
     })
    $("body").append(`
        <div class="succ">
            <div class="addcart">
                <h4>加入购物车成功</h4>
                <a href="shopping-car.html">查看购物车&nbsp;&gt;</a>
            </div>
        </div>
    `)
    $(".plg-mask").show()
    setTimeout(() => {
        $(".succ").remove()
        $(".plg-mask").hide()
    }, 3000);
    count()
})
// 收藏
$(".collect").click(function() {
    $("#plg-pop-con").remove()
    $(".plg-mask").show()
    $("body").append(`<div id="plg-pop-con" class="plg-pop-con" style="z-index: 2019; display: none;">
        <div id='plg-pop-box' class='plg-box'>
            <div class='plg-pop-header'>
                <div class='plg-pop-title'>
                    <p class="collectsbg">商品已收藏</p>
                    <div class='plg-pop-close coll_close'>&times;</div>
                </div>
                <div class='plg-pop-close'></div>
            </div>
            <div class='plg-opr-con'>
                <div class='plg-pop-prompt'>订阅降价通知，如商品在30日内降价，将通过短信通知您：</div>
                <form id='plg-pop-form' class='plg-pop-form'>
                    <div id='jsPriceDownPhoneBox' class='plg-pop-input-con'>
                        <input id='plg-pop-input-phone' type='tel' name='phone' maxlength='11' placeholder='请输入手机号，用于接收降价提醒'>
                    </div>
                </form>
                <div class='plg-pop-btn'>立即订阅</div>
                <div class='plg-pop-warn'></div>
            </div>
        </div>
    </div>`)
    $("#plg-pop-con").addClass("layer-ui-container-active").show()
    // 关闭弹框
    $(".plg-pop-close").click(function() {
        $("#plg-pop-con").removeClass("layer-ui-container-active").addClass("layer-ui-container")
        $(".plg-mask").hide()
    })
    // 验证手机号
    var phonepatt=/^1[3-9]\d{9}$/;
    $(".plg-pop-btn").click(function() {
        if($("#plg-pop-input-phone").val().replace(/(^\s*)|(\s*$)/g, "")==""){
            if(!$(".plg-pop-warn").is("span")) { 
                $(".plg-pop-warn").empty()
                $(".plg-pop-warn").append(`
                    <span>
                        <i></i>
                        请输入手机号!
                    </span>
                `)
            }
        }else if(!phonepatt.test($("#plg-pop-input-phone").val())) {
            if(!$(".plg-pop-warn").is("span")) {
                $(".plg-pop-warn").empty()
                $(".plg-pop-warn").append(`
                    <span>
                        <i></i>
                        手机号输入有误!
                    </span>
                `)
            }
        }else {
            $("#plg-pop-con").removeClass("layer-ui-container-active").addClass("layer-ui-container")
            $(".plg-mask").hide()
        }
    })
})

$(window).scroll(function(){
    var scrollTop=$(window).scrollTop();
     // 回到顶部出现
     if(scrollTop>300) {
        $(".sidebar-btn .back-top").removeClass("hidden");
    }else {
        $(".sidebar-btn .back-top").addClass("hidden");
    }
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