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
            for (var i = 36; i < 40; i++) {
                $("#activity-lists").append(`
                    <li class="items">
                        <div class="items-img">
                            <a href="detail.html?type=hotsale">
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
            $("#precious-img").append(`<a href="detail.html?id=precious"><img src="${data[40].big_imgurl}" alt=""></a>`);
            for (var i = 41; i < 45; i++) {
                $("#precious-lists").append(`
                    <li class="items">
                        <div class="items-img">
                            <a href="detail.html?type=precious">
                                <img src="${data[i].list_url}" alt="">
                            </a>
                        </div>
                        <p class="price precious-price">
                            <span>￥${data[i].act_price}</span>
                        </p>
                    </li>
                `)
            }
            for (var i = 46; i < 48; i++) {
                $("#height-lists").append(`
                    <li class="items">
                        <div class="items-img">
                            <a href="detail.html?type=hight">
                                <img src="${data[i].list_url}" alt="">
                            </a>
                        </div>
                        <p class="price precious-price">
                            <span>￥${data[i].act_price}</span>
                        </p>
                    </li>
                `)
            }
            for (var i = 49; i < 53; i++) {
                $("#height1-lists").append(`
                    <li class="items">
                        <div class="items-img">
                            <a href="detail.html?type=hight">
                                <img src="${data[i].list_url}" alt="">
                            </a>
                        </div>
                        <p class="price precious-price">
                            <span>￥${data[i].act_price}</span>
                        </p>
                    </li>
                `)
            }
            for (var i = 54; i < 56; i++) {
                $("#middle-lists").append(`
                    <li class="items">
                        <div class="items-img">
                            <a href="detail.html?type=middle">
                                <img src="${data[i].list_url}" alt="">
                            </a>
                        </div>
                        <p class="price precious-price">
                            <span>￥${data[i].act_price}</span>
                        </p>
                    </li>
                `)
            }
            for (var i = 57; i < 61; i++) {
                $("#middle1-lists").append(`
                    <li class="items">
                        <div class="items-img">
                            <a href="detail.html?type=middle">
                                <img src="${data[i].list_url}" alt="">
                            </a>
                        </div>
                        <p class="price precious-price">
                            <span>￥${data[i].act_price}</span>
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
