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
let chickenList = document.querySelector('.list');

let button = document.querySelector('button');

button.addEventListener('click', function () {
  console.log('Chicken button clicked');

  for (meal in chickenMeals) {
    const list = document.createElement('ul');
    const dinner = document.createElement('li');
    dinner.textContent = chickenMeals[meal];
    list.append(dinner);
    chickenList.append(list);
  }
})