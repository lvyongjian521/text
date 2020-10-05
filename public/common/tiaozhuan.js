    $(document).ready(function () {
        $("a.wl").click(function(){ 
            if(confirm("您即将离开本站，访问的链接打开第三方来源网站，可能存在风险，是否继续？")){  
              return true;   
            }  
            return false;  
        }); 
    });