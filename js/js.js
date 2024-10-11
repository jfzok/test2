$(document).ready(function () {
    
    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        var nav = $(".my-nav");
        var navopen = $(".my-nav-open");
        var dark = $(".dark");

        if (scrollpos > 100) {
            nav.addClass("my-nav-scroll");
            navopen.addClass("my-nav-open-scroll");
            dark.addClass("dark-scroll");
        } else {
            nav.removeClass("my-nav-scroll");
            navopen.removeClass("my-nav-open-scroll"); 
            dark.removeClass("dark-scroll")
        }

    }); 

    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        var addtop = 160 + scrollpos * 0.2;

        $('#sticky').css('top', addtop + 'px'); // 动态调整top值
    });


    $(window).on('scroll', function() {
        var box3offset = -500;
        var box4offset = -150;  // 你可以調整這個值來提前或延後觸發
        var box5offset = -150
        var box6offset = -300;

        if ($(window).scrollTop() + $(window).height() > $(".box3").offset().top + $(".box3").outerHeight() + box3offset) {
            setTimeout(function () {
                $(".delay1").addClass("fadein-show");
            }, 500);
            
            setTimeout(function () {
                $(".delay2").addClass("fadein-show");
            }, 700);
            
            setTimeout(function () {
                $(".delay3").addClass("fadein-show");
            }, 900);
            
            $(".fadein-hide").parent().siblings().addClass("fadein-show");
        } else {
            $(".fadein-hide").removeClass("fadein-show");
        }

        if ($(window).scrollTop() + $(window).height() > $('.box4').offset().top + $('.box4').outerHeight() + box4offset) {
            $('.big-title').addClass('title');
            $('.hide').addClass('show');
        } else {
            $('.big-title').removeClass('title');
            $('.hide').removeClass('show');
        }

        if ($(window).scrollTop() + $(window).height() > $(".box5").offset().top + $(".box5").outerHeight() + box5offset) {
            $('.box5-title').addClass('fadein-show');
            
            setTimeout(function () {
                $(".box5-box").addClass('fadein-show');
            }, 500);
        } else {
            $('.box5-title').removeClass('fadein-show');
            
            setTimeout(function () {
                $(".box5-box").removeClass('fadein-show');
            }, );
        }

        if ($(window).scrollTop() + $(window).height() > $(".box6").offset().top + $(".box6").outerHeight() + box6offset) {
            $("body").addClass("bg-black");
            $(".box6-title,label").addClass("white")
        } else {
            $("body").removeClass("bg-black");
            $(".box6-title,label").removeClass("white");
        }
    });
    
    $(".box5-a").click(function (e) {
        e.preventDefault();
    
        // 隱藏其他的 .box5-b 並重置其他圖標為 fa-plus
        $(this).parent().siblings().find(".box5-b").slideUp();
        $(this).parent().siblings().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
    
        // 切換當前點擊的 .box5-a 的顯示狀態
        $(this).parent().find(".box5-b").slideToggle();
    
        // 切換圖標
        $(this).find(".fa-plus, .fa-minus").toggleClass("fa-plus fa-minus");
    });

    $(document).ready(function () {
        // 每个span按顺序下滑显示
        setTimeout(function() {
            $(".a").css("transform", "translateY(0px)");
        }, 100);

        setTimeout(function() {
            $(".b").css("transform", "translateY(0px)");
        }, 150);
        setTimeout(function() {
            $(".c").css("transform", "translateY(0px)");
        }, 200);
        setTimeout(function() {
            $(".d").css("transform", "translateY(0px)");
        }, 250);
        setTimeout(function() {
            $(".e").css("transform", "translateY(0px)");
        }, 300);
        setTimeout(function() {
            $(".f").css("transform", "translateY(0px)");
        }, 350);
        setTimeout(function() {
            $(".g").css("transform", "translateY(0px)");
        }, 400);
    });



});