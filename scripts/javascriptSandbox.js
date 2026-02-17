// create input element and append to main
const main = document.getElementById('main');
let input = document.createElement('input');
main.appendChild(input);

//create button to register the name
let addButton = document.createElement('button');
addButton.textContent = 'Add Name';
// append button to main
main.appendChild(addButton);

//create div to contains names
let nameContainer = document.createElement('div');
nameContainer.classList.add('name-container');

//clear input and restore focus to input when clicked
// add name underneath when clicked
addButton.addEventListener('click', function () {
  // create element type for name display
  let addedName = document.createElement('h4');
  // Assign input to h4 element and save to localStorage
  let username = input.value;
  localStorage.setItem('Name', username);
  addedName.textContent = localStorage.getItem('Name');
  //Create delete button
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = '&#10060';
  deleteButton.classList.add('delete-button')
  // append all to main
  nameContainer.appendChild(addedName);
  nameContainer.appendChild(deleteButton);
  main.appendChild(nameContainer);
  // clear input and reset focus
  input.value = '';
  input.focus();

  // Event to delete name and button on selected name
  deleteButton.addEventListener('click', function () {
    nameContainer.removeChild(addedName);
    nameContainer.removeChild(deleteButton);
  })
})