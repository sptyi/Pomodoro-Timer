const workTimer = document.querySelector('#workTimer');
const workInput = document.querySelector('#workInput');
const breakTimer = document.querySelector('#breakTimer');
const breakInput = document.querySelector('#breakInput');
const timer = document.querySelector('#timer');
const workTimerDecrease = document.querySelector('#workTimerDecrease');
const workTimerIncrease = document.querySelector('#workTimerIncrease');
const breakTimerDecrease = document.querySelector('#breakTimerDecrease');
const breakTimerIncrease = document.querySelector('#breakTimerIncrease');
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
var alarmSentence;
var pTimer;

window.addEventListener('load', function () {
	document
		.querySelector('#workTimerForm')
		.addEventListener('submit', function (e) {
			e.preventDefault();
			workTimerActual = workInput.value;
			workTimer.textContent = workTimerActual;
			if (workOrBreak == 'work') {
				timerNew.setTime(workTimerActual * 60);
				minutes = timerNew.getTime() / 60;
				seconds = '00';
				timer.textContent = `${minutes} : ${seconds}`;
			}
			workTimerForm.style.cssText += 'display: none';
			workTimer.style.cssText += 'display: inline-block';
		});
	document
		.querySelector('#breakTimerForm')
		.addEventListener('submit', function (e) {
			e.preventDefault();
			breakTimerActual = breakInput.value;
			breakTimer.textContent = breakTimerActual;
			if (workOrBreak == 'break') {
				timerNew.setTime(breakTimerActual * 60);
				minutes = timerNew.getTime() / 60;
				seconds = '00';
				timer.textContent = `${minutes} : ${seconds}`;
			}
			breakTimerForm.style.cssText += 'display: none';
			breakTimer.style.cssText += 'display: inline-block';
		});
});

workTimer.addEventListener('click', () => {
	if (timerRunning == true) {
		return;
	} else {
		workTimerForm.style.cssText += 'display: inline-block';
		workTimer.style.cssText += 'display: none';
	}
});

breakTimer.addEventListener('click', () => {
	if (timerRunning == true) {
		return;
	} else {
		breakTimerForm.style.cssText += 'display: inline-block';
		breakTimer.style.cssText += 'display: none';
	}
});

function decreaseWorkTimer() {
	if (workTimerActual > 1) {
		workTimerDecrease.style.cssText +=
			'background-color: ghostwhite; color: black; border: none;';
		setTimeout(() => {
			workTimerDecrease.style.cssText +=
				'background-color: black; color: ghostwhite; border: none;';
		}, 100);
		workTimerActual--;
		workTimer.textContent = workTimerActual;
		timerNew.setTime(workTimerActual * 60);
		minutes = timerNew.getTime() / 60;
		seconds = '00';
		timer.textContent = `${minutes} : ${seconds}`;
	}
}

workTimerDecrease.addEventListener('click', () => {
	decreaseWorkTimer();
});

function increaseWorkTimer() {
	if (workTimerActual < 59) {
		workTimerIncrease.style.cssText +=
			'background-color: ghostwhite; color: black; border: none;';
		setTimeout(() => {
			workTimerIncrease.style.cssText +=
				'background-color: black; color: ghostwhite; border: none;';
		}, 100);
		workTimerActual++;
		workTimer.textContent = workTimerActual;
		timerNew.setTime(workTimerActual * 60);
		minutes = timerNew.getTime() / 60;
		seconds = '00';
		timer.textContent = `${minutes} : ${seconds}`;
	}
}

workTimerIncrease.addEventListener('click', () => {
	increaseWorkTimer();
});

function decreaseBreakTimer() {
	if (breakTimerActual > 1) {
		breakTimerDecrease.style.cssText +=
			'background-color: ghostwhite; color: black; border: none;';
		setTimeout(() => {
			breakTimerDecrease.style.cssText +=
				'background-color: black; color: ghostwhite; border: none;';
		}, 100);
		breakTimerActual--;
		breakTimer.textContent = breakTimerActual;
	}
}

breakTimerDecrease.addEventListener('click', () => {
	decreaseBreakTimer();
});

