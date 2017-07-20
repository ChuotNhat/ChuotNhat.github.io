//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-brand").addClass(".top-nav-collapse-img");
        $(".navbar-brand").css("padding-top", "0");
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-brand").removeClass(".top-nav-collapse-img");
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $('.scrolltop').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: 0
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });

});
