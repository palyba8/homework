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