function increaseBreakTimer() {
	if (breakTimerActual < 59) {
		breakTimerIncrease.style.cssText +=
			'background-color: ghostwhite; color: black; border: none;';
		setTimeout(() => {
			breakTimerIncrease.style.cssText +=
				'background-color: black; color: ghostwhite; border: none;';
		}, 100);
		breakTimerActual++;
		breakTimer.textContent = breakTimerActual;
	}
}

breakTimerIncrease.addEventListener('click', () => {
	increaseBreakTimer();
});

startPauseTimer.addEventListener('click', () => {
	if (timerRunning) {
		document.title = 'Pomodoro timer paused';
		startPauseTimer.textContent = '\u23F5';
		timerRunning = false;
		clearInterval(pTimer);
		workTimerDecrease.disabled = true;
		workTimerIncrease.disabled = true;
		breakTimerDecrease.disabled = true;
		breakTimerIncrease.disabled = true;
		subContainer1.style.cssText += 'background-color: #6464ff';
		subContainer2.style.cssText += 'background-color: #6464ff';
		workTimerDecrease.style.cssText +=
			'background-color: #6464ff; color: #6464ff';
		workTimerIncrease.style.cssText +=
			'background-color: #6464ff; color: #6464ff';
		breakTimerDecrease.style.cssText +=
			'background-color: #6464ff; color: #6464ff';
		breakTimerIncrease.style.cssText +=
			'background-color: #6464ff; color: #6464ff';
		timer.style.cssText += 'color: black';
	} else {
		startPauseTimer.textContent = '\u23F8';
		timerRunning = true;
		pTimer = setInterval(runTimer, 1000);
		if (workOrBreak == 'work') {
			subContainer1.style.cssText += 'background-color: green';
			subContainer2.style.cssText += 'background-color: #6464ff';
			workTimerDecrease.style.cssText +=
				'box-shadow: none; background-color: green; color: green';
			workTimerIncrease.style.cssText +=
				'box-shadow: none; background-color: green; color: green';
			breakTimerDecrease.style.cssText +=
				'box-shadow: none; background-color: #6464ff; color: #6464ff';
			breakTimerIncrease.style.cssText +=
				'box-shadow: none; background-color: #6464ff; color: #6464ff';
		} else if (workOrBreak == 'break') {
			subContainer2.style.cssText += 'background-color: green';
			subContainer1.style.cssText += 'background-color: #6464ff';
			workTimerDecrease.style.cssText +=
				'box-shadow: none; background-color: #6464ff; color: #6464ff';
			workTimerIncrease.style.cssText +=
				'box-shadow: none; background-color: #6464ff; color: #6464ff';
			breakTimerDecrease.style.cssText +=
				'box-shadow: none; background-color: green; color: green';
			breakTimerIncrease.style.cssText +=
				'box-shadow: none; background-color: green; color: green';
		}
	}
});

stopTimer.addEventListener('click', () => {
	document.title = 'Pomodoro Timer';
	clearInterval(pTimer);
	timerRunning = false;
	workOrBreak = 'work';
	startPauseTimer.textContent = '\u23F5';
	timerNew.setTime(workTimerActual * 60);
	seconds = '00';
	minutes = workTimerActual;
	timer.textContent = `${minutes} : ${seconds}`;
	workTimerDecrease.disabled = false;
	workTimerIncrease.disabled = false;
	breakTimerDecrease.disabled = false;
	breakTimerIncrease.disabled = false;
	subContainer1.style.cssText += 'background-color: #6464ff';
	subContainer2.style.cssText += 'background-color: #6464ff';
	workTimerDecrease.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	workTimerIncrease.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	breakTimerDecrease.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	breakTimerIncrease.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	timer.style.cssText += 'color: black';
});

