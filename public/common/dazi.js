window.onload = function(){
//需要输出的文字;
var word ="2020/9/20：正常  2020/9/20：正常  2020/9/2020：正常  2020/9/20：正常  2020/9/20：正常  2020/9/2020  正常  2020/9/20：正常  2020/9/20：正常  2020/9/20：正常                warn：刷新停止                  error：探测到非法下载日志文件     error：终止链接";
var typer = document.querySelector(".copyright-typer");
var p = typer.getElementsByTagName("p");
var timer = null;
var num = 0;
function autoPlay(){
timer = setInterval(function(){
num++;
if(num > word.length){
num = 0;
clearInterval(timer);
}else{
p[0].innerHTML = word.substring(0,num);
}
},200);
}
autoPlay();
}