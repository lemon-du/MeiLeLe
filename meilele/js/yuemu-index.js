$.ajax({
    type: "get",
    dataType: "json",
    url: "http://localhost/php/yuemu-index.php",
    success: function (data) {
        for(var i=0;i<data.length;i++) {
            $(".wood-render-container").get(0).innerHTML+=`
            <li>
                <div class="pic">
                    <a href="yuemu-detail.html?id=${data[i].id}">
                        <img alt="" src="${data[i].img}">
                    </a>
                </div>
                <div class="word">
                    <a href="yuemu-detail.html?id=${data[i].id}">
                        <div class="name pf-med">${data[i].name}</div>
                        <div class="discription">
                           ${data[i].introduction}
                        </div>
                    </a>
                </div>
            </li>
            `
        }
    },
    error:function(error) {
        console.log(error)
    }
})
// 字体变红
$(".nav-item").click(function() {
    $(this).children(".all-tags-container").show()
    $(".mask-wood-render").show()
    $(this).siblings().children(".all-tags-container").hide()
    $(this).children(".word-icon").addClass("active")
    $(this).siblings().children(".word-icon").removeClass("active")
})
$(".tags").children().click(function() {
    $(this).addClass("active").siblings().removeClass("active")
})
// 确定
$(".confirm").click(function() {
    var val=$(this).parent().siblings(".tags").children(".active").data("tag")
    window.location.href="yuemu-search-detail.html?tag="+val
})
$(".up-container").click(function() {
    $(this).parent(".all-tags-container").hide()
})
$(".search-container").click(function() {
    $(".viewport").hide()
    $(".mui-bar-nav").hide()
    $("#search-layer").css("display","block")
})
$(".layout-back").click(function() {
    window.history.go(-1)
})
$(".cancel").click(function() {
    window.history.go(-1)
})
// 搜索
$(".do-search").click(function() {
    if($("#keyword").val().trim()!="") {
        var key=$("#keyword").val().trim()
        window.location.href="yuemu-search-detail.html?tag="+key
    }
})
// swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: "auto",
    // spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});  