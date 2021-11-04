const _FORM = document.querySelector('form');
_FORM.addEventListener('submit', evt => {
    evt.preventDefault();
    runPromises();
})

const generateRandomNumber = maxLength => Math.round(Math.random() * maxLength);

const generateRandomArray = () => Array.from(new Array(generateRandomNumber(10)), () => generateRandomNumber(200))

async function generateNewPromise() {
    let waitTime = generateRandomNumber(10000);
    return await new Promise(resolve => setTimeout(resolve, waitTime, generateRandomArray()))
}

const runPromises = () => {
    const promise1 = generateNewPromise();
    const promise2 = generateNewPromise();
    const promise3 = generateNewPromise();

    Promise.allSettled([promise1, promise2, promise3])
        .then(
            (promiseResult => {
                console.log(promiseResult) //just to check the promises' results
                showArray(concatPromisesArrays(promiseResult));
            })
        )
}

const concatPromisesArrays = promiseResult => {
    let promiseArrays = [];
    for (const eachObj of Object.values(promiseResult)) {
        promiseArrays = [...promiseArrays, eachObj.value]
    }
    return Array.prototype.concat.apply([], promiseArrays)
}

const showArray = finalArray => {
    const _onScreenArray = document.querySelector('ul');
    const _LI = document.createElement('li');
    _onScreenArray.appendChild(_LI)
    _LI.innerText = `${finalArray}`
}