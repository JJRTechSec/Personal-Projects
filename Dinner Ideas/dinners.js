

let chickenMeals = ['Teriyaki', 'Pesto Chicken', 'Caesar Salad', 'Pasta Bake', 'Sweet and Sour', 'Enchiladas', 'Chicken Alfredo', 'Burritos', 'Fajitas'];
let minceMeals = ['Meatballs', 'Tacos', 'Lasagne', 'Baguettes', 'Bolognese', 'Sloppy Joes', 'Form', 'Burgers'];
let plantBased = ['Chickpea Curry', 'Falafel Salad'];
let other = ['Form', 'Kjott Pølser', 'Pølser', 'Chorizo Gnocchi', 'Kebab'];
let highCarb = ['Teriyaki', 'Pesto Chicken', 'Pasta Bake', 'Sweet and Sour', 'Burritos', 'Meatballs', 'Bolognese', 'Form'];

let usedMeals = [];

let oddDays = ['Monday', 'Wednesday'];
let evenDays = ['Tuesday', 'Thursday', 'Saturday'];
let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let list;
let dinner;

// Function for meal toggling
function setMealToggle(buttonId, containerClass, meals) {
  const button = document.getElementById(buttonId);
  const container = document.querySelector(`.${containerClass} .items`);

  button.addEventListener('click', () => {
    const isActive = container.childElementCount > 0;

    if (isActive) {
      container.innerHTML = '';
      return;
    }

    const ul = document.createElement('ul');

    for (const meal of meals) {
      const li = document.createElement('li');
      li.textContent = meal;
      ul.appendChild(li);
    }

    container.appendChild(ul);

    if (!button || !container) {
      console.error('Missing button or container:', buttonId, containerClass);
      return;
    }
  });
}


setMealToggle('chickenButton', 'chicken', chickenMeals);
setMealToggle('minceButton', 'mince', minceMeals);
setMealToggle('plantButton', 'plant', plantBased);
setMealToggle('otherButton', 'other', other);
setMealToggle('carbButton', 'highCarb', highCarb);

// Tidy up of meal selection
function pickRandomMeal(sourceArray) {
  if (sourceArray.length === 0) return null;

  const index = Math.floor(Math.random() * sourceArray.length);
  const meal = sourceArray[index];

  sourceArray.splice(index, 1);
  usedMeals.push(meal);

  return meal;
}

function findOddDayMeals() {
  return pickRandomMeal(chickenMeals);
}

function findEvenDayMeals() {
  return pickRandomMeal(minceMeals);
}

function findFridayMeal() {
  return pickRandomMeal(highCarb);
}

function findSundayMeal() {
  const combined = [...plantBased, ...other];

  const meal = pickRandomMeal(combined);
  if (!meal) return null;

  if (plantBased.includes(meal)) {
    plantBased.splice(plantBased.indexOf(meal), 1);
  } else {
    other.splice(other.indexOf(meal), 1);
  }

  return meal;
}

// find weekly list
function findWeeklyMeals() {
  usedMeals.length = 0;

  for (const day of weekdays) {
    let meal;

    if (day === 'Monday' || day === 'Wednesday') {
      meal = findOddDayMeals();
    } else if (day === 'Tuesday' || day === 'Thursday' || day === 'Saturday') {
      meal = findEvenDayMeals();
    } else if (day === 'Friday') {
      meal = findFridayMeal();
    } else {
      meal = findSundayMeal();
    }

    console.log(`${day}: ${meal}`);
  }
};

findWeeklyMeals();
console.log(usedMeals);
console.log(chickenMeals);
console.log(minceMeals);
console.log(other);
console.log(highCarb);
console.log(plantBased);
// print weekly list





// FOOTER
const date = new Date();
const year = date.getFullYear();

document.getElementById("currentYear").innerHTML = `Joseph Jameson-Rickard - ${year}`;

const month = date.getMonth() + 1;
const day = date.getDate();

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;