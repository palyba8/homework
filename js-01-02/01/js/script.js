var number;
var power;

number = prompt('Введите число = ', '');
power = prompt('Введите степень = ', '');

function pow (number,power) {
return Math.pow(number,power);
}

console.log('Число '+number+' в степени '+power+' равно =',pow(number,power));