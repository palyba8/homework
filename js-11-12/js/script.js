$(function() {
$('.carousel').carousel();
	var html = $('#profile').html();
	var data = {
		name : "Палуба Сергій Петрович",
		pictureURL: "img/profile.jpg", 
		workplace: "Банковский работник",
		learning: "<li>мне это интересно</li> \
		<li>за это неплохо платят</li>\
		<li>не хочется всю жизнь просидеть в офисе</li>",
		phoneNumber: "+380666352873",
		vkProfile: "http://vk.com/s.paluba",
		feedback: "Готов к конструктивной критике"
	};
	var content = tmpl(html, data);
	$('body').append(content);
	$('body').append('<h1 class ="center">LoDash<h1><hr>');
	var lodash = _.template(html);
	$('body').append(lodash(data));



	
});	