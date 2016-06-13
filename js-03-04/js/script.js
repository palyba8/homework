document.body.className = 'container';

//create header
var header = document.createElement('h1');
header.style.textAlign = 'center';
header.innerHTML = 'Тест по программированию';
document.body.appendChild(header);

//create form element
var form = document.createElement('form');
document.body.appendChild(form);

//create new Question objects
var q1 = new Question('1. Вопрос №1?');
q1.label();
q1.ansver('Вариант ответа №1');
q1.ansver('Вариант ответа №2');
q1.ansver('Вариант ответа №3');

var q2 = new Question('2. Вопрос №2?');
q2.label();
q2.ansver('Вариант ответа №1');
q2.ansver('Вариант ответа №2');
q2.ansver('Вариант ответа №3');

var q3 = new Question('3. Вопрос №3?');
q3.label();
q3.ansver('Вариант ответа №1');
q3.ansver('Вариант ответа №2');
q3.ansver('Вариант ответа №3');

//button
var button = document.createElement('button');
button.type = 'submit';
button.className = 'btn btn-primary center-block';
button.innerHTML = 'Проверить мои результаты';

var position = document.querySelector('form');
position.appendChild(button);

// Question object
function Question(name) {

	this.label = function() { 
 		var elem = document.createElement('label');
 		var position = document.querySelector('form');
 		elem.innerHTML = name;
 		position.appendChild(elem);
 	}

	 this.ansver = function(text) {
 		var label = document.createElement('label');
 		var div = document.createElement('div');
 		div.className = 'checkbox';
 		var position = document.querySelector('form');
 		label.innerHTML ='<input type="checkbox">' + text;
		
		position.appendChild(div).appendChild(label);
 	}

 } 
