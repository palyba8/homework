$(function() {

$('.menu h3').on('click',function(e) {
	e.preventDefault();

	var $id = '.'+ $(this).attr('rel');
console.log($id);
	$($id).show();
	$($id).siblings('div').hide();
});

var $tabs = $('.tabs li');

$tabs.on('click',function() {

	var $panelShow = $(this).attr('rel');
	var $panel = $(this).closest('.tab-panels');

	$panel.find('li.active').removeClass('active');
	$(this).addClass('active');
		
	$panel.find('.panel.active').slideUp(300,showNextPanel);

	function showNextPanel() {
		$(this).removeClass('active');
		$panel.find('#'+ $panelShow).slideDown(300,function() {
			$(this).addClass('active');
		});
	}
	
});

$('.form-group input').hover(showHelp, hideHelp);

function showHelp() {

	var $text = $(this).attr('title');
	var $elem = $(this).parent().parent();

	if(!$elem.find('.help').length) {
		$elem.append('<div class="col-sm-4 help"></div>');
		$('.help').text($text).animate({
			opacity: '1',
			},500);
	}
}

function hideHelp() {

	var $elem = $(this).parent().parent();

	$elem.find('.help').remove();
}

$('.btn-secondary').on('click', function(e) {
	e.preventDefault();
	if (!$('.help').length) {
	$('.form-group input').each(showHelp);
	}

});

});
