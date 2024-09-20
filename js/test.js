$(document).ready(function () {
     
    $(".open").ready(function () {
        $(".open-box-i").animate({
            opacity: 1,
            bottom: 0,
        } , 1000);

        $(".open-box-h2").delay(500).animate({
            opacity: 1,
            bottom: 0,
        } , 1000);

        $(".open-box-p").delay(1000).animate({
            opacity: 1,
            bottom: 0,
        } , 1000 ,function () {
            $(".open").delay(1000).fadeOut(500);
        });

    });

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

    $("#nav").on("click","a", function (e) {
        e.preventDefault();
        
        const anchor = $(this).attr('href');
        const linkScroll = $(anchor).offset().top;

        $('html,body').stop().animate({ 
          scrollTop: linkScroll 
        },700)

    });


    $(".box7-box-tr").on("click", "a", function (e) {
        e.preventDefault();
    
        // 取得 a 標籤的 class 名稱，例如 a3-1
        var targetClass = $(this).attr('class');
    
        // 選取對應的 .b3-x 元素，加上或移除 class
        $(".b3-1, .b3-12, .b3-16, .b3-29").removeClass("box7-b-bg"); // 移除所有的 box6-b-bg
        $("." + targetClass.replace('a3', 'b3')).toggleClass("box7-b-bg");
    });
      
      if ("Notification" in window) {
        // 啟動時請求使用者允許通知
        Notification.requestPermission();
      }
    
      $(".copylink").on("click", function(e) {
        e.preventDefault(); // 防止 a 標籤的預設行為
    
        // 從 data-link 屬性中取得要複製的連結
        var link = $(this).data("link");
    
        // 使用 Clipboard API 複製到剪貼簿
        navigator.clipboard.writeText(link).then(function() {
            // 使用 alert 顯示複製成功的訊息
            alert("連結已成功複製到剪貼簿！");
        }).catch(function(err) {
            // 如果複製失敗，可以顯示錯誤訊息
            alert("無法複製連結，請再試一次！");
        });
      });

      $(document).ready(function() {
        // 點擊登入按鈕事件
        $('#login-btn').click(function() {
            var password = $('#password').val();
      
            // 假登入邏輯
            if (password === "123") {
                alert('登入成功！');
      
                // 隱藏登入表單，顯示已登入訊息
                $('#login').hide();
                $('#logout').show();
            } else {
                alert('登入失敗，請再試一次。');
                $('#password').val('');  // 清空密碼輸入框
            }
        });
      
        // 點擊登出按鈕事件
        $('#logout-btn').click(function() {
            alert('已登出！');
      
            // 顯示登入表單，隱藏已登入訊息
            $('#login').show();
            $('#logout').hide();
      
            // 清空密碼輸入框
            $('#password').val('');  // 清空密碼輸入框
        });
      });
      
      $(".box9-but").click(function () {
        alert('我們已經收到您的訊息，我們我盡快回復您的');

        $(".box9-input").val("");
      });

      $('#phone').click(function(){
        // 使用 window.open 打開新窗口，並設置窗口大小和位置
        window.open('https://jfzok.github.io/test2/', 'newwindow', 'width=520,height=900,top=100,left=100');
    });
});