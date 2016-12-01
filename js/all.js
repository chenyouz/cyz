//------------- 手機下拉選單 -----
var NVB,GO;
var NavBar = function() {
    var changeIcon = function() {
        $('.menu').bind('click', function() {
            $('.menu').toggleClass('fa-bars fa-times');
        })
    }
    var slideMenu = function() {
        $('.menu').bind('click', function() {
            $('#phone_menu').toggleClass('slide_menu open_menu');
        })
    }
    changeIcon();
    slideMenu();
};

//------------- go top -----
var GoTop = function() {
    $('.gotop').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


// --------------------------------------------------

var init = function() {
    NVB = new NavBar();
    GO = new GoTop();
}

//------------- Jquery 載入後開始執行 -----
$(init);
