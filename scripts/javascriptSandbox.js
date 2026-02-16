// create input element and append to main
const main = document.getElementById('main');
let input = document.createElement('input');
main.appendChild(input);

//create name
let username = input.value;

//create button to register the name
let addButton = document.createElement('button');
addButton.textContent = 'Add Name';
// append button to main
main.appendChild(addButton);

// add element to show name underneath
let addedName = document.createElement('h4');
addedName.textContent = username;
let nameContainer = document.createElement('div');

//clear input and restore focus to input when clicked
// add name underneath when clicked
addButton.addEventListener('click', function () {
  let nameContainer = document.createElement('div');
  let addedName = document.createElement('h4');
  nameContainer.appendChild(addedName);
  main.appendChild(nameContainer);
  input.value = '';
  input.focus();
})