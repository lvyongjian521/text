var OriginTitile = document.title,
titleTime;
document.addEventListener("visibilitychange",
function() {
    if (document.hidden) {
        $('[rel="shortcut icon"]').attr("href", "//lv.free.idcfengye.com/public/common/huaji.ico");
        document.title = "QAQ,你就这样抛弃我了嘛╥﹏╥...";
        clearTimeout(titleTime)
    } else {
        $('[rel="shortcut icon"]').attr("href", "//lv.free.idcfengye.com/public/favicon.ico");
        document.title = "(/≧▽≦/)耶咦~！你又回来了！ " + OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile
        },
        2000)
    }
});