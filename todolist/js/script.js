const todoText = document.getElementById('todotext');
const todoUl = document.getElementById('todo-ul');

function addList() {
    if (todoText.value.trim() === '') {
        alert("Enter some text!");
    } else {
        const liTag = document.createElement('li');
        const spanText = document.createElement('span');
        spanText.textContent = todoText.value.trim();
        const spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.innerHTML = '&times;';
        spanClose.onclick = function () {
            removeTask(spanClose);
        };

        liTag.appendChild(spanText);
        liTag.appendChild(spanClose);
        todoUl.appendChild(liTag);
        todoText.value = '';
    }
}

function removeTask(closeButton) {
    const liToRemove = closeButton.parentElement;
    todoUl.removeChild(liToRemove);
}