resetTimer.addEventListener('click', () => {
	document.title = 'Pomodoro Timer';
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
	workTimerDecrease.disabled = false;
	workTimerIncrease.disabled = false;
	breakTimerDecrease.disabled = false;
	breakTimerIncrease.disabled = false;
	subContainer1.style.cssText += 'background-color: #6464ff';
	subContainer2.style.cssText += 'background-color: #6464ff';
	workTimerDecrease.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	workTimerIncrease.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	breakTimerDecrease.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	breakTimerIncrease.style.cssText +=
		'box-shadow: 2px 2px 10px ghostwhite, -2px -2px 10px ghostwhite, -2px 2px 10px ghostwhite, 2px -2px 10px ghostwhite; background-color: black; color: ghostwhite';
	timer.style.cssText += 'color: black';
});

function runTimer() {
	if (timerRunning) {
		workTimerDecrease.disabled = true;
		workTimerIncrease.disabled = true;
		breakTimerDecrease.disabled = true;
		breakTimerIncrease.disabled = true;
		if (seconds > 0) {
			seconds--;
			if (seconds < 10) {
				timer.textContent = `${minutes} : 0${seconds}`;
				if (workOrBreak == 'work') {
					document.title = `Work: ${minutes} : 0${seconds}`;
				} else if (workOrBreak == 'break') {
					document.title = `Break: ${minutes} : 0${seconds}`;
				}
			} else {
				timer.textContent = `${minutes} : ${seconds}`;
				if (workOrBreak == 'work') {
					document.title = `Work: ${minutes} : ${seconds}`;
				} else if (workOrBreak == 'break') {
					document.title = `Break: ${minutes} : ${seconds}`;
				}
			}
		} else if (seconds == 0 && minutes > 0) {
			minutes--;
			seconds = 59;
			timer.textContent = `${minutes} : ${seconds}`;
		} else if (seconds == 0 && minutes == 0) {
			if (workOrBreak == 'work') {
				minutes = breakTimerActual;
				workOrBreak = 'break';
				alarmSentence = "It's time to take a break and relax";
				if (window.speechSynthesis.getVoices().length == 0) {
					window.speechSynthesis.addEventListener('voiceschanged', function () {
						textToSpeech(alarmSentence);
					});
				} else {
					textToSpeech(alarmSentence);
				}
				subContainer2.style.cssText += 'background-color: green';
				subContainer1.style.cssText += 'background-color: #6464ff';
				workTimerDecrease.style.cssText +=
					'box-shadow: none; background-color: #6464ff; color: #6464ff';
				workTimerIncrease.style.cssText +=
					'box-shadow: none; background-color: #6464ff; color: #6464ff';
				breakTimerDecrease.style.cssText +=
					'box-shadow: none; background-color: green; color: green';
				breakTimerIncrease.style.cssText +=
					'box-shadow: none; background-color: green; color: green';
			} else {
				minutes = workTimerActual;
				workOrBreak = 'work';
				alarmSentence = "It's time to get back to work and focus";
				if (window.speechSynthesis.getVoices().length == 0) {
					window.speechSynthesis.addEventListener('voiceschanged', function () {
						textToSpeech(alarmSentence);
					});
				} else {
					textToSpeech(alarmSentence);
				}
				subContainer1.style.cssText += 'background-color: green';
				subContainer2.style.cssText += 'background-color: #6464ff';
				workTimerDecrease.style.cssText +=
					'box-shadow: none; background-color: green; color: green';
				workTimerIncrease.style.cssText +=
					'box-shadow: none; background-color: green; color: green';
				breakTimerDecrease.style.cssText +=
					'box-shadow: none; background-color: #6464ff; color: #6464ff';
				breakTimerIncrease.style.cssText +=
					'box-shadow: none; background-color: #6464ff; color: #6464ff';
			}
		}
	}
}

function textToSpeech(alarmSentence) {
	var available_voices = window.speechSynthesis.getVoices();

	var english_voice = '';

	for (var i = 0; i < available_voices.length; i++) {
		if (available_voices[i].lang === 'en-US') {
			english_voice = available_voices[i];
			break;
		}
	}
	if (english_voice === '') english_voice = available_voices[0];

	var utter = new SpeechSynthesisUtterance();
	utter.rate = 1;
	utter.pitch = 0.5;
	utter.text = alarmSentence;
	utter.voice = english_voice;
	window.speechSynthesis.speak(utter);
}
