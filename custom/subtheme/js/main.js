/*global $, alert, console */

$(function() {
	'use strict';
	
	// $('html').niceScroll();
	
	/*--------- /Add Scrolled class to navbar -----
	$(window).scroll(function(){
		var navbar = $('nav');
		if($(window).scrollTop() >= navbar.height()){
			if(!navbar.hasClass('scrolled')){
				navbar.addClass('scrolled');
			}			
		}else{
			navbar.removeClass('scrolled');
		}
	});*/
	
	/*--------- Add Active Class to Clicked Link in navbar -----*/
	$(".menu--main li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		
		/*--------- Make Smooth Scroll -----*/
		$('html , body').animate({
			scrollTop : ($($(this).data("link"))).offset().top - 50
		},1500);
		
	
    });
});