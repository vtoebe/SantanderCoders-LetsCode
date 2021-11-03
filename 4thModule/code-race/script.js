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

    const stopTimer = () => {
        if (_IS_RUNNING == true) {
            _IS_RUNNING = false
            clearInterval(updateStopwatch)
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
        stopTimer,
        resetTimer
    }
})();

const startBtn = document.querySelector('button[name="start"]');
const stopBtn = document.querySelector('button[name="stop"]');
const resetBtn = document.querySelector('button[name="reset"]');

startBtn.addEventListener('click', function () {
    stopwatch.startTimer();
})

stopBtn.addEventListener('click', function () {
    stopwatch.stopTimer();
})

resetBtn.addEventListener('click', function () {
    stopwatch.resetTimer();
})