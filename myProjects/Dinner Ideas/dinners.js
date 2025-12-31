let chickenMeals = ['Teriyaki', 'Pesto Chicken', 'Caesar Salad', 'Pasta Bake', 'Sweet and Sour', 'Enchiladas', 'Chicken Alfredo', 'Burritos', 'Fajitas'];
let minceMeals = ['Meatballs', 'Tacos', 'Lasagne', 'Baguettes', 'Bolognese', 'Sloppy Joes', 'Form', 'Burgers'];
let plantBased = ['Chickpea Curry', 'Falafel Salad'];
let other = ['Form', 'Kjott Pølser', 'Pølser', 'Chorizo Gnocchi', 'Kebab'];
let highCarb = ['Teriyaki', 'Pesto Chicken', 'Pasta Bake', 'Sweet and Sour', 'Burritos', 'Meatballs', 'Bolognese', 'Form'];

let usedMeals = [];

let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


let weeklyMeals = [];

// Function for meal toggling
function setMealToggle(buttonId, containerClass, meals) {
  const button = document.getElementById(buttonId);
  const container = document.querySelector(`.${containerClass} .items`);

  if (!button || !container) {
    console.error('Missing button or container:', buttonId, containerClass);
    return;
  }

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

function pickRandomMeal(sourceArray) {
  if (sourceArray.length === 0) return null;

  const index = Math.floor(Math.random() * sourceArray.length);
  const meal = sourceArray[index];

  sourceArray.splice(index, 1);
  usedMeals.push(meal);

  return meal;
}

// find weekly list
function findWeeklyMeals() {
  usedMeals.length = 0;
  weeklyMeals.length = 0;

  const chickenPool = [...chickenMeals];
  const mincePool = [...minceMeals];
  const plantPool = [...plantBased];
  const otherPool = [...other];
  const carbPool = [...highCarb];

  for (const day of weekdays) {
    let meal;

    if (day === 'Monday' || day === 'Wednesday') {
      meal = pickRandomMeal(chickenPool);
    } else if (day === 'Tuesday' || day === 'Thursday' || day === 'Saturday') {
      meal = pickRandomMeal(mincePool);
    } else if (day === 'Friday') {
      meal = pickRandomMeal(carbPool);
    } else {
      const combined = [...plantPool, ...otherPool];
      meal = pickRandomMeal(combined);

      if (plantPool.includes(meal)) {
        plantPool.splice(plantPool.indexOf(meal), 1);
      } else {
        otherPool.splice(otherPool.indexOf(meal), 1);
      }
    }

    weeklyMeals.push(meal)
    console.log(`${day}: ${meal}`);
  }
  return weeklyMeals;
};


// print weekly list
const generator = document.getElementById('generator');
const weeklyContainer = document.querySelector('.meal-generator .items')

generator.addEventListener('click', function () {
  weeklyContainer.innerHTML = '';

  const meals = findWeeklyMeals();
  const ul = document.createElement('ul');
  
  for (let i = 0; i < weekdays.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${weekdays[i]} - ${meals[i]}`;
    ul.appendChild(li);
  }
  weeklyContainer.appendChild(ul);
})