
/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-9-5
 * Time: ÏÂÎç4:25
 * To change this template use File | Settings | File Templates.
 */
 
window.onload=dateday;
document.onmousemove=moveHandle;
var tempx=new Array;
var tempy=new Array;
var i=0;
function moveHandle(evt){
      if(!evt)
        evt=window.event;
 
    makeMouseMove(evt.clientX,evt.clientY);
}
function makeMouseMove(xPos,yPos){
   tempx[i]=xPos;
   tempy[i]=yPos;
   i++;
   if(i==20){
       var k=0;
       for(var j=1;j<=6;j++){
           mouseMove(j,tempx[k],tempy[k]);
           k+=3
       }
       i=0;
   }
   eyeMove(xPos,yPos);
}
function eyeMove(xPos,yPos){
    var leftBall=document.getElementById("leftBall").style;
    var rightBall=document.getElementById("rightBall").style;
    leftBall.left=eyeFoll(xPos,130);
    leftBall.top=eyeFoll(yPos,200);
    rightBall.left=eyeFoll(xPos,330);
    rightBall.top=eyeFoll(yPos,200);
    function eyeFoll(currPos,eyePos){
        return Math.min(Math.max(currPos,eyePos+3),eyePos+60)+"px";
    }
}
function mouseMove(i,xPos,yPos){
 
    var rightBall=document.getElementById("rightBall"+i).style;
 
    rightBall.left=mouseFoll(xPos,330);
    rightBall.top=mouseFoll(yPos,200);
    function mouseFoll(currPos,eyePos){
        return currPos+"px";
    }
 
}
 
function dateday(){
    var date=new Date();var hour;var min=date.getMinutes();var second=date.getSeconds();var houzui="";
    if(second<10)second = "0"+second;
    if(show24()||date.getHours()<13){
         hour= date.getHours();
    }
    if(show24()==false){
        if(date.getHours()>12){
            hour= date.getHours()-12;houzui=" PM";
        }
        else{
            hour= date.getHours();houzui=" AM";
        }
    }
    var temp=Math.floor((date.getTime())/(1000*60*60));min=Math.floor((date.getTime()-temp*60*1000*60)/(1000*60));second=Math.floor((date.getTime()-temp*60*60*1000-min*1000*60)/1000);
    document.getElementById("biaoTi").innerHTML="BeiJing Time: "+hour+":"+min+":"+second+houzui;
    setTimeout(dateday,1000)
}
function show24(){
    return document.getElementsByName("radico")[0].checked;
}
