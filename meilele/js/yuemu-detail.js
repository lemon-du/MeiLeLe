     // swiper
     var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });   
    var swiper1 = new Swiper('.swiper-container-free-mode', {
        slidesPerView: "auto",
        // spaceBetween: 30,
        loop:false,
        pagination: {
            el: '.pagination',
            type:'fraction',
        },
    });
    $(".head-nav-right").click(function() {
        if($("#JS_mll_header_menu_new").css("display")=="none") {
            $("#JS_mll_header_menu_new").show()
        }else if($("#JS_mll_header_menu_new").css("display")=="block") {
            $("#JS_mll_header_menu_new").hide()
        }
    })
    // 
    var tag=window.location.search.split("=")[1];
    $.ajax({
        type: "get",
        data:{
            id:tag
        },
        dataType: "json",
        url: "http://localhost/php/yuemu-detail.php",
        success:function(data) {
            $(".mui-title").text(data.name)
            $(".wood-pic").get(0).innerHTML=`
            <img src="${data.img}"/>
            `
        },
        error: function(error) {
            console.log(error)
        }
    })
    $(".layout-back").click(function() {
        window.history.go(-1)
    })