'use strict;'
//Constructor for test question
function Test(question, version1,version2,version3,ansver) {
	this.question = question;
	this.version1 = version1;
	this.version2 = version2;
	this.version3 = version3;
	this.ansver = ansver;
	}

var test = []; //array of questions to write to localStorage
var quest = []; // array of questions from localSrotage
var amountQuestions = 4; // amount of questions

// writing test questions into localStorage
for (var i = 1; i <= amountQuestions; i++) {
test[i] = new Test ("Вопрос №" + i, "Вариант ответа №1","Вариант ответа №2","Вариант ответа №3", (i<3)? i : 3);
localStorage.setItem("test" + i, JSON.stringify(test[i]));
}

// reading test questions from localStorage
for (var i = 1; i <= amountQuestions; i++) {
	quest[i] = JSON.parse(localStorage.getItem("test" + i));
}

$(function() { // document.ready

 // template cache
var testForm = $('#testForm').html();
var test = tmpl(testForm,quest);
var position = $('.form-holder');

// appending template
position.append(test);

// modal cache
var $modal = $('.modal');

//button click event
$('button').on('click',function(event){
	event.preventDefault();

// result cache
	var result = [];
	var customerAnsver;
	var grade = 0;

	//test results
	$('.modal-content').append('<div class="grade-holder"></div>');

	for (var i = 1; i <= amountQuestions; i++) {

		// find ansver
		customerAnsver = $('#test'+i).find('input:checked').val();

		// totalize grade
		result[i] = (quest[i].ansver == customerAnsver) ? 1 : 0;
		grade +=result[i];

		// append results to modal block
		if (quest[i].ansver == customerAnsver) {
			$('.grade-holder').append('<div class="right">Ответ на Вопрос №' + i + ' правильный</div>');
		} else {
			$('.grade-holder').append('<div class="wrong">Ответ на Вопрос №' + i + ' не верный</div>');
		}

	}

	//append close button of modal block
	$('.grade-holder').before('<span class="close">x</span>');

	// append the grade as a percentage
	grade = (grade/(i-1))*100;
	$('.grade-holder').before('<div class="grade"> Ваша оценка = ' + grade.toFixed(2) + '/100% </div>');
	(grade<50) ? $('.grade').css('color', 'red') : $('.grade').css('color', 'green');

	// display modal block
	$modal.css('display', 'block');

		// close button in modal block
		$('.close').click(function(){
			$modal.css('display', 'none');
			//clear results
			$('.modal-content').empty();
			// clear radiobuttons
			$('input:radio').removeAttr('checked');
		});
});
	// close modal if click outside modal block
	$(window).click(function(event){
		if ($(event.target).is($modal))	{
				$modal.css('display', 'none');
				//clear results
				$('.modal-content').empty();
				// clear radiobuttons
				$('input:radio').removeAttr('checked');
		}
	});
});
