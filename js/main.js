//console.log("Hello World");

$(document).ready( function() {

    //анимация переходов

    new WOW().init();

    //переходы (якоря)

    $('a[href^="#"]').bind('click.smothscroll', function() {
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;
    });

    //button--fixed

    var top_show = 150;
    var delay = 250;
    $(document).ready(function() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > top_show) $('.button--fixed').fadeIn(200);
            else $('.button--fixed').fadeOut(200);
        });
        $('.button--fixed').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, delay);
        });
    });

});