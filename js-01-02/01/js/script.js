var number;
var power;

number = prompt('Введите число = ', '');
power = prompt('Введите степень = ', '');

function pow (number,power) {
var result=1;
for(var i=0; i<power;i++){
	result*=number;
}
return result
}

console.log('Число '+number+' в степени '+power+' равно =',pow(number,power));