const stopwatch = (() => {
    let _MIN = 0;
    let _SEC = 0;
    let _MILISEC = 0;
    let _TIMER_DISPLAY = document.querySelector('span[name="stopwatch"]')
    let _IS_RUNNING = false;
    let updateStopwatch;

    function formatTimer(min, sec, ms) {
        let minToString = (`0${_MIN}`).substr(-2);
        let secToString = (`0${_SEC}`).substr(-2);
        let msToString = (`0${_MILISEC}`).substr(-2);
        return `${minToString} : ${secToString} : ${msToString}`
    }

    function chronometer() {
        if (_IS_RUNNING == false) {
            _IS_RUNNING = true;
        }

        _MILISEC += 1;
        if (_MILISEC == 10) {
            _SEC += 1;
            _MILISEC = 0;
        }

        if (_SEC == 60) {
            _MIN += 1;
            _SEC = 0;
        }
        _TIMER_DISPLAY.textContent = formatTimer();
    }

    const startTimer = () => {
        if (_IS_RUNNING == false) {
            _IS_RUNNING = true;
            updateStopwatch = setInterval(function () {
                chronometer();
            }, 100)
        }
    }

    const pauseTimer = () => {
        if (_IS_RUNNING == true) {
            _IS_RUNNING = false
            clearInterval(updateStopwatch);
        }
    }

    const stopTimer = () => {
        if (_IS_RUNNING == true) {
            _IS_RUNNING = false
            clearInterval(updateStopwatch);
            return _TIMER_DISPLAY.textContent;
        }
    }

    const resetTimer = () => {
        _MIN = 0;
        _SEC = 0;
        _MILISEC = 0;
        _TIMER_DISPLAY.textContent = '00 : 00 : 00';
    }

    return {
        startTimer,
        pauseTimer,
        stopTimer,
        resetTimer
    }
})();

const _DISABLED = 'disabled';

const form = document.querySelector('form')
const username = document.querySelector('input[name="username"]')
const requireName = document.querySelector('span[name="errorMessage"]')
const startBtn = document.querySelector('button[name="start"]');
const pauseBtn = document.querySelector('button[name="pause"]');
const stopBtn = document.querySelector('button[name="stop"]');
const resetBtn = document.querySelector('button[name="reset"]');
const raceList = document.querySelector('section ul')

const deleteListItem = (user) => user.remove();

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
})

startBtn.addEventListener('click', function () {
    if (username.value.length == 0) {
        requireName.textContent = 'You need to enter a name first'
    }

    if (username.value.length != 0) {
        requireName.textContent = ''
        stopwatch.startTimer();
        startBtn.classList.add('disabled')
        pauseBtn.classList.remove('disabled')
        stopBtn.classList.remove('disabled')
    }
})

pauseBtn.addEventListener('click', function () {
    startBtn.classList.remove('disabled')
    stopwatch.pauseTimer();
})

stopBtn.addEventListener('click', function () {
    startBtn.classList.add('disabled')
    pauseBtn.classList.add('disabled')
    resetBtn.classList.remove('disabled')
    updateRaceList();
    saveUserTime(stopwatch.stopTimer());
})

resetBtn.addEventListener('click', function () {
    username.value = '';
    startBtn.classList.remove('disabled')
    pauseBtn.classList.add('disabled')
    stopBtn.classList.add('disabled')
    resetBtn.classList.add('disabled')
    stopwatch.resetTimer();
})

const updateRaceList = () => {
    const user = document.createElement('li')
    const removeBtn = document.createElement('button')
    user.textContent = username.value;
    raceList.appendChild(user);
    user.appendChild(removeBtn)
    removeBtn.onclick = () => deleteListItem(user)
}

const saveUserTime = (time) => {
    let key = username.value;
    sessionStorage.setItem(key, time);
}