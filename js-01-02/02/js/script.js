var names=[];

for (var i=0; i<5 ; i++) names[i] = prompt('Введите им\'я','');
var user = prompt('Введите им\'я пользователя','');

for (var i=0; i<5 ; i++) {
	if ( names[i]==user ) {
		alert(user+', вы успешно вошли');
		break;
	}
	else if ( i==4 ) alert('Ошибка: такого имени нет в списке!');
}
