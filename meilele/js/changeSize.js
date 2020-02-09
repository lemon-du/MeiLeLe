// 字体自适应
(function() {   
    function change() {
        var deviceWith=document.documentElement.clientWidth;
        if(deviceWith>640) {
            deviceWith=640
        }
        document.documentElement.style.fontSize= deviceWith/16+"px";
    }
    var timer;
    change();
    window.addEventListener("resize",function() {
        clearTimeout(timer);
        timer=setTimeout(change,100);
    },false)
})()