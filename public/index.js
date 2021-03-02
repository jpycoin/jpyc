document.addEventListener("DOMContentLoaded", function(){
	//メニューボタン
	let menuBtn = document.getElementById('menu_btn');
	//ナビゲーション
	let headerNav = document.getElementById('header_nav');

	let mains = document.getElementsByTagName("main"); 
	var img = document.getElementById('JPYC');

	//メニューボタンクリック時に
	menuBtn.addEventListener('click', function(e){
		e.preventDefault();
		if( menuBtn.classList.contains('active') == true ){
			img.setAttribute('src', '/static/media/logo2.7646da80.png');
			mains[0].style.opacity = "1"; 
		} else {
			mains[0].style.opacity = "0.6"; 
			img.setAttribute('src', 'static/media/logo-white.544aede9.png');
		}
		menuBtn.classList.toggle('active');
		headerNav.classList.toggle('move');
	});
});

$(function(){
	$(window).scroll(function(){

		// 影をつけるタイミングを調整
		var shadowPoints = 32;

		console.log($(window).scrollTop())

		// 影をつける条件分岐
		if($(window).scrollTop() >= shadowPoints ){
				$('header').css( "box-shadow", '0px 3px 3px 1px rgba(0, 35, 51, 0.4)');
		}
		else{	$('header').css( "box-shadow", "none" );
		}
	});
});