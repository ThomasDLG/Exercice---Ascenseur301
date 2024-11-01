$(document).ready(function(){
	/*  Menu  */
	$('header nav a').on('click', function(e){
		e.preventDefault();
		$('.hamburger').toggleClass('opned');
		$('header nav').toggleClass('active');
	});

	/*  Hamburger Menu & Icon  */
	$('.hamburger').on('click', function(e){
		e.preventDefault();
		$('.hamburger').toggleClass('opned');
		$('header nav').toggleClass('active');
	});

	/*  Advanced search form & Icon  */
	$('#advanced_search_btn').on("click", function(e){
		e.preventDefault();
		var ads_box =$('.advanced_search');

		if(!ads_box.hasClass('advanced_displayed')){
			$(this).addClass('active');
			ads_box.stop().fadeIn(200).addClass('advanced_displayed');
		} else {
			$(this).removeClass('active');
			ads_box.stop().fadeOut(200).removeClass('advanced_displayed');
		}
	});

});