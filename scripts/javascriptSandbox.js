// create input element and append to main
const main = document.getElementById('main');
let input = document.createElement('input');
main.appendChild(input);

//create button to register the name
let addButton = document.createElement('button');
addButton.textContent = 'Add Name';
// append button to main
main.appendChild(addButton);

//clear input and restore focus to input when clicked
// add name underneath when clicked
addButton.addEventListener('click', function () {
  //Create container and element type for name display
  let nameContainer = document.createElement('div');
  let addedName = document.createElement('h4');
  // Assign input to h4 element
  let username = input.value;
  addedName.textContent = username;
  // append all to main
  nameContainer.appendChild(addedName);
  main.appendChild(nameContainer);
  // clear input and reset focus
  input.value = '';
  input.focus();
})