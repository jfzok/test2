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

    $("#nav,.box2").on("click","a", function (e) {
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
      
      $(".box9-but").click(function () {
        alert('我們已經收到您的訊息，我們我盡快回復您的');

        $(".box9-input").val("");
      });

      $('#phone').click(function(){
        // 使用 window.open 打開新窗口，並設置窗口大小和位置
        window.open('https://jfzok.github.io/test2/', 'newwindow', 'width=520,height=900,top=100,left=100');
    });


    let userLoggedIn = false;
    let hasLiked = false;
    
    // 點擊登入按鈕事件
    $('#login-btn').click(function() {
        var password = $('#password').val();
    
        // 假登入邏輯
        if (password === "123") {
            alert('登入成功！');
            userLoggedIn = true; // 登入成功，設置全局變數
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
        userLoggedIn = false; // 登出，重置登入狀態
        hasLiked = false; // 重置點讚狀態
        $('#login').show();
        $('#logout').hide();
        $('.art-a').off('click').removeClass('disabled').on('click', function() {  // 修正：先解除事件綁定
            handleLike($(this).data('id'));
        });
        $('#password').val('');
    });
    
    // 點讚功能處理
    function handleLike(artId) {
        if (!userLoggedIn) {
            alert('請先登入才能點讚！');
            return;
        }
    
        if (hasLiked) {
            alert('您只能點讚一次且只能選擇一個作品！');
            return;
        }
    
        // 更新點讚數
        let likeCountElement = $(`#like-count-${artId}`);  // 修正：使用正確的模板字串插值
        let likeCount = parseInt(likeCountElement.text().trim(), 10);  // 修正：確保數字解析正確
        if (isNaN(likeCount)) likeCount = 0;  // 防止 NaN 的情況
        likeCountElement.text(likeCount + 1);
    
        // 禁用所有點讚按鈕
        $('.art-a').addClass('disabled').off('click');
    
        hasLiked = true;  // 標記已點讚
        alert('感謝您的點讚！');
    }
    
    // 綁定點讚按鈕的點擊事件
    $('.art-a').on('click', function(e) {
        e.preventDefault();
        let artId = $(this).data('id');
        handleLike(artId);
    });
    
    
    // 檢測滾動事件
    $(window).on('scroll', function() {
        // 獲取滾動位置、窗口高度和元素位置
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var elementOffset = $('.floating-text').offset().top;

        // 當元素進入視窗時，添加 'visible' 類
        if (scrollTop + windowHeight > elementOffset) {
          $('.floating-text').addClass('visible');
        } else {
          // 當元素離開視窗時，移除 'visible' 類
          $('.floating-text').removeClass('visible');
        }
      });

});