// create input element and append to main
const main = document.getElementById('main');
let input = document.createElement('input');
main.appendChild(input);

//create button to register the name
let addButton = document.createElement('button');
addButton.textContent = 'Add Name';

//button to clear local storage
let clearButton = document.createElement('button');
clearButton.textContent = 'Clear Names from Storage';
// append buttons to main
main.appendChild(addButton);
main.appendChild(clearButton);

//create div to contains names
let nameContainer = document.createElement('div');
nameContainer.classList.add('name-container');

// create array for localStorage of names
let arrayOfNames = JSON.parse(localStorage.getItem('Names')) || [];

//clear input and restore focus to input when clicked
// add name underneath when clicked
addButton.addEventListener('click', function () {
  // create element type for name display
  let addedName = document.createElement('h4');
  // Assign input to h4 element and save to localStorage
  let username = input.value;
  saveNamesToStorage(username);
  displaySavedNames(arrayOfNames);
  addedName.textContent = localStorage.getItem('Names');
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
    arrayOfNames.pop(username);
  })
})

clearButton.addEventListener('click', function () {
  localStorage.removeItem('Names');
  arrayOfNames.splice(0, arrayOfNames.length);
})

function saveNamesToStorage(typedName) {
  arrayOfNames.push(typedName);
  localStorage.setItem('Names', JSON.stringify(arrayOfNames));
}

function displaySavedNames(arrayOfNames) {
  arrayOfNames.forEach(function (name) {
    console.log(arrayOfNames[name]);
  })
}