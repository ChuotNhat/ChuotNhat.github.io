$(document).ready(function () {
	$('.sliders').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		infinite: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
				
			},

			{
				breakpoint: 554,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});

	$('.slider-footer').slick({
		slidesToShow: 12,
		slidesToScroll: 12,
		dots: false,
		infinite: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 9,
					slidesToScroll: 9
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},

			{
				breakpoint: 554,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}
		]
	});

	// Click on icon user
	$('.icon-header-right.icon-user').on('click', function(){
		$('.slidebar-form').addClass('display-form');
	});

	// Close form login

	$('.slidebar-form .close').on('click', function(){
		$('.slidebar-form').removeClass('display-form');
	});


	var $searchEl = $('.search-section');

	// Click on icon search
	$('.icon-header-right.icon-search').on('click', function(){
		$searchEl.toggleClass('slide-down');
	});

	// Close form search
	$('.search-section .close').on('click', function(){
		$searchEl.removeClass('slide-down');
	});

	// Remove search section when you scroll over search section
	$(window).scroll(function() {
		var positionY = $(window).scrollTop(),
			heightSearchSec = $searchEl.outerHeight(),
			heightWindow = $( window ).height();

		if ( positionY > heightSearchSec && $searchEl.hasClass('slide-down')) {
			$searchEl.removeClass('slide-down');
		}

		if (positionY < heightWindow/2) {
			$('.scroll-to-top').addClass('d-none');
		} else {
			$('.scroll-to-top').removeClass('d-none');
		}
	});

	// scroll to top
	$('.scroll-to-top a').on('click', function(e){
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

	// animation typing
	var typed = new Typed(".animation-text", {
		strings: ["If you're using this", "let me know!", "I'd love to see it."],
		typeSpeed: 60,
		loop: true,
		backSpeed: 25,
		backDelay: 1500
	});

	// on click menu mobile
	$('.nav-lever-1').on('click', function(){
		$(this).find('.content-nav-lever-1').slideToggle();
		$(this).siblings().find('.content-nav-lever-1').slideUp();
	});
});