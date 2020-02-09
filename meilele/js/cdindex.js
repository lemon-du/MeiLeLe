$(function(){
    var swiper = new Swiper('.banner1', {
        slidesPerView: 'auto',
    });
    var swiper = new Swiper('.banner2', {
        autoplay: true,
        loop: true,
        slidesPerView: 'auto',
    });
    var swiper = new Swiper('.banner3', {
        slidesPerView: 'auto',
    });
    $("#back").click(function(){
        window.history.go(-1);
    })
    $.ajax({
        type: 'POST',
        url: 'http://localhost/php/cdindex.php',
        dataType: 'json',
        success: function (data) {
            $("#top-img").append(`<a href="detail.html?id=activity"><img src="${data[29].big_imgurl}" alt=""></a>`);
            for (var i = 0; i < 6; i++) {
                $("#activity-lists").append(`
                    <li class="items">
                        <div class="items-img">
                            <a href="detail.html?type=activity">
                                <img src="${data[i].list_url}" alt="">
                            </a>
                            <p class="describe">${data[i].act_msg}</p>
                        </div>
                        <p class="price">
                            <span>￥${data[i].act_price}</span>
                            <span class="sold">已售${data[i].act_sale}</span>
                        </p>
                    </li>
                `)
            }
            $("#top1-img").append(`<a href="detail.html?type=hots"><img src="${data[28].big_imgurl}" alt=""></a>`);
            for (var i = 6; i < 12; i++) {
                $(".hot-lists").append(`
                    <li class="items">
                        <div class="items-img">
                            <a href="detail.html?type=hots">
                                <img src="${data[i].list_url}" alt="">
                            </a>
                            <p class="describe">${data[i].act_msg}</p>
                        </div>
                        <p class="price">
                            <span>￥${data[i].act_price}</span>
                            <span class="sold">已售${data[i].act_sale}</span>
                        </p>
                    </li>
                `)
            }
            $("#top2-img").append(`<a href="detail.html?type=new"><img src="${data[30].big_imgurl}" alt=""></a>`);
            for (var i = 12; i < 18; i++) {
                $("#newProduct-lists").append(`
                    <li class="items">
                        <div class="items-img">
                            <a href="detail.html?type=new">
                                <img src="${data[i].list_url}" alt="">
                            </a>
                        </div>
                        <p class="nopos-describe">${data[i].act_msg}</p>
                        <p class="price">
                            <span>￥${data[i].act_price}</span>
                            <span class="sold">已售${data[i].act_sale}</span>
                        </p>
                    </li>
                `)
            }
            $("#top3-img").append(`<a href="detail.html?type=intro"><img src="${data[27].big_imgurl}" alt=""></a>`);
            for (var i = 18; i < 26; i++) {
                $("#nowIntro-lists").append(`
                    <li class="items">
                        <div class="items-img">
                            <a href="detail.html?type=intro">
                                <img src="${data[i].list_url}" alt="">
                            </a>
                        </div>
                        <p class="nopos-describe">${data[i].act_msg}</p>
                        <p class="price">
                            <span>￥${data[i].act_price}</span>
                            <span class="sold">已售${data[i].act_sale}</span>
                        </p>
                    </li>
                `)
            }
        },
        error: function (error) {
            console.log(error)
        }
    })
})