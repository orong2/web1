$(".menu>li").mouseover(function(){
    $(".submenu,.subback").stop().slideDown();
});

$(".menu>li").mouseleave(function(){
    $(".submenu,.subback").stop().slideUp();
});


//이것도 레프트가 안되오.................ㅜㅜ
start();
var now=0;
var imgs=2;

function start(){
    $("#slide>img").eq(0).siblings().css({"margin-top":"-2000px"});
    setInterval(function(){slide();},2000)
};

function slide(){
    if(now==imgs){
        now=0;
    }
    else{
        now=now+1;
    }
    $("#slide>img").eq(now-1).css({"margin-top":"-2000px"});
    $("#slide>img").eq(now).css({"margin-top":"0px"});
}


function pop_win(){
    $(".pop").show();
}

$(".btn").click(function(){
    $(".pop").hide();
})