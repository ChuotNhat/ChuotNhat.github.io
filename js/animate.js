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
	var width = $("#flight").outerWidth(true);

	$(window).bind('scroll', function(){
		var x = $(window).scrollTop();
		$("#bind").text(x);
		var hintro = $("#intro").outerHeight(true);
		var heat = $("#eat").outerHeight(true);
		var hwork = $("#work").outerHeight(true);
		var hflight = $("#flight").outerHeight(true);
		var tong3 = hintro + heat + hwork;
		var tong4 = tong3 + hflight;

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
		if(x>=tong3) {
			$(".umberla").css("position", "fixed");
		}
		else {
			$(".umberla").css("position", "absolute");
		}
		if(x>=tong4) {
			$(".umberla").css("display", "none");
		}
		else {
			$(".umberla").css("display", "block");
		}
		if(x>tong4) {
			$(".full-song").css("background-position", (x-tong4)/4+"px 0px"  );
			$(".full-song1").css("background-position", (tong4-x)/4+"px 0px"  );
		}
	});

// Resize screen - change image
    $(window).resize(function() {
    	var widthwin = $(window).width();
        if(widthwin<=1024) {
			$(".umberla img").attr("src", "img/meo-bay-len-350.png");
		}
		else {
			$(".umberla img").attr("src", "img/meo-bay-len-450.png");
		}
		if(widthwin<=770) {
			$(".moddle img").attr("src", "img/my-tom-400.png");
		}
		else {
			$(".moddle img").attr("src", "img/my-tom.png");
		}
		if(widthwin<=375) {
			$(".moddle img").attr("src", "img/my-tom-300.png"); 
		}
		if(widthwin<=325) {
			$(".umberla img").attr("src", "img/meo-bay-len-280.png"); 
		}
    });
	
});