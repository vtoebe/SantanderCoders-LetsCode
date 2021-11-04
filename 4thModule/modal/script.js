const btnOpenModal = document.querySelector('button[name="openModal"]')
btnOpenModal.addEventListener('click', function () {
    modal.open()
})

const modal = (function () {
    const modal = document.querySelector('.modal')
    const form = document.querySelector('form')
    const userEmail = document.querySelector('.userEmail')

    form.onsubmit = function (evt) {
        evt.preventDefault();
        console.log('email recebido: ', userEmail.value)
        close();
    }

    function open() {
        modal.classList.add('open')
    }

    function close() {
        modal.classList.remove('open')
        form.reset();
    }

    return {
        open,
        close
    }
})()