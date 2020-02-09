 // 自适字体
 (function() {
    function change() {
        var reveal=document.documentElement;
        var device=reveal.getBoundingClientRect().width;
        if(device>750) {
            device=750
        }
        rem=device/7.5
        reveal.style.fontSize= rem+"px";
    }
    var delayed;
    change();
    window.addEventListener("resize",function() {
        clearTimeout(delayed)
        delayed=setTimeout(change,100);
    },false)
})()
$("#password").click(function(){
    $("#password").addClass("light");
    $("#phone").removeClass("light");
    $(".phone-login").css("display","none");
    $(".password-login").css("display","block");
    $(".login-options").css("display","none");
    $(".login-options1").css("display","block");
    // passwordLogin.animate({
    //     right:625,
    // })
 })
 $("#phone").click(function(){
    $("#phone").addClass("light");
    $("#password").removeClass("light");
    $(".phone-login").css("display","block");
    $(".password-login").css("display","none");
    $(".login-options1").css("display","none");
     $(".login-options").css("display","block");
    //  phoneLogin.animate({
    //     left:625,
    // })
 })

$(".inp-phone").keydown(function() {
    setTimeout(function() {
        if($(".inp-phone").val() != ""){
            $(".note").addClass("note-color");
            $(".del-icon").show();
            $(".inp-phone").focus(function() {
                $(".del-icon").show();  
            })
        }else{
            $(".note").removeClass("note-color");
            $(".del-icon").hide(); 
            $(".inp-phone").focus(function() {
                $(".del-icon").hide();  
            })
        }
        $(".inp-phone").blur(function() {
            $(".del-icon").hide();  
        })
    },200)
})
$(".del-icon").mousedown(function(){
    $(".inp-phone").val("");
});
// inp-captcha
$(".inp-captcha").keydown(function() {
    setTimeout(function() {
        if($(".inp-captcha").val() != ""){
            $(".del-icon1").show();
            $(".inp-captcha").focus(function() {
                $(".del-icon1").show();  
            })
        }else{
            $(".del-icon1").hide(); 
            $(".inp-captcha").focus(function() {
                $(".del-icon1").hide();  
            })
        }
        $(".inp-captcha").blur(function() {
            $(".del-icon1").hide();  
        })
    },200)
})
$(".del-icon1").mousedown(function(){
    $(".inp-captcha").val("");
});
// inp-note
$(".inp-note").keyup(function() {
    setTimeout(function() {
        if($(".inp-note").val() != ""){
            $(".del-icon2").show();
            $(".inp-note").focus(function() {
                $(".del-icon2").show();  
            })
        }else{
            $(".del-icon2").hide(); 
            $(".inp-note").focus(function() {
                $(".del-icon2").hide();  
            })
        }
        $(".inp-note").blur(function() {
            $(".del-icon2").hide();  
        })
    },200)
});
$(".del-icon2").mousedown(function(){
    $(".inp-note").val("");
});
//inp-portrait
$(".inp-portrait").keydown(function() {
    setTimeout(function() {
        if($(".inp-portrait").val() != ""){
            $(".del-icon3").show();
            $(".inp-portrait").focus(function() {
                $(".del-icon3").show();  
            })
        }else{
            $(".del-icon3").hide(); 
            $(".inp-portrait").focus(function() {
                $(".del-icon3").hide();  
            })
        }
        $(".inp-portrait").blur(function() {
            $(".del-icon3").hide();  
        })
    },200)
})
$(".del-icon3").mousedown(function(){
    $(".inp-portrait").val("");
});
  //inp-password 
