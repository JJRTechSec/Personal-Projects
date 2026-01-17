const task = document.querySelector('#task-input');
const taskButton = document.querySelector('button');
const list = document.querySelector('#list');

const listContainer = document.createElement('div');
const checkbox = document.createElement('input', type = 'checkbox');
const newTask = document.createElement('li');
const deleteTask = document.createElement('button');

taskButton.addEventListener('click', function () {
  if (task.value.trim() != '') {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const newTask = document.createElement('p');
    const deleteTask = document.createElement('button');

    newTask.textContent = task.value;
    deleteTask.textContent = '❌';
    newTask.append(deleteTask);
    checkbox.append(newTask);
    list.append(checkbox);

    task.value = '';
    task.focus();
  }
})