$(function() {

//our services hover background
	$('.s_services a').hover(function(event) {
		$(this).find('.services_active').fadeIn('fast');
	},function() {
		$(this).find('.services_active').fadeOut('fast');
	});

// add active class to search box on top menu
	$('.top_search input').focus(
		function(){
			$(this).parent('div').addClass('active');
		}).blur(
		function(){
			$(this).parent('div').removeClass('active');
		});

		//main slider
		$('.flexslider').flexslider();

		//accordion menu
		$('.accordion').accordion({
			animate: 300
		});

});
