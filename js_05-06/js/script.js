var hour = document.querySelector('#hour'),
	minute = document.querySelector('#minute'),
	second = document.querySelector('#second'),
	msecond = document.querySelector('#msecond'),
	startButton = document.querySelector('#start'),
	stopButton = document.querySelector('#stop'),
	clearButton = document.querySelector('#reset'),
	splitButton = document.querySelector('#split'),
	results = document.querySelector('.results'),
	background = document.querySelector('.changeBg'),
	timer,
	startTime;

startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
clearButton.addEventListener('click',reset);
background.addEventListener('click',changeBg);

// новая версия

function startTimer() {
	start();
	splitButton.addEventListener('click',split);

}

function stopTimer() {
	pause();
	split('stop');
	splitButton.removeEventListener('click',split);
}
// старая версия

 // function startTimer() {
 // if (startButton.innerHTML==='Start') {
 // 	start();
 // 	startButton.innerHTML = 'Stop';
 // 	startButton.className = 'btn btn-danger';
 // 	splitButton.addEventListener('click',split);
 // 	splitButton.className = 'btn btn-warning';
 // } else {
 // 	pause();
 // 	split('stop');
 // 	startButton.innerHTML = 'Start';
 // 	startButton.className = 'btn btn-success';
 // 	splitButton.className = 'btn btn-default';
 // 	splitButton.removeEventListener('click',split);
 // }



function split(event) {
	var text
	var res = document.createElement('p');
	var target = event.target;
 	(target) ? text= target.id : text = event;
	text = text.concat(text, ': ',hour.innerHTML,' : ',minute.innerHTML,
' : ',second.innerHTML,' . ', msecond.innerHTML);
	res.innerHTML =text;
	results.appendChild(res);

}

function reset() {
	pause();
	hour.innerHTML = '00';
	minute.innerHTML = '00';
	second.innerHTML = '00';
	msecond.innerHTML = '000';
	startButton.className = 'btn btn-success';
	results.innerHTML = '';
	splitButton.removeEventListener('click',split);
}

function start() {
	startButton.style.display = "none";
	stopButton.style.display = "inline-block";
	splitButton.className = 'btn btn-warning';
	startTime = new Date();
	timer = setInterval(tick,1);
}

function pause() {
	splitButton.className = 'btn btn-default';
	stopButton.style.display = "none";
	startButton.style.display = "inline-block";
	clearInterval(timer);
	startButton.innerHTML = 'Start';
}

function tick() {
	var time = new Date();
	var t = time - startTime;
	if ( t > 999 ) {
		startTime = new Date();
		if (clockCircle(second)) {
			if (clockCircle(minute)) {
		 		var hourTime = Number(hour.innerHTML);
		 		if (hourTime<24) {
		 			if (hourTime<10) {
						hour.innerHTML = '0' + hourTime;
					} else {
						hour.innerHTML = hourTime;
					}
				} else {
					hour.innerHTML = '00';
				}
			}
		}
	}
	if ( t < 10 ) {
		msecond.innerHTML ='00' +t;
	} else if ( t < 100 ) {
		msecond.innerHTML ='0' +t;
	} else {
	msecond.innerHTML = t;
	}
}

function clockCircle(element) {
	var elemTick = Number(element.innerHTML);
	elemTick++;
	if (elemTick<60) {
		if (elemTick<10) {
			element.innerHTML = '0' + elemTick;
			} else {
			element.innerHTML = elemTick;
			}
	} else {
	element.innerHTML = '00';
	return true;
	}
}

function changeBg(event) {
var target = event.target;
var wrapper = document.querySelector('.wrapper');
event.stopPropagation();
if (target.id === 'black') {
wrapper.style.background = 'linear-gradient(to top, #000, #232323)';
}
if (target.id === 'blue') {
wrapper.style.background = 'linear-gradient(to top, #0B3162, #184F96)';
}
if (target.id === 'green') {
wrapper.style.background = 'linear-gradient(to top, #0F6C3E, #1AA661)';
}
if (target.id === 'orange') {
wrapper.style.background = 'linear-gradient(to top, #984B00, #E37000)';
}
}
