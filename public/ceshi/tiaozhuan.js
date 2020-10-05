var t = 5;
var s = '.';
timeID=setInterval("countDown()",1000);
function countDown(){
time.innerHTML= t +"秒后跳转"+s;
t--;
s+='.';
if (t==0) {
location.href="http://lv.free.idcfengye.com/public/ceshi"; 
clearInterval(timeID);
}
}