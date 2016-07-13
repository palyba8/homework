document.body.className = 'container';

//create header
var header = document.createElement('h1');
header.style.textAlign = 'center';
header.innerHTML = 'Тест по программированию';
document.body.appendChild(header);

//create form element
var row = document.createElement('div');
row.className = 'row';
document.body.appendChild(row);
var form = document.createElement('form');
row.appendChild(form);

//create new Question objects
var q;
for (var i=1; i<8; i++) {
	q = new Question(i+'. Вопрос №'+i+'?');
	q.label();
	q.ansver('Вариант ответа №1');
	q.ansver('Вариант ответа №2');
	q.ansver('Вариант ответа №3');
};


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
