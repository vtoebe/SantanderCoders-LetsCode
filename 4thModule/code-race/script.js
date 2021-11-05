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
        }
        clearInterval(updateStopwatch);
        return _TIMER_DISPLAY.textContent;
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
const winnerBtn = document.querySelector('button[name="winner"]');
const userList = document.querySelector('section ul')
const winnerWindow = document.querySelector('div[name="winnerWindow"]')
const winnerName = document.querySelector('h1[name="winnerUser"]')
const winnerTime = document.querySelector('p[name="winnerUserTime"] ')


form.addEventListener('submit', function (evt) {
    evt.preventDefault();
})

startBtn.addEventListener('click', function () {
    userList.classList.remove('hideFromScreen')
    winnerWindow.classList.add('hideFromScreen')
    if (username.value.length == 0) {
        requireName.textContent = 'You need to enter a name first'
    }

    if (username.value.length != 0) {
        requireName.textContent = ''
        stopwatch.startTimer();
        startBtn.classList.add('disabled')
        pauseBtn.classList.remove('disabled')
        stopBtn.classList.remove('disabled')
        winnerBtn.classList.add('disabled')
    }
})

pauseBtn.addEventListener('click', function () {
    startBtn.classList.remove('disabled')
    stopwatch.pauseTimer();
})

stopBtn.addEventListener('click', function () {
    startBtn.classList.add('disabled')
    pauseBtn.classList.add('disabled')
    stopBtn.classList.add('disabled')
    resetBtn.classList.remove('disabled')
    saveUserTime(stopwatch.stopTimer());
})

resetBtn.addEventListener('click', function () {
    startBtn.classList.remove('disabled')
    winnerBtn.classList.remove('disabled')
    pauseBtn.classList.add('disabled')
    stopBtn.classList.add('disabled')
    resetBtn.classList.add('disabled')
    updateUserList();
    stopwatch.resetTimer();
    username.value = '';
})

winnerBtn.addEventListener('click', function () {
    saveFastest();
    showWinner();
})

const updateUserList = () => {
    const user = document.createElement('li')
    user.classList.add('appearOnScreen')
    user.classList.add('listedUser')
    user.textContent = `${username.value} | ${sessionStorage.getItem(username.value)}`;
    userList.appendChild(user);
}

const saveUserTime = (time) => {
    let key = username.value;
    sessionStorage.setItem(key, time);
}

const getFastest = () => {
    let userList = Object.keys(sessionStorage);
    let fastestUser = sessionStorage.key(0);
    let time = sessionStorage.getItem(fastestUser);

    for (const key of userList) {
        if (Date.parse(sessionStorage.getItem(key)) < Date.parse(sessionStorage.getItem(fastestUser))) {
            fastestUser = key;
            time = sessionStorage.getItem(key)
        }
    }
    return [fastestUser, time];
}

const clearLocalStorage = () => localStorage.clear();

const saveFastest = () => {
    clearLocalStorage();
    let [user, time] = getFastest();
    localStorage.setItem(user, time)
}

const showWinner = () => {
    userList.classList.add('hideFromScreen')
    winnerWindow.classList.remove('hideFromScreen')
    winnerName.textContent = localStorage.key(0);
    winnerTime.textContent = localStorage.getItem(localStorage.key(0));
}