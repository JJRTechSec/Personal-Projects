let chickenMeals = ['Teriyaki', 'Pesto Chicken', 'Caesar Salad', 'Pasta Bake', 'Sweet and Sour', 'Enchiladas', 'Chicken Alfredo', 'Burritos', 'Fajitas'];
let minceMeals = ['Meatballs', 'Tacos', 'Lasagne', 'Baguettes', 'Bolognese', 'Sloppy Joes', 'form', 'burgers'];
let plantBased = ['Chickpea Curry', 'Falafel Salad'];
let other = ['Form', 'Kjott Pølser', 'Pølser', 'Chorizo Gnocchi', 'Kebab'];
let highCarb = ['Teriyaki', 'Pesto Chicken', 'Pasta Bake', 'Sweet and Sour', 'Burritos', 'Meatballs', 'Bolognese', 'Form'];

let oddDays = ['Monday', 'Wednesday'];
let evenDays = ['Tuesday', 'Thursday', 'Saturday'];
let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const list = document.createElement('ul');
const dinner = document.createElement('li');

// CHICKEN
let chickenList = document.querySelector('.chicken');

let chickenButton = document.getElementById('chickenButton');

chickenButton.addEventListener('click', function () {
  console.log('Chicken button clicked');

  for (meal in chickenMeals) {
    const list = document.createElement('ul');
    const dinner = document.createElement('li');
    dinner.textContent = chickenMeals[meal];
    list.append(dinner);
    chickenList.append(list);
  }

  chickenButton.addEventListener('click', function () {
    console.log('Closed chicken list');
    chickenList.removeChild(list);
  })
});


// MINCE
let minceList = document.querySelector('.mince');
let minceButton = document.getElementById('minceButton');

minceButton.addEventListener('click', function () {
  console.log('Mince button clicked');

  for (meal in minceMeals) {
    const list = document.createElement('ul');
    const dinner = document.createElement('li');
    dinner.textContent = minceMeals[meal];
    list.append(dinner);
    minceList.append(list);
  }
});


// PLANT-BASED
let plantList = document.querySelector('.plant');
let plantButton = document.getElementById('plantButton');

plantButton.addEventListener('click', function () {
  console.log('Plant button clicked');

  for (meal in plantBased) {
    const list = document.createElement('ul');
    const dinner = document.createElement('li');
    dinner.textContent = plantBased[meal];
    list.append(dinner);
    plantList.append(list);
  }
});


// OTHER
let otherList = document.querySelector('.other');
let otherButton = document.getElementById('otherButton');

otherButton.addEventListener('click', function () {
  console.log('Other button clicked');

  for (meal in other) {
    const list = document.createElement('ul');
    const dinner = document.createElement('li');
    dinner.textContent = other[meal];
    list.append(dinner);
    otherList.append(list);
  }
});


// CARB
let carbList = document.querySelector('.highCarb');
let carbButton = document.getElementById('carbButton');

carbButton.addEventListener('click', function () {
  console.log('Carb button clicked');

  for (meal in highCarb) {
    const list = document.createElement('ul');
    const dinner = document.createElement('li');
    dinner.textContent = highCarb[meal];
    list.append(dinner);
    carbList.append(list);
  }
});