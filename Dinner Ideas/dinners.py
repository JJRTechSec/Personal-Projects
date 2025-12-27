import random

chicken_meals = ['teriyaki', 'pesto chicken', 'caesar salad', 'pasta bake', 'sweet and sour', 'enchiladas', 'chicken alfredo', 'burritos', 'fajitas']
mince_meals = ['meatballs', 'tacos', 'lasagne', 'baguettes', 'bolognese', 'sloppy joes', 'form', 'burgers']
plant_based = ['chickpea curry', 'falafel salad']
other = ['form', 'kjott pølser', 'pølser', 'chorizo gnocchi', 'kebab']
high_carb = ['teriyaki', 'pesto chicken', 'pasta bake', 'sweet and sour', 'burritos', 'meatballs', 'bolognese', 'form']

odd_days = ['Monday', 'Wednesday']
even_days = ['Tuesday', 'Thursday', 'Saturday']
weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

def find_odd_day_meals():
  meal = random.choice(chicken_meals)
  for option in chicken_meals:
    if meal == option:
      chicken_meals.remove(meal)
  return meal.title()

def find_even_day_meals():
  meal = random.choice(mince_meals)
  mince_meals.remove(meal)
  return meal.title()

def find_friday_meal():
  meal = random.choice(high_carb)
  return meal.title()

def find_sunday_meal(plant_based, other):
  sunday_combo = plant_based + other
  meal = random.choice(sunday_combo)
  return meal.title()

def find_weekly_meals():
  for day in weekdays:
    if day in ['Monday', 'Wednesday']:
      print(f"{day}: {find_odd_day_meals()}")
    elif day in ['Tuesday', 'Thursday', 'Saturday']:
      print(f"{day}: {find_even_day_meals()}")
    elif day == 'Friday':
      print(f"{day}: {find_friday_meal()}")
    else:
      print(f"{day}: {find_sunday_meal(plant_based, other)}")

find_weekly_meals()