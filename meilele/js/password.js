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
var notepatt=/^\d{6}$/;
// if($(".inp-phone .inp-note").val()!=""){
    $(".login-button").click(function() {
        if(phonepatt.test($(".phone").val())==false) {
            mui.alert('请输入正确手机号','','确认','',['','确定']) 
        }else if(notepatt.test($(".phone-code").val())==false) {
            mui.alert('请输入正确短信验证','','确认','',['','确定']) 
        }else {
            $(".pl1").addClass("pass-hide")
            $(".pl2").css("display","block")
            $(".step-li2").addClass("current")
        }
    });
// }  
if($(".p-left").val()==""){
    $(".login-button1").attr("disabled",true);
}else{
    $(".login-button1").click(function() {
        if(phonepatt.test($(".inp-password").val())==false) {
            mui.alert('请输入正确密码','','确认','',['','确定'])
        }else {
            $(".pl2").addClass("pass-hide")
            $(".pl3").css("display","block")
            $(".step-li").addClass("current")
        }
    })
}  
$(".note").click(function() {
    if(phonepatt.test($(".phone").val())==false) {
            mui.alert('请输入正确手机号','','确认','',['','确定']) 
    }else {
        if(notepatt.test($(".ver-code").val())==false) {
            mui.alert('验证码不正确','','确认','',['','确定']) 
        }else{
            mui.alert('正在获取...','','确认','',['','确定']) 
        }
    }
});
if($(".phone").val() == '' && $(".phone-code").val() == ''){
    $(".login-button").attr("disabled",true);
    $(".note").attr("disabled",true);
}
window.onkeypress=function(){
    $(".note").removeAttr('disabled');
    if($(".phone").val() != '' && $(".phone-code").val() != ''){
        $(".login-button").css("background","#da0000");
        $('.login-button').removeAttr("disabled");
    }else{
        $(".login-button").css("background","#ccc");
        $(".login-button").attr('disabled',true);
    }
};
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
