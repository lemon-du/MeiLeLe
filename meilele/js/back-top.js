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