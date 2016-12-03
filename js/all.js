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
        })
    }
    var changeIcon = function() {
        $('.nav').bind('click', function() {
            $('.nav i').toggleClass('fa-ellipsis-h fa-times');
            $('body').toggleClass('open close');
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
