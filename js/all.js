//------------- 手機下拉選單 -----
var NVB,GO,NAV;
//------------- go top -----
var GoTop = function() {
    $('.gotop').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

//------------- NAV -----
var Nav = function() {
    var openNav = function() {
        $('.nav').bind('click', function() {
            $('nav').toggleClass('slide_menu open_menu');
            $('body').toggleClass('open close');
            $('body, html').toggleClass('nav_height_open nav_height_close');
        })
    }
    var changeIcon = function() {
        $('.nav').bind('click', function() {
            $('.nav i').toggleClass('fa-ellipsis-h fa-ellipsis-v');
        })
    }
    openNav();
    changeIcon();
};
// --------------------------------------------------

var init = function() {
    GO = new GoTop();
    NAV = new Nav();
}

//------------- Jquery 載入後開始執行 -----
$(init);
