document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-todo-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const todoItemTemplate = document.getElementById('todo-item-template').firstElementChild;

    addButton.addEventListener('click', function() {
        if (todoInput.value.trim() === '') return;

        const newTodoItem = todoItemTemplate.cloneNode(true);
        newTodoItem.querySelector('.todo-text').textContent = todoInput.value;
        newTodoItem.querySelector('.delete-button').addEventListener('click', function() {
            todoList.removeChild(newTodoItem);
        });
        todoList.appendChild(newTodoItem);
        todoInput.value = '';
        });
    });