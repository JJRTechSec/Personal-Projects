let chickenMeals = ['Teriyaki', 'Pesto Chicken', 'Caesar Salad', 'Pasta Bake', 'Sweet and Sour', 'Enchiladas', 'Chicken Alfredo', 'Burritos', 'Fajitas'];
let minceMeals = ['Meatballs', 'Tacos', 'Lasagne', 'Baguettes', 'Bolognese', 'Sloppy Joes', 'form', 'burgers'];
let plantBased = ['Chickpea Curry', 'Falafel Salad'];
let other = ['Form', 'Kjott Pølser', 'Pølser', 'Chorizo Gnocchi', 'Kebab'];
let highCarb = ['Teriyaki', 'Pesto Chicken', 'Pasta Bake', 'Sweet and Sour', 'Burritos', 'Meatballs', 'Bolognese', 'Form'];

let oddDays = ['Monday', 'Wednesday'];
let evenDays = ['Tuesday', 'Thursday', 'Saturday'];
let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let list;
let dinner;

// CHICKEN

let chickenButton = document.getElementById('chickenButton');

chickenButton.addEventListener('click', function () {
  let chickenList = document.querySelector('.chicken');
  console.log('Chicken button clicked');

  chickenList.classList.toggle('active');

  if (chickenList.classList.contains('active')) {
    console.log('Showing chicken list')
    // CYCLE THROUGH MEAL LIST AND ADD TO LIST
    for (meal in chickenMeals) {
      const list = document.createElement('ul');
      const dinner = document.createElement('li');
      dinner.textContent = chickenMeals[meal];
      list.append(dinner);
      chickenList.append(list);
    };
  }
  else {
    console.log('Hiding chicken list');
    // REMOVE LIST
    if (chickenList.children.length > 1) {
      console.log(chickenList.children);
      chickenMeals.forEach(function () {
        chickenList.removeChild(chickenList.children[1]);
      });
    };
  }
});


// MINCE
let minceButton = document.getElementById('minceButton');

minceButton.addEventListener('click', function () {
  let minceList = document.querySelector('.mince');
  console.log('Mince button clicked');

  minceList.classList.toggle('active');

  if (minceList.classList.contains('active')) {
    console.log('Showing mince list')
    // CYCLE THROUGH MEAL LIST AND ADD TO LIST
    for (meal in minceMeals) {
      const list = document.createElement('ul');
      const dinner = document.createElement('li');
      dinner.textContent = minceMeals[meal];
      list.append(dinner);
      minceList.append(list);
    };
  }
  else {
    console.log('Hiding mince list');
    // REMOVE LIST
    if (minceList.children.length > 1) {
      console.log(minceList.children);
      minceMeals.forEach(function () {
        minceList.removeChild(minceList.children[1]);
      });
    };
  }
});


// PLANT-BASED
let plantButton = document.getElementById('plantButton');

plantButton.addEventListener('click', function () {
  let plantList = document.querySelector('.plant');
  console.log('Plant button clicked');
  plantList.classList.toggle('active');

  if (plantList.classList.contains('active')) {
    console.log('Showing plant-based list')
    // CYCLE THROUGH MEAL LIST AND ADD TO LIST
    for (meal in plantBased) {
      const list = document.createElement('ul');
      const dinner = document.createElement('li');
      dinner.textContent = plantBased[meal];
      list.append(dinner);
      plantList.append(list);
    };
  }
  else {
    console.log('Hiding plant-based list');
    // REMOVE LIST
    if (plantList.children.length > 1) {
      console.log(plantList.children);
      plantBased.forEach(function () {
        plantList.removeChild(plantList.children[1]);
      });
    };
  }
});


// OTHER
let otherButton = document.getElementById('otherButton');

otherButton.addEventListener('click', function () {
  let otherList = document.querySelector('.other');
  console.log('Other button clicked');

  otherList.classList.toggle('active');

  if (otherList.classList.contains('active')) {
    console.log('Showing mince list')
    // CYCLE THROUGH MEAL LIST AND ADD TO LIST
    for (meal in other) {
      const list = document.createElement('ul');
      const dinner = document.createElement('li');
      dinner.textContent = other[meal];
      list.append(dinner);
      otherList.append(list);
    };
  }
  else {
    console.log('Hiding other list');
    // REMOVE LIST
    if (otherList.children.length > 1) {
      console.log(otherList.children);
      other.forEach(function () {
        otherList.removeChild(otherList.children[1]);
      });
    };
  }
});


// CARB
let carbButton = document.getElementById('carbButton');

carbButton.addEventListener('click', function () {
  let carbList = document.querySelector('.highCarb');
  console.log('Carb button clicked');

  carbList.classList.toggle('active');

  if (carbList.classList.contains('active')) {
    console.log('Showing high-carb list')
    // CYCLE THROUGH MEAL LIST AND ADD TO LIST
    for (meal in highCarb) {
      const list = document.createElement('ul');
      const dinner = document.createElement('li');
      dinner.textContent = highCarb[meal];
      list.append(dinner);
      carbList.append(list);
    };
  }
  else {
    console.log('Hiding high-carb list');
    // REMOVE LIST
    if (carbList.children.length > 1) {
      console.log(carbList.children);
      highCarb.forEach(function () {
        carbList.removeChild(carbList.children[1]);
      });
    };
  }
});