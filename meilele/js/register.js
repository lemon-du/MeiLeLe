var verifyCode = new GVerify("code_img");
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
 // 注册
 var phonepatt=/^1[3-9]\d{9}$/;
 var passwordpatt=/^[0-9A-z]{6,12}$/;
 // var photopatt=/^[0-9a-zA-Z]{4}$/
 var notepatt=/^\d{6}$/;
//  if($(".inp-phone .inp-captcha .inp-note").val()!=""){
     $(".login-button").click(function() {
         if(phonepatt.test($(".phone").val())==false) {
             mui.alert('请输入正确手机号','','确认','',['','确定']) 
         }else if(notepatt.test($(".phone-code").val())==false) {
             mui.alert('请输入正确短信验证','','确认','',['','确定']) 
         }else if(passwordpatt.test($(".password").val())==false) {
             mui.toast('密码过于简单，请设置为6至20位字母数字或符号的组合',{ duration:'long', type:'div' }) 
             // mui.alert('请设置登录密码','','确认','',['','确定']) 
         } else {
             setTimeout(function(){
                mui.toast('注册成功，请登录!',{ duration:'long', type:'div' }) 
                setTimeout(function(){
                     window.location.href="注册";
                 },2000)
            },2000)
         }
     });
     // 注册
if(localStorage.getItem("usererr1")){
    mui.alert('手机号已注册!','','确认','',['','确认']) 
}
if(localStorage.getItem("usererr2")){
    mui.alert('注册成功，请登录!','','确认','',['','确认']) 
}
// 删除localstorage
$(".layout-back").click(function() {
    window.localStorage.removeItem('usererr1')
    window.localStorage.removeItem('usererr2')
});
//  }  
 $(".note").click(function() {
    if($(".phone").val() != '') {
        $('.note').removeAttr("disabled");
        var input = document.getElementsByClassName("ver-code")[0];
        var res = verifyCode.validate(input.value);
        if(phonepatt.test($(".phone").val())==false) {
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
//phone
$(".phone").keydown(function() {
    setTimeout(function() {
        if($(".phone").val() != ""){
            $(".note").addClass("note-color");
            $(".del-icon").show();
            $(".phone").focus(function() {
                $(".del-icon").show();  
            })
        }else{
            $(".note").removeClass("note-color");
            $(".del-icon").hide(); 
            $(".phone").focus(function() {
                $(".del-icon").hide();  
            })
        }
        $(".phone").blur(function() {
            $(".del-icon").hide();  
        })
    },200)
})
$(".del-icon").mousedown(function(){
    $(".phone").val("");
});
// ver-code
$(".ver-code").keydown(function() {
    setTimeout(function() {
        if($(".ver-code").val() != ""){
            $(".del-icon1").show();
            $(".ver-code").focus(function() {
                $(".del-icon1").show();  
            })
        }else{
            $(".del-icon1").hide(); 
            $(".ver-code").focus(function() {
                $(".del-icon1").hide();  
            })
        }
        $(".ver-code").blur(function() {
            $(".del-icon1").hide();  
        })
    },200)
})
$(".del-icon1").mousedown(function(){
    $(".ver-code").val("");
});
// phone-code
$(".phone-code").keydown(function() {
    setTimeout(function() {
        if($(".phone-code").val() != ""){
            $(".del-icon2").show();
            $(".phone-code").focus(function() {
                $(".del-icon2").show();  
            })
        }else{
            $(".del-icon2").hide(); 
            $(".phone-code").focus(function() {
                $(".del-icon2").hide();  
            })
        }
        $(".phone-code").blur(function() {
            $(".del-icon2").hide();  
        })
    },200)
})
$(".del-icon2").mousedown(function(){
    $(".phone-code").val("");
});
//password
$(".password").keydown(function() {
    setTimeout(function() {
        if($(".password").val() != ""){
            $(".del-icon3").show();
            $(".password").focus(function() {
                $(".del-icon3").show();  
            })
        }else{
            $(".del-icon3").hide(); 
            $(".password").focus(function() {
                $(".del-icon3").hide();  
            })
        }
        $(".password").blur(function() {
            $(".del-icon3").hide();  
        })
    },200)
})
$(".del-icon3").mousedown(function(){
    $(".password").val("");
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
// 
if($(".phone").val() == '' && $(".ver-code").val() == '' && $(".phone-code").val() == ''&& $(".password").val() == ''){
    $(".login-button").attr("disabled",true);
}
window.onkeydown=function(){
    $(".note").attr('disabled',true);
    if($(".phone").val() != '' && $(".ver-code").val() != '' && $(".phone-code").val() != ''&& $(".password").val() != ''){
        $(".login-button").css("background","#da0000");
        $('.login-button').removeAttr("disabled");
    }else{
        $(".login-button").css("background","#ccc");
        $(".login-button").attr('disabled',true);
    }
};

