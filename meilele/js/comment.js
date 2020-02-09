 // 字体自适应 
 (function () {
    function w() {
        var r = document.documentElement;
        var a = r.getBoundingClientRect().width;
        if (a > 650) {
            a = 650
        }
        rem = a / 16;
        r.style.fontSize = rem + "px";
    }
    var t;
    w();
    window.addEventListener("resize", function () {
        clearTimeout(t)
        t = setTimeout(w, 300);
    }, false)
})()
// tab切换
$(function() {
    $.ajax({
        type: "get",
        url: "http://localhost/php/comment.php",
        dataType: "json",
        success: function(data) {
            function only() {
                for(var i=0; i<data.length; i++){
                    if(data[i].img_url1){
                        $("#JS_goods_comment_list").append(`
                            <dl>
                                <dt>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td style="width:1.65rem;">
                                                    <div class="avatar">
                                                        <img src="${data[i].author_img}">
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="phone">${data[i].phone}</div>
                                                    <div class="time">${data[i].date}</div>
                                                </td>
                                                <td>
                                                    <div class="click JS_like_click">
                                                        <i></i><span>有用</span>
                                                        (<span class="num">${data[i].like_num}</span>)
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </dt>
                                <dd>
                                    <div class="level">
                                        <div class="bg">
                                            <span style="width:100%;"></span>
                                        </div>
                                    </div>
                                    <p>${data[i].content}</p>
                                    <ul class="comment-goods-gallery JS_gallery_item_box clearfix">
                                        <li class="JS_gallery_item">
                                            <img src="${data[i].img_url1}">
                                        </li>
                                        <li class="JS_gallery_item">
                                            <img src="${data[i].img_url2}">
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        `)
                    } 
                }
            }
            function all() {
                for(var i=0; i<data.length; i++){
                    if(data[i].img_url1=="") {
                        $("#JS_goods_comment_list").append(`
                            <dl>
                                <dt>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td style="width:1.65rem;">
                                                    <div class="avatar">
                                                        <img src="${data[i].author_img}">
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="phone">${data[i].phone}</div>
                                                    <div class="time">${data[i].date}</div>
                                                </td>
                                                <td>
                                                    <div class="click JS_like_click">
                                                        <i></i><span>有用</span>
                                                        (<span class="num">${data[i].like_num}</span>)
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </dt>
                                <dd>
                                    <div class="level">
                                        <div class="bg">
                                            <span style="width:100%;"></span>
                                        </div>
                                    </div>
                                    <p>${data[i].content}</p>
                                </dd>
                            </dl>
                        `)
                    }
                }
            }
            all()
            only() 
            like()  
            // 点赞
            function like() {
                $(".JS_like_click").click(function() {
                    var num = $(this).children(".num").text()
                    var number = Number(num)
                    var likeNum = ++number
                    $(this).children(".num").text(likeNum)
                })
            }
            $("#all").click(function() {
                $(this).addClass("current").siblings().removeClass("current")
                $("#JS_goods_comment_list").empty()
                all()
                only()
                like()  
            }) 
            $("#high").click(function() {
                $(this).addClass("current").siblings().removeClass("current")
                $("#JS_goods_comment_list").empty()
                all()
                only()  
                like()  
            })    
            $("#middle").click(function() {
                $(this).addClass("current").siblings().removeClass("current")
                $("#JS_goods_comment_list").empty()
                $("#JS_goods_comment_list").append(`<div class="notAvailable">暂时还没有买家发表此类评论！</div>`)
            })
            $("#low").click(function() {
                $(this).addClass("current").siblings().removeClass("current")
                $("#JS_goods_comment_list").empty()
                $("#JS_goods_comment_list").append(`<div class="notAvailable">暂时还没有买家发表此类评论！</div>`)
            })
            $("#only_show").click(function() {
                $(this).addClass("current").siblings().removeClass("current")
                $("#JS_goods_comment_list").empty()
                only()  
                like()  
            })
        },
        error: function(error) {
            console.log(error);
        }
    })
})
// 返回上一页
$(".layout-back").click(function() {
    window.history.go(-1)
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