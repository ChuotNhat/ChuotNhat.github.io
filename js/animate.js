$(document).ready(function(){
	wow = new WOW(
		{
			boxClass:     'wow',      // default
			animateClass: 'animated', // default
			offset:       0,          // default
			mobile:       true,       // default
			live:         true        // default

		}
	)
	wow.init();

	$(window).bind('scroll', function(){
		var x = $(window).scrollTop();
		$("#bind").text(x);
		if(x>=100) {
			$("#intro-wow").css("display","block");
			$("#intro-small").css("display","block");
		}
		if(x>=1365) {
			$(".changeimg img").attr("src", "img/work2.png");
		}
		else {
			$(".changeimg img").attr("src", "img/work1.png");
		}
		if(x>1600) {
			$(".changeimg img").attr("src", "img/work3.png");
		}
		if(x>=2301) {
			$(".umberla").css("position", "fixed");
		}
		else {
			$(".umberla").css("position", "absolute");
		}
		if(x>=3513) {
			$(".umberla").css("display", "none");
		}
		else {
			$(".umberla").css("display", "block");
		}
		if(x>3800) {
			$(".full-song").css("background-position", (x-3948)/4+"px 0px"  );
			$(".full-song1").css("background-position", (3948-x)/4+"px 0px"  );
		}
	});
	// var hintro = $("#intro").outerHeight(true);
	// var heat = $("#eat").outerHeight(true);
	// var hwork = $("#work").outerHeight(true);
	// var hflight = $("#flight").outerHeight(true);
	// var hsea = $("#sea").outerHeight(true);
	// var hsea1 = $("#sea1").outerHeight(true);
	// var tong = hintro + heat + hwork;

	var width = $("#flight").outerWidth(true);
	if(width<=400) {
		$(".moddle img").attr("src", "img/my-tom-300.png"); 
	}
	else {
		$(".moddle img").attr("src", "img/my-tom-300.png"); 
	}
	if(width<=770) {
		$(".moddle img").attr("src", "img/my-tom-400.png");
		$(".umberla img").attr("src","img/meo-bay-len-280.png");
	}
	else {
		$(".moddle img").attr("src", "img/my-tom.png");
		$(".umberla img").attr("src","img/meo-bay-len-350.png");
	}
	if(width<=1024) {
		$(".umberla img").attr("src", "img/meo-bay-len-350.png");
	}
	else {
		$(".umberla img").attr("src", "img/meo-bay-len-450.png");
	}
});