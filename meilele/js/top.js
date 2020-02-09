  // 请求后台数据
  function render(val) {
    $.ajax({
        type: "get",
        data: {
            tag: val
        },
        dataType: "json",
        url: "http://localhost/php/top.php",
        success: function (data) {
            let newdata=data.filter((val,index)=>{
                return val.hotsale!=0;
            })
            newdata.length=3;
            newdata.forEach((val,index) => {
                $(".top-three").get(0).innerHTML+=`
                    <li>
                        <a href="detail.html?type=${val.type}">
                            <div class="position">
                                <div class="tag tag-${index+1}">
                                    <div class="up-down">
                                        <div class="up  PF-Semibold">TOP</div>
                                        <div class="down  PF-Semibold">0${index+1}</div>
                                    </div>
                                </div>
                                <div class="Left">
                                    <img src="${val.img}" alt="">
                                </div>
                                <div class="Right">
                                    <div class="name">${val.title}</div>
                                    <div class="hotIndex PF-Semibold">热卖指数${val.hotsale}℃
                                        <i class="icon"></i>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="prices">
                                        <span class="show-price PF-Regular">${val.price}</span>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </li>
                `
            });
            let afterul=data.filter((val)=>{
                return val.hotsale==0
            })
            afterul.forEach((val,index)=>{
                Number(index+4)<10?index="0"+Number(index+4):index=Number(index+4);
                $(".top-three-after").get(0).innerHTML+=`
                    <li>
                        <a href="detail.html?id=${val.type}">
                            <div class="tag">
                                <div class="up-down">
                                    <div class="up PF-Semibold">TOP</div>
                                    <div class="down PF-Semibold">${index}</div>
                                </div>
                            </div>
                            <div class="left">
                                <img src="${val.img}" alt="">
                            </div>
                            <div class="right">
                                <div class="name">${val.title}</div>
                                <div class="acts PF-Semibold" id="JS_tags_110763">
                                </div>
                                <div class="prices">
                                    <span class="show-price PF-Regular">${val.price}</span>
                                </div>
                            </div>
                        </a>
                    </li>
                `
            })
        },
        error: function (error) {
            console.log(error)
        }
    })
}
render("sofa")
$(".nav-item,.js_tab").click(function () {
    for(var i=0; i<$(".nav-item").children("a").length;i++) {
        if($(this).children("a").text().trim()==$(".nav-item").children("a").get(i).innerHTML.trim()) {
            $(".nav-item").removeClass("active")
            $(".nav-item").eq(i).addClass("active")
        }
    }
    var next="点击继续浏览-"+$(".active").parent().next().children().children("a").text().trim()+"TOP排行榜";
    $(".go-next").children("a").text(next);
    $(".top-three").get(0).innerHTML="";
    $(".top-three-after").get(0).innerHTML="";
    var navitemTxt=$(this).children("a").text().trim()+"热销榜单";
    $(".mainContent").children(".title-container").children(".info").text(`${navitemTxt}`)
    var tab=$(this).data("tag");
    render(tab)
})
// 继续浏览
$(".go-next").click(function() {
    var next="点击继续浏览-"+$(".active").parent().next().next().children().children("a").text().trim()+"TOP排行榜";
    $(this).children("a").text(next);
    $(".active").parent().next().children().addClass("active").parent().siblings().children().removeClass("active")
    $(".top-three").get(0).innerHTML="";
    $(".top-three-after").get(0).innerHTML="";
    $(".info").text($(".active").children("a").text().trim());
    render($(".active").data("tag"))
})
 // 更多出现
 $(".nav-container").children(".more").click(function() {
    if($(".category-position").css("display")=="none") {
        $(".category-position").show()
        $("#mask").show()
    }else if($(".category-position").css("display")=="block") {
        $(".category-position").hide()
        $("#mask").hide()
    }
})
$(".cate").click(function() {
    setTimeout(function() {
        $(".category-position").hide()
        $("#mask").hide()
    },100)
})
// 分类滑动
var swiper = new Swiper('.swiper-container', {
    slidesPerView:"auto"
});