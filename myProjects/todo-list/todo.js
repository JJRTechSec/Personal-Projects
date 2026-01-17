const task = document.querySelector('#task-input');
const taskButton = document.querySelector('button');
const list = document.querySelector('#list');




taskButton.addEventListener('click', function () {
  if (task.value.trim() != '') {
    const listContainer = document.createElement('div');
    listContainer.classList.add('list-container');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const newTask = document.createElement('li');
    const deleteTask = document.createElement('button');

    newTask.textContent = task.value;
    deleteTask.textContent = '❌';
    
    newTask.append(deleteTask);
    listContainer.append(checkbox, newTask, deleteTask);
    list.append(listContainer);

    task.value = '';
    task.focus();

    deleteTask.addEventListener('click', function () {
      listContainer.replaceChildren();
      listContainer.remove();
      task.focus();
    })
  }
})