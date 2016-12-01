//------------- 手機下拉選單 -----
var NVB,OWL,RCP,WAL;
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

//------------- slider -----
var Vedio;
var slider = function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        mouseDrag: true,
        loop:true,
        touchDrag: true,
        video: true,
        lazyLoad:true,
        // videoWidth: 517,
        // videoHeight: 277,
        // responsive:{
        //     1024:{
        //         videoWidth: 478,
        //         videoHeight: 277,
        //     },
        // }
    })
}


var OwlFix = function()
{
    var setInit = function()
    {
        var $o = $('.owl-item');
        $o.bind('click',function(){
            var dav = $(this).attr('data-video')
            console.log(dav)
            switch(dav)
            {
                case 'http://youtu.be/ho8LluWWUtw':
                    bga('影片/功能篇')
                    break;
                case 'http://youtu.be/BTdS4Hfwnjk':
                    bga('影片/比較篇')
                    break;
                case 'http://youtu.be/-1RA-WHBpfM':
                    bga('影片/料理篇')
                    break;
            }
        })
       // $('.vedio .owl-carousel .item-video').css({
       //  'height':364
       // })
    }
    this.fixPlay = function()
    {
        $('.vedio .owl-carousel .item-video').css({
                'height':364
               })
    }

    this.fixStop = function()
    {
        $('.vedio .owl-carousel .item-video').css({
                'height':317
               })
    }

    setTimeout(setInit,4000)
}



var Recipe = function()
{
    var $rc;
    var setInit = function()
    {
        $('body').append('<div class="recipeContainer"></div>');
        $rc = $('.recipeContainer');
        loadDom();
    }
    var loadDom = function()
    {
        var file = 'dom/recipe.html?v=2';
        $rc.load(file,finishLoaded);
    }

    var finishLoaded = function()
    {
        $rc.insertAfter($('.sgs'));
        $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'style/recipe.css') );
    }

    setInit();
}

var Wall = function()
{
    var $wall;
    var setInit = function()
    {
        $('body').append('<div class="wallContainer"></div>');
        $wall = $('.wallContainer');
        loadDom();
    }
    var loadDom = function()
    {
        var file = 'dom/wall.html';
        $wall.load(file,finishLoaded);
    }

    var finishLoaded = function()
    {
        $wall.insertAfter($('.price'));
        $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'style/wall.css') );
        var btn = $wall.find('.btnContainer .btn');
        btn.on('click',function(){
            switch($(this).index())
            {
                case 0:
                    bga('活動辦法')
                    openLightBox();
                    break;
                case 1:
                    bga('得獎名單')
                    openLightBox2();
                    break;
            }
        })
    }


    var openLightBox = function()
    {
        Fresco.show([
          { url: 'images/rule.png?v=2',
            options: {
                width:'90%',
              overflow:true
            }
            }])

    }

    var openLightBox2 = function()
    {
        Fresco.show([
          { url: 'images/winner.png',
            options: {
                width:'90%',
              overflow:true
            }
            }])

    }

    setInit();
}



// --------------------------------------------------

var init = function() {
    NVB = new NavBar();
    OWL = new OwlFix();
    RCP = new Recipe();
    WAL = new Wall();
    Vedio = new slider();
}

//------------- Jquery 載入後開始執行 -----
$(init);
