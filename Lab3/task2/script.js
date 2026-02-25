const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addTodoItem(text);
    input.value = '';
});


const addTodoItem = text => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <div class="todo-left">
            <input type="checkbox" class="todo-checkbox">
            <span class="todo-text">${text}</span>
        </div>
        <button class="delete-btn">Delete</button>
    `;
    if(confirm('This task is urgent?')){
        todoList.addChild(li);
    }
    todoList.appendChild(li);
};


todoList.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('li').remove();
    } else if (e.target.classList.contains('todo-checkbox')) {
        e.target.nextElementSibling.classList.toggle('done');
    }
});