$(".inp-password").keydown(function() {
    setTimeout(function() {
        if($(".inp-password").val() != ""){
            $(".del-icon4").show();
            $(".inp-password").focus(function() {
                $(".del-icon4").show();  
            })
        }else{
            $(".del-icon4").hide(); 
            $(".inp-password").focus(function() {
                $(".del-icon4").hide();  
            })
        }
        $(".inp-password").blur(function() {
            $(".del-icon4").hide();  
        })
    },200)
})
$(".del-icon4").mousedown(function(){
    $(".inp-password").val("");
});
// 登录验证
var phonepatt=/^1[3-9]\d{9}$/;
var passwordpatt=/^[0-9A-z]{6,12}$/;
// var photopatt=/^[0-9a-zA-Z]{4}$/
var notepatt=/^\d{6}$/;
// if($(".inp-phone, .inp-captcha ,.inp-note").val()!=""){
    $(".login-button").click(function() {
        if(phonepatt.test($(".inp-phone").val())==false) {
            mui.alert('请输入正确手机号','','确认','',['','确定']) 
        }else if($(".inp-captcha").val() !="") {
            // 验证验证码
            var input = document.getElementsByClassName("inp-captcha")[0];
            var res = verifyCode.validate(input.value);
            if(phonepatt.test($(".inp-phone").val())==false) {
                    mui.alert('请输入正确手机号','','确认','',['','确定']) 
            }else if(!res) {
                    mui.alert('验证码不正确','','确认','',['','确定']) 
                }else{
                    var time = 120;
                    var timer = setInterval(function () {
                        if (time == 0) {
                            clearInterval(timer);
                            $(".note").html("获得短信验证码");
                        } else {
                            $(".note").html(time +'秒');
                            time--;
                        }
                    }, 1000);
                }

        }else if(notepatt.test($(".inp-note").val())==false) {
            mui.alert('请输入正确短信验证','','确认','',['','确定']) 
        }else {
            setTimeout(function(){
                window.location="meilele-index.html";
            },1000)
        }
        
    });
// } 
// 登录
// if($(".inp-phone,.inp-password").val()!=""){
    $(".login-button1").click(function() {
        if(phonepatt.test($(".inp-phone1").val())==false) {
            mui.alert('请输入正确用户名','','确认','',['','确定']) 
        }else if(passwordpatt.test($(".inp-password").val())==false) {
            mui.alert('登录失败，请检查用户名或密码','','确认','',['','确定']) 
        }else  {
            mui.toast('正在验证...',{ duration:'long', type:'div' }) 
        }
    });
// }
// 实例验证码
var verifyCode = new GVerify("code_img");
$(".note").click(function() {
    if($(".inp-phone").val() != '') {
        var input = document.getElementsByClassName("inp-captcha")[0];
        var res = verifyCode.validate(input.value);
        if(phonepatt.test($(".inp-phone").val())==false) {
            mui.alert('请输入正确手机号','','确认','',['','确定']) 
        }else if(!res) {
            mui.alert('验证码不正确','','确认','',['','确定']) 
        }else{
            var time = 120;
            var timer = setInterval(function () {
                if (time == 0) {
                    clearInterval(timer);
                    $(".note").html("获得短信验证码");
                } else {
                    $(".note").html(time +'秒');
                    time--;
                }
            }, 1000);
        }
    }else {
        $(".note").attr('disabled',true);
    }
});
// 按键高亮是否能被点击
if($(".inp-phone").val() == '' && $(".inp-captcha").val() == '' && $(".inp-note").val() == '' ){
    $(".login-button").attr('disabled',true);
}
window.onkeyup=function(){
    $(".note").removeAttr("disabled");
    if($(".inp-phone").val() != '' && $(".inp-captcha").val() != '' && $(".inp-note").val() != '' ){
        $(".login-button").css("background","#da0000");
        $('.login-button').removeAttr("disabled");
    }else{
        $(".login-button").css("background","#ccc");
        $(".login-button").attr('disabled',true);
    }
};
//密码登录
if($(".inp-phone1").val() == '' && $(".inp-password").val() == '' ){
    $(".login-button1").attr('disabled',true);
}
window.onkeydown=function(){
    if($(".inp-phone1").val() != '' && $(".inp-password").val() != '' ){
        $(".login-button1").css("background","#da0000");
        $('.login-button1').removeAttr("disabled");
    }else{
        $(".login-button1").css("background","#ccc");
        $(".login-button1").attr('disabled',true);
    }
};