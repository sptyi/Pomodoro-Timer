const workTimer = document.querySelector('#workTimer');
const breakTimer = document.querySelector('#breakTimer');
const timer = document.querySelector('#timer');
const decreaseWorkTimer = document.querySelector('#decreaseWorkTimer');
const increaseWorkTimer = document.querySelector('#increaseWorkTimer');
const decreaseBreakTimer = document.querySelector('#decreaseBreakTimer');
const increaseBreakTimer = document.querySelector('#increaseBreakTimer');
const startPauseTimer = document.querySelector('#startPauseTimer');
const stopTimer = document.querySelector('#stopTimer');
const resetTimer = document.querySelector('#resetTimer');

var timerRunning = false;
var workTimerActual = workTimer.textContent;
var breakTimerActual = breakTimer.textContent;
var timerNew = new Date();
timerNew.setTime(1500);
timerActual = timer.textContent;
var minutes = timerNew.getTime() / 60;
var seconds = timerNew.getTime() % 60;
reset();

decreaseWorkTimer.addEventListener('click', () => {
	if (workTimerActual >= 1 && timerRunning == false) {
		workTimerActual--;
		workTimer.textContent = workTimerActual;
		timerNew.setTime(workTimerActual * 60);
		var minutes = timerNew.getTime() / 60;
		timer.textContent = `${minutes} : 00`;
	}
});

increaseWorkTimer.addEventListener('click', () => {
	if (workTimerActual <= 59 && timerRunning == false) {
		workTimerActual++;
		workTimer.textContent = workTimerActual;
		timerNew.setTime(workTimerActual * 60);
		var minutes = timerNew.getTime() / 60;
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

resetTimer.addEventListener('click', () => {
	reset();
});

function startPause() {
	if (timerRunning) {
		startPauseTimer.textContent = '\u23F5';
		timerRunning = false;
	} else {
		startPauseTimer.textContent = '\u23F8';
		timerRunning = true;
		runTimer();
	}
}

function end() {
	clearInterval();
	timerRunning = false;
	startPauseTimer.textContent = '\u23F5';
	timerNew.setTime(workTimerActual * 60);
	var minutes = timerNew.getTime() / 60;
	var seconds = timerNew.getTime() % 60;
	timer.textContent = `${minutes} : ${seconds}`;
}

function reset() {
	timerRunning = false;
	timerNew.setTime(1500);
	var minutes = timerNew.getTime() / 60;
	var seconds = '00';
	timer.textContent = `${minutes} : ${seconds}`;
	workTimerActual = 25;
	breakTimerActual = 5;
	workTimer.textContent = workTimerActual;
	breakTimer.textContent = breakTimerActual;
}

function runTimer() {
	while (timerRunning) {
		setInterval(() => {
			timer.textContent = `${minutes} : ${seconds - 1}`;
			console.log(timer.textContent);
		}, 1000);
	}
	clearInterval();
}
