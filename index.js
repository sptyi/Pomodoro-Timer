const workTimer = document.querySelector('#workTimer');
const breakTimer = document.querySelector('#breakTimer');
const timer = document.querySelector('#timer');
const decreaseWorkTimer = document.querySelector('#decreaseWorkTimer');
const increaseWorkTimer = document.querySelector('#increaseWorkTimer');
const decreaseBreakTimer = document.querySelector('#decreaseBreakTimer');
const increaseBreakTimer = document.querySelector('#increaseBreakTimer');
const startPauseTimer = document.querySelector('#startPauseTimer');
const stopTimer = document.querySelector('#stopTimer');
const restartTimer = document.querySelector('#restartTimer');

var timerRunning = false;
var workTimerActual = workTimer.textContent;
var breakTimerActual = breakTimer.textContent;
var timerActual = new Date();
timerActual.setTime(1500);
var minutes = timerActual.getTime() / 60;
var seconds = timerActual.getTime() % 60;
restart();

decreaseWorkTimer.addEventListener('click', () => {
	if (workTimerActual >= 1 && timerRunning == false) {
		workTimerActual--;
		workTimer.textContent = workTimerActual;
		timerActual.setTime(workTimerActual * 60);
		var minutes = timerActual.getTime() / 60;
		timer.textContent = `${minutes} : 00`;
	}
});

increaseWorkTimer.addEventListener('click', () => {
	if (workTimerActual <= 59 && timerRunning == false) {
		workTimerActual++;
		workTimer.textContent = workTimerActual;
		timerActual.setTime(workTimerActual * 60);
		var minutes = timerActual.getTime() / 60;
		timer.textContent = `${minutes} : 00`;
	}
});

decreaseBreakTimer.addEventListener('click', () => {
	if (breakTimerActual >= 1 && timerRunning == false) {
		breakTimerActual--;
		breakTimer.textContent = breakTimerActual;
	}
});

increaseBreakTimer.addEventListener('click', () => {
	if (breakTimerActual <= 59 && timerRunning == false) {
		breakTimerActual++;
		breakTimer.textContent = breakTimerActual;
	}
});

startPauseTimer.addEventListener('click', () => {
	startPause();
});

stopTimer.addEventListener('click', () => {
	end();
});

restartTimer.addEventListener('click', () => {
	restart();
});

function startPause() {
	if (timerRunning) {
		startPauseTimer.textContent = '\u23F5';
		timerRunning = false;
	} else {
		startPauseTimer.textContent = '\u23F8';
		timerRunning = true;
		while (timer.textContent >= 1) {
			setInterval(() => {
				timer.textContent = `${minutes} : ${seconds - 1}`;
			}, 1000);
		}
	}
}

function end() {
	timerRunning = false;
	startPauseTimer.textContent = '\u23F5';
	timerActual.setTime(workTimerActual * 60);
	var minutes = timerActual.getTime() / 60;
	var seconds = timerActual.getTime() % 60;
	timer.textContent = `${minutes} : ${seconds}`;
}

function restart() {
	timerRunning = false;
	timerActual.setTime(1500);
	var minutes = timerActual.getTime() / 60;
	var seconds = '00';
	timer.textContent = `${minutes} : ${seconds}`;
	workTimerActual = 25;
	breakTimerActual = 5;
	workTimer.textContent = workTimerActual;
}
