var tag=window.location.search.split("=")[1];
$.ajax({
    type: "get",
    data:{
        tag:tag
    },
    dataType: "json",
    url: "http://localhost/php/yuemu-search-detail.php",
    success:function(data) {
        var flag=tag=="europe"?"欧洲":tag=="africa"?"非洲":tag=="america"?"美洲":tag=="other"?"其他":tag=="asia"?"亚洲":tag=="oceania"?"大洋洲":tag=="Chinesepine"?"松木":tag=="camphorwood"?"樟木":tag=="oakwood"?"橡木":tag=="balata"?"橡胶木":tag=="furnitureMaterial"?"家具材料":tag=="floorMaterial"?"地板材料":tag=="processMaterial"?"工艺木品":tag=="public"?"大众":tag=="high-grade"?"高档":tag=="cherish"?"珍稀":"中档";
        $(".name").text(flag);
        $(".search_input").text(flag)
        $(".number").text(data.length)
        for(var i=0;i<data.length;i++) {
            $(".content-render-container").get(0).innerHTML+=`
            <li>
                <div class="pic">
                    <a href="yuemu-detail.html?id=${data[i].id}">
                        <img alt="" src="${data[i].img}">
                    </a>
                </div>
                <div class="word">
                    <a href="yuemu-detail.html?id=${data[i].id}">
                        <div class="name pf-med">${data[i].name}</div>
                        <p class="othername">${data[i].introduction}</p>
                    </a>
                </div>
            </li>
            `
        }
    },
    error: function(error) {
        console.log(error)
    }
})
$(".search_from").click(function() {
    window.location.href="yuemu-search.html"
})
$(".logo").children().click(function() {
    window.history.go(-1)
}) 