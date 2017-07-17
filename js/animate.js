$(document).ready(function(){
	window.onload = function(e){ 
	    var x = document.getElementById("box-load");
	    x.style.display = 'none';
		var y = document.getElementById("box-content");
	    y.style.display = 'block';
	}
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
			$(".content-work img").attr("src", "img/work2.png");
		}
		else {
			$(".content-work img").attr("src", "img/work1.png");
		}
		if(x>1600) {
			$(".content-work img").attr("src", "img/work3.png");
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
		if(x> 4220) {
			$(".ong-hut").css("top", -300 + 1.06*x-4220 + "px");
		}
	});

});