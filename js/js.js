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


        var addtop = 160 + scrollpos * 0.2;

        $('#sticky').css('top', addtop + 'px'); // 动态调整top值
    }); 


    $(window).on('scroll', function() {
        var offset = -150;  // 你可以調整這個值來提前或延後觸發
        if ($(window).scrollTop() + $(window).height() > $('.box4').offset().top + $('.box4').outerHeight() + offset) {
            $('.big-title').addClass('title');
            $('.hide').addClass('show');
        } else {
            $('.big-title').removeClass('title');
            $('.hide').removeClass('show');
        }
    });
    
    $(".box5-a1").click(function (e) {
        e.preventDefault();

        $(".box5-b1").slideToggle();
    });
    


});