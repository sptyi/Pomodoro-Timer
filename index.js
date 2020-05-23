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
var workOrBreak = 'work';
var pTimer;
reset();

decreaseWorkTimer.addEventListener('click', () => {
	if (workTimerActual > 1 && timerRunning == false) {
		workTimerActual--;
		workTimer.textContent = workTimerActual;
		timerNew.setTime(workTimerActual * 60);
		minutes = timerNew.getTime() / 60;
		timer.textContent = `${minutes} : ${seconds}`;
	}
});

increaseWorkTimer.addEventListener('click', () => {
	if (workTimerActual < 59 && timerRunning == false) {
		workTimerActual++;
		workTimer.textContent = workTimerActual;
		timerNew.setTime(workTimerActual * 60);
		minutes = timerNew.getTime() / 60;
		timer.textContent = `${minutes} : ${seconds}`;
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
		clearInterval(pTimer);
	} else {
		startPauseTimer.textContent = '\u23F8';
		timerRunning = true;
		pTimer = setInterval(runTimer, 1000);
	}
}

function end() {
	clearInterval(pTimer);
	timerRunning = false;
	startPauseTimer.textContent = '\u23F5';
	timerNew.setTime(workTimerActual * 60);
	seconds = '00';
	minutes = workTimerActual;
	timer.textContent = `${minutes} : ${seconds}`;
}

function reset() {
	clearInterval(pTimer);
	timerRunning = false;
	workOrBreak = 'work';
	startPauseTimer.textContent = '\u23F5';
	timerNew.setTime(1500);
	minutes = timerNew.getTime() / 60;
	seconds = '00';
	timer.textContent = `${minutes} : ${seconds}`;
	workTimerActual = 25;
	breakTimerActual = 5;
	workTimer.textContent = workTimerActual;
	breakTimer.textContent = breakTimerActual;
}

function runTimer() {
	if (timerRunning) {
		if (seconds > 0) {
			seconds--;
			timer.textContent = `${minutes} : ${seconds}`;
		} else if (seconds == 0 && minutes > 0) {
			minutes--;
			seconds = 59;
			timer.textContent = `${minutes} : ${seconds}`;
		} else if (seconds == 0 && minutes == 0) {
			if (workOrBreak == 'work') {
				minutes = breakTimerActual;
				workOrBreak = 'break';
			} else {
				minutes = workTimerActual;
				workOrBreak = 'work';
			}
		}
	}
}
