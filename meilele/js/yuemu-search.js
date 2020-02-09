$(".do-search").click(function() {
    if($("#keyword").val().trim()!="") {
        var key=$("#keyword").val().trim()
        window.location.href="yuemu-search-detail.html?tag="+key
    }
})
$(".cancel").click(function() {
    window.history.go(-1)
})