$(document).ready(function () {
    
    $(".w1").click(function (e) { 
        e.preventDefault();
        $(".week").siblings().slideUp();
        $(".wa").delay(400).slideDown();
    });

    $(".w1-2").click(function (e) { 
        e.preventDefault();
        $(".week").siblings().slideUp();
        $(".wa-2").delay(400).slideDown();
    });


    $(".w2").click(function (e) { 
        e.preventDefault();
        $(".week").siblings().slideUp();
        $(".wb").delay(400).slideDown();
    });

    $(".w2-2").click(function (e) { 
        e.preventDefault();
        $(".week").siblings().slideUp();
        $(".wb-2").delay(400).slideDown();
    });

    $(".w3").click(function (e) { 
        e.preventDefault();
        $(".week").siblings().slideUp();
        $(".wc").delay(400).slideDown();
    });

    $(".w3-2").click(function (e) { 
        e.preventDefault();
        $(".week").siblings().slideUp();
        $(".wc-2").delay(400).slideDown();
    });

    $(".w4").click(function (e) { 
        e.preventDefault();
        $(".week").siblings().slideUp();
        $(".wd").delay(400).slideDown();
    });

    $(".map").click(function (e) { 
        e.preventDefault();
        $(".week").siblings().slideUp();
        $(".map-img").delay(400).slideDown();
    });

    $(".top").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0,
        } ,700)
    });

    $("#nav").on("click","a", function (e) {
        e.preventDefault();
        const anchor = $(this).attr('href');
        const linkScroll = $(anchor).offset().top;
        $('html,body').stop().animate({ 
          scrollTop: linkScroll -120
        },700)
    });

    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        var mynav = $(".my-nav");

        if (scrollpos > 100) {
            mynav.addClass("my-nav-scroll");
        } else {
            mynav.removeClass("my-nav-scroll");
        }
    });

    $('.carousel').carousel({
        interval: 3000 // 設定輪播時間間隔，單位是毫秒
    });

});

// $(".w1").click(function (e) { 
//     e.preventDefault();
//     $(".wa").slideDown().siblings().slideUp();
// });

// $(".w2").click(function (e) { 
//     e.preventDefault();
//     $(".wb").slideDown().siblings().slideUp();
// });

// $(".w3").click(function (e) { 
//     e.preventDefault();
//     $(".wc").slideDown().siblings().slideUp();
// });

// $(".w4").click(function (e) { 
//     e.preventDefault();
//     $(".wd").slideDown().siblings().slideUp();
// });