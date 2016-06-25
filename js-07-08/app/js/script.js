$(function() {
var $ul = $('.nav-tabs li');
$('.menu h3').on('click',function(e) {
e.preventDefault();
	var $id = '.'+ $(this).attr('id');
	$($id).show();
	$($id).siblings('div').hide();
})


$ul.on('click',function() {
	if ( !$(this).hasClass('active') ){ 
		var $id = $(this).find('a').attr('href');
		$(this).addClass('active');
		$(this).siblings("li").removeClass("active");
		$($id).siblings("div").removeClass('in active');	
		$($id).addClass("in active");
	}
});

$('.form-group input').hover(showHelp,
hideHelp)

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

$('.btn-secondary').on('click', function() {
	if (!$('.help').length) {
	$('.form-group input').each(showHelp);
}
});

});
