//create class Question
class Question {
	constructor (title = Question.getDefaultTitle(), tests = Question.getDefaultTests(), ansver = Question.getDefaultAnsver()) {
		this.title = title;
		this.tests = tests;
		this.ansver = ansver;
		this.number = Question.count;
		Question.count += 1;
	}

	static getDefaultTitle() {
		return "Вопрос №" + Question.count;
	}

	static getDefaultTests() {
		return ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"];
	}

	static getDefaultAnsver() {
		return (Question.count <= 3) ? Question.count : 3;
	}
}

Question.count = 1;
// end of class Question

let amountQuestions = 4; // amount of questions

// writing test questions into localStorage
for (let i = 1; i <= amountQuestions; i++) {
	let test = new Question();
	localStorage.setItem("test" + i, JSON.stringify(test));
}

let quest = [];
// reading test questions from localStorage
for (let i = 1; i <= amountQuestions; i++) {
	quest[i] = JSON.parse(localStorage.getItem("test" + i));
}

$(()=>{ //document.ready

	let form = $('.form-holder');

// create questions
quest.forEach(element => {
	let div = document.createElement('div');
	div.className = "checkbox";
	div.id = 'quest' + element.number;

	let questElement = document.createElement('label');
	let label = document.createElement('label');
	let questText = document.createTextNode(element.title);

	questElement.appendChild(questText);
	div.appendChild(questElement);

	let count = 1;

// create tests values
element.tests.forEach(value =>{
	let label = document.createElement('label');
	let labelText = document.createTextNode(value);
	let input = document.createElement('input');

	input.type = "radio";
	input.value = count;
	input.name= element.title;
	count++;
	label.appendChild(input);
	label.appendChild(labelText);
	div.appendChild(label);
});
form.append(div);
	}); // end of questions

let $modal = $('.modal');

//button click event
$('button').on('click',event =>	{

	event.preventDefault();

// result cache
let result = [];
let customerAnsver;
let grade = 0;

	//test results
	$('.modal-content').append('<div class="grade-holder"></div>');

	for (let i = 1; i <= amountQuestions; i++) {

		// find ansver
		customerAnsver = $('#quest'+i).find('input:checked').val();

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
	grade = (grade/(amountQuestions))*100;
	$('.grade-holder').before('<div class="grade"> Ваша оценка = ' + grade.toFixed(2) + '/100% </div>');
	(grade<50) ? $('.grade').css('color', 'red') : $('.grade').css('color', 'green');

	// display modal block
	$modal.css('display', 'block');

		// close button in modal block
		$('.close').click(() => {
			$modal.css('display', 'none');
			//clear results
			$('.modal-content').empty();
			// clear radiobuttons
			$('input:radio').removeAttr('checked');
		});
	});
	// close modal if click outside modal block
	$(window).click(event => {
		if ($(event.target).is($modal))	{
			$modal.css('display', 'none');
				//clear results
				$('.modal-content').empty();
				// clear radiobuttons
				$('input:radio').removeAttr('checked');
			}
		});
});
