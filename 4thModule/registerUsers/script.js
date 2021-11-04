const form = document.querySelector('form');
const input = document.querySelector('#userInput');
const userList = document.querySelector('#userList ul')

function newListItem() {
    const listedUser = document.createElement('li')
    userList.appendChild(listedUser)
    listedUser.innerText = input.value;
    createRemoveBtn(listedUser)
}

function createRemoveBtn(user) {
    const removeBtn = document.createElement('button')
    removeBtn.classList.add('rmvBtn')
    removeBtn.innerText = 'remove user'
    removeBtn.onclick = () => deleteListItem(user)
    user.appendChild(removeBtn)
}

function deleteListItem(user) {
    user.remove();
}

function clearForm() {
    form.reset();
}

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    newListItem();
    clearForm();
})