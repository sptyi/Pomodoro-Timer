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
const subContainer1 = document.querySelector('#subContainer1');
const subContainer2 = document.querySelector('#subContainer2');

var timerRunning = false;
var workTimerActual = workTimer.textContent;
var breakTimerActual = breakTimer.textContent;
var timerNew = new Date();
timerNew.setTime(1500);
var timerActual = timer.textContent;
var minutes = timerNew.getTime() / 60;
var seconds = timerNew.getTime() % 60;
var workOrBreak = 'work';
var pTimer;

breakTimer.addEventListener('click', () => {
	if (breakTimerInput == false) {
		breakTimerForm.style.cssText += 'display: none';
		breakTimer.style.cssText += 'display: unset';
		breakTimerInput = true;
	} else if (breakTimerInput == true) {
		breakTimerForm.style.cssText += 'display: unset';
		breakTimer.style.cssText += 'display: none';
		breakTimerInput = false;
	}
});

decreaseWorkTimer.addEventListener('click', () => {
	if (workTimerActual > 1) {
		decreaseWorkTimer.style.cssText +=
			'background-color: ghostwhite; color: black; border: none;';
		setTimeout(() => {
			decreaseWorkTimer.style.cssText +=
				'background-color: black; color: ghostwhite; border: none;';
		}, 100);
		workTimerActual--;
		workTimer.textContent = workTimerActual;
		timerNew.setTime(workTimerActual * 60);
		minutes = timerNew.getTime() / 60;
		seconds = '00';
		timer.textContent = `${minutes} : ${seconds}`;
	}
});

increaseWorkTimer.addEventListener('click', () => {
	if (workTimerActual < 59) {
		increaseWorkTimer.style.cssText +=
			'background-color: ghostwhite; color: black; border: none;';
		setTimeout(() => {
			increaseWorkTimer.style.cssText +=
				'background-color: black; color: ghostwhite; border: none;';
		}, 100);
		workTimerActual++;
		workTimer.textContent = workTimerActual;
		timerNew.setTime(workTimerActual * 60);
		minutes = timerNew.getTime() / 60;
		seconds = '00';
		timer.textContent = `${minutes} : ${seconds}`;
	}
});

decreaseBreakTimer.addEventListener('click', () => {
	if (breakTimerActual > 1) {
		decreaseBreakTimer.style.cssText +=
			'background-color: ghostwhite; color: black; border: none;';
		setTimeout(() => {
			decreaseBreakTimer.style.cssText +=
				'background-color: black; color: ghostwhite; border: none;';
		}, 100);
		breakTimerActual--;
		breakTimer.textContent = breakTimerActual;
	}
});

increaseBreakTimer.addEventListener('click', () => {
	if (breakTimerActual < 59) {
		increaseBreakTimer.style.cssText +=
			'background-color: ghostwhite; color: black; border: none;';
		setTimeout(() => {
			increaseBreakTimer.style.cssText +=
				'background-color: black; color: ghostwhite; border: none;';
		}, 100);
		breakTimerActual++;
		breakTimer.textContent = breakTimerActual;
	}
});

startPauseTimer.addEventListener('click', () => {
	if (timerRunning) {
		startPauseTimer.textContent = '\u23F5';
		timerRunning = false;
		clearInterval(pTimer);
		decreaseWorkTimer.disabled = true;
		increaseWorkTimer.disabled = true;
		decreaseBreakTimer.disabled = true;
		increaseBreakTimer.disabled = true;
		subContainer1.style.cssText += 'background-color: #6464ff';
		subContainer2.style.cssText += 'background-color: #6464ff';
		decreaseWorkTimer.style.cssText +=
			'background-color: #6464ff; color: #6464ff';
		increaseWorkTimer.style.cssText +=
			'background-color: #6464ff; color: #6464ff';
		decreaseBreakTimer.style.cssText +=
			'background-color: #6464ff; color: #6464ff';
		increaseBreakTimer.style.cssText +=
			'background-color: #6464ff; color: #6464ff';
		timer.style.cssText += 'color: black';
	} else {
		startPauseTimer.textContent = '\u23F8';
		timerRunning = true;
		pTimer = setInterval(runTimer, 1000);
		if (workOrBreak == 'work') {
			subContainer1.style.cssText += 'background-color: green';
			subContainer2.style.cssText += 'background-color: #6464ff';
			decreaseWorkTimer.style.cssText +=
				'box-shadow: none; background-color: green; color: green';
			increaseWorkTimer.style.cssText +=
				'box-shadow: none; background-color: green; color: green';
			decreaseBreakTimer.style.cssText +=
				'box-shadow: none; background-color: #6464ff; color: #6464ff';
			increaseBreakTimer.style.cssText +=
				'box-shadow: none; background-color: #6464ff; color: #6464ff';
		} else if (workOrBreak == 'break') {
			subContainer2.style.cssText += 'background-color: green';
			subContainer1.style.cssText += 'background-color: #6464ff';
			decreaseWorkTimer.style.cssText +=
				'box-shadow: none; background-color: #6464ff; color: #6464ff';
			increaseWorkTimer.style.cssText +=
				'box-shadow: none; background-color: #6464ff; color: #6464ff';
			decreaseBreakTimer.style.cssText +=
				'box-shadow: none; background-color: green; color: green';
			increaseBreakTimer.style.cssText +=
				'box-shadow: none; background-color: green; color: green';
		}
	}
});

