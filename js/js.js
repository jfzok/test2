$(document).ready(function () {
    
    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        var mynav = $(".my-nav");
        var mynavli = $(".my-nav-li");
        var navritems = $(".nav-ritems")
        if (scrollpos > 100) {
            mynav.addClass("my-nav-scroll");
            mynavli.addClass("my-nav-li-scroll");
            navritems.addClass("nav-ritems-scroll")
        } else {
            mynav.removeClass("my-nav-scroll");
            mynavli.removeClass("my-nav-li-scroll");
            navritems.removeClass("nav-ritems-scroll")
        }
    });

    $('.carousel').carousel({
        interval: 3000
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



    let artadd1 = 0;
    let artadd2 = 0;
    let artadd3 = 0;

    let voted = false;

    $("#art1").click(function () {
        if(!voted) {
            artadd1++;
            $("#art-vote1").text(artadd1);
            voted = true;
            $(this).siblings().prop("disabled" , true);
            $(".voted").text("已投票");
        }
    });

    $("#art2").click(function () {
        if(!voted) {
            artadd2++;
            $("#art-vote2").text(artadd2);
            voted = true;
            $(this).siblings().prop("disabled" , true);
            $(".voted").text("已投票");
        }
    });

    $("#art3").click(function () {
        if(!voted) {
            artadd3++;
            $("#art-vote3").text(artadd3);
            voted = true;
            $(this).siblings().prop("disabled" , true);
            $(".voted").text("已投票")
        }

    });

    $(".open").ready(function () {
        $(".open").animate({opacity: 1} , 500);
        $(".open-title").delay(1000).animate({opacity: 1} , 1000);
        $(".open-text").delay(2000).animate({opacity: 1} , 500);

        $(".open").delay(3000).animate({opacity: 0} , 500);
        $(".open-title").delay(3000).animate({opacity: 0} , 500);
        $(".open-text").delay(3000).animate({opacity: 0} , 500 , function() {

        });

        $(".open").css({display: "none"});
    });

});
