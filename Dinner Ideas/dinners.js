let chickenMeals = ['Teriyaki', 'Pesto Chicken', 'Caesar Salad', 'Pasta Bake', 'Sweet and Sour', 'Enchiladas', 'Chicken Alfredo', 'Burritos', 'Fajitas'];
let minceMeals = ['Meatballs', 'Tacos', 'Lasagne', 'Baguettes', 'Bolognese', 'Sloppy Joes', 'form', 'burgers'];
let plantBased = ['Chickpea Curry', 'Falafel Salad'];
let other = ['Form', 'Kjott Pølser', 'Pølser', 'Chorizo Gnocchi', 'Kebab'];
let highCarb = ['Teriyaki', 'Pesto Chicken', 'Pasta Bake', 'Sweet and Sour', 'Burritos', 'Meatballs', 'Bolognese', 'Form'];

let oddDays = ['Monday', 'Wednesday'];
let evenDays = ['Tuesday', 'Thursday', 'Saturday'];
let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let chickenButton = document.querySelector('chickenButton');

let mealList = document.querySelector('.list');
let list = createElement('ul');
let chickenMeal = createElement('li');

chickenButton.addEventListener('click', function () {
  console.log('Chicken button clicked');
  const list = createElement('ul');
  const chickenMeal = createElement('li');

  for (meal in chickenMeals) {
    chickenMeal.textContent = meal;
    list.append(chickenMeal);
    mealList.append(list);
  };
});