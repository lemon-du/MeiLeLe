  //640是原始设计图大小
  var fontSizeAuto = function () {
    var viewportWidth = document.documentElement.clientWidth;
    if (viewportWidth > 768) { viewportWidth = 768; }
    if (viewportWidth > 640) { viewportWidth = 640; }
    if (viewportWidth < 320) { viewportWidth = 320; }
    document.documentElement.style.fontSize = viewportWidth / 16 + 'px';
}
fontSizeAuto();
window.onresize = fontSizeAuto;
//    头部设置
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
// 返回
$("#aaa").click(function() {
    window.history.go(-1)
})
// 底部
$(document).ready(function () {
    $("div .subMenu").click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
        var page = $(this).attr("data-src");
        if (page) {
            $("#content").load(page)
        }
    });
});
// 登陆验证
$("#verification").click(function() {
    if(localStorage.getItem("userStatus")) {
        Window.location="my_meilele.html"
    }else{
        Window.location="login.html"
    }
})