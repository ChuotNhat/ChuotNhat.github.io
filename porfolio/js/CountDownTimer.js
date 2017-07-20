$(document).ready(function(){
	$(window).bind('scroll', function(){
		var x = $(window).scrollTop();
		if(x>0) {
			$("navbar.navbar-backg").css("background","#08aae6");
			$("navbar a").css("color","white");
		}
		else {
			$("navbar.navbar-backg").css("background","none");
			$(".nav li a").css("color","#000080");
		}
		if(x>800) {
			$(".scrolltop").css("display","block");
		}
		else {
			$(".scrolltop").css("display","none");
		}
		
	});
});

function LayThoiGian( thoiGianCuoi ){
	var t = Date.parse( thoiGianCuoi ) - Date.parse(new Date());
	var giay = Math.floor( (t/1000) % 60 );
	var phut = Math.floor( (t / (1000*60)) % 60 );
	var gio = Math.floor( (t / (1000*60*60)) % 24 );
	var ngayLon = Math.floor( (t / (1000*60*60*24)) );
	var ngayNho = ngayLon % 30;
	var thang = parseInt(ngayLon / 30);
	if(giay<10) {
		var x = "0"+giay;
		giay = x;
	}
	if(phut<10) {
		var y = "0"+phut;
		phut = y;
	}
	if(gio<10) {
		var z = "0"+gio;
		gio = z;
	}
	if(ngayNho<10) {
		var t = "0"+ngayNho;
		ngayNho = t;
	}
	if(thang<10) {
		var t = "0"+thang;
		thang = t;
	}
	return {
		'TongCong' : t,
		'SoThang' :thang,
		'NgayNho':ngayNho,
		'SoGio' : gio,
		'SoPhut' : phut,
		'SoGiay' : giay
		
	};
}

function TaoBoDemNguoc(idXuatThongTin, thoiGianCuoi){
	var noiXuat = document.getElementById( idXuatThongTin );
	var xuatThang = noiXuat.querySelector('.KhungThang')
	var xuatNgay = noiXuat.querySelector('.KhungNgay');
	var xuatGio = noiXuat.querySelector('.KhungGio');
	var xuatPhut = noiXuat.querySelector('.KhungPhut');
	var xuatGiay = noiXuat.querySelector('.KhungGiay');
	
	function CapNhat(){
		var t = LayThoiGian( thoiGianCuoi );
		if (t.TongCong <= 0)
			clearInterval( DemTungGiay );
		xuatThang.innerHTML = t.SoThang;	
		xuatNgay.innerHTML = t.NgayNho;
		xuatGio.innerHTML = t.SoGio;
		xuatPhut.innerHTML = t.SoPhut;
		xuatGiay.innerHTML = t.SoGiay;
	}
	
	CapNhat();
	var DemTungGiay = setInterval(CapNhat, 1000);
}

var deadline = 'December 10 2017 00:00:00 UTC+0200';