stopTimer.addEventListener('click', () => {
	clearInterval(pTimer);
	timerRunning = false;
	startPauseTimer.textContent = '\u23F5';
	timerNew.setTime(workTimerActual * 60);
	seconds = '00';
	minutes = workTimerActual;
	timer.textContent = `${minutes} : ${seconds}`;
	decreaseWorkTimer.disabled = false;
	increaseWorkTimer.disabled = false;
	decreaseBreakTimer.disabled = false;
	increaseBreakTimer.disabled = false;
	subContainer1.style.cssText += 'background-color: #6464ff';
	subContainer2.style.cssText += 'background-color: #6464ff';
	decreaseWorkTimer.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	increaseWorkTimer.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	decreaseBreakTimer.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	increaseBreakTimer.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	timer.style.cssText += 'color: black';
});

resetTimer.addEventListener('click', () => {
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
	decreaseWorkTimer.disabled = false;
	increaseWorkTimer.disabled = false;
	decreaseBreakTimer.disabled = false;
	increaseBreakTimer.disabled = false;
	subContainer1.style.cssText += 'background-color: #6464ff';
	subContainer2.style.cssText += 'background-color: #6464ff';
	decreaseWorkTimer.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	increaseWorkTimer.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	decreaseBreakTimer.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	increaseBreakTimer.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	timer.style.cssText += 'color: black';
});

function runTimer() {
	if (minutes < 1 && seconds < 31) {
		timer.textContent.cssText += 'color: red';
	} else {
		timer.textContent.cssText += 'color: black';
	}
	if (timerRunning) {
		decreaseWorkTimer.disabled = true;
		increaseWorkTimer.disabled = true;
		decreaseBreakTimer.disabled = true;
		increaseBreakTimer.disabled = true;
		if (seconds > 0) {
			seconds--;
			if (seconds < 10) {
				timer.textContent = `${minutes} : 0${seconds}`;
			} else {
				timer.textContent = `${minutes} : ${seconds}`;
			}
		} else if (seconds == 0 && minutes > 0) {
			minutes--;
			seconds = 59;
			timer.textContent = `${minutes} : ${seconds}`;
		} else if (seconds == 0 && minutes == 0) {
			if (workOrBreak == 'work') {
				minutes = breakTimerActual;
				workOrBreak = 'break';
				subContainer2.style.cssText += 'background-color: green';
				subContainer1.style.cssText += 'background-color: #6464ff';
				decreaseWorkTimer.style.cssText +=
					'box-shadow: none; background-color: #6464ff; color: #6464ff';
				increaseWorkTimer.style.cssText +=
					'box-shadow: none; background-color: #6464ff; color: #6464ff';
				decreaseBreakTimer.style.cssText +=
					'box-shadow: none; background-color: green; color: green';
				increaseBreakTimer.style.cssText +=
					'box-shadow: none; background-color: green; color: green';
			} else {
				minutes = workTimerActual;
				workOrBreak = 'work';
				subContainer1.style.cssText += 'background-color: green';
				subContainer2.style.cssText += 'background-color: #6464ff';
				decreaseWorkTimer.style.cssText +=
					'box-shadow: none; background-color: green; color: green';
				increaseWorkTimer.style.cssText +=
					'box-shadow: none; background-color: green; color: green';
				decreaseBreakTimer.style.cssText +=
					'box-shadow: none; background-color: #6464ff; color: #6464ff';
				increaseBreakTimer.style.cssText +=
					'box-shadow: none; background-color: #6464ff; color: #6464ff';
			}
		}
	}
}
