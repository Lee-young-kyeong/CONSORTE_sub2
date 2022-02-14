$(function(){
    $(".nav").mouseover(function(){
        $(".sub").stop().slideDown();
    });
    $(".nav").mouseout(function(){
        $(".sub").stop().slideUp();
    });
});
