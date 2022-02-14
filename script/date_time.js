$(document).ready(function(){ 
    var now = new Date(); //전체 
    $(".all").text(now); 

    var year=now.getFullYear();//연도 
    $(".date span").eq(0).text(year); 

    var month=now.getMonth()+1;//월 
    $(".date span").eq(1).text(month); 

    var date=now.getDate();//일 
    $(".date span").eq(2).text(date); 

    var hr=now.getHours();//시간 
    $(".time span").eq(0).text(hr); 

    var min=now.getMinutes();//분 
    $(".time span").eq(1).text(min); 

    var sec=now.getSeconds();//초 
    $(".time span").eq(2).text(sec); 
});
