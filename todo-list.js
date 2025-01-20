const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        
        const html = `
        <p>
         ${name} ${dueDate}
         <button onClick = "
            todoList.splice(${i}, 1);
            renderTodoList();
         ">Delete</button>
        </p>`
        todoListHtml += html;
    }

    console.log(todoListHtml);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHtml;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({name, dueDate});

    console.log(todoList);
    inputElement.value = '';

    renderTodoList();
}