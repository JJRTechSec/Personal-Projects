const task = document.getElementById('task-input').value;
const taskButton = document.querySelector('button');

const listContainer = document.createElement('div');
const checkbox = document.createElement('input', type = 'checkbox');
const newTask = document.createElement('p');
const deleteTask = document.createElement('button');

taskButton.addEventListener('click', function () {
  if (task.length() > 0) {
    const listContainer = document.createElement('div');
    const checkbox = document.createElement('input', type = 'checkbox');
    const newTask = document.createElement('p');
    const deleteTask = document.createElement('button');

    newTask.textContent = task;

    task.value = '';
    task.focus();
  }
})