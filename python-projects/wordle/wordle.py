import random

wordList = ['helps', 'maker', 'pizza', 'plaza', 'sport', 'loser', 'posed']
word = random.choice(wordList).lower()

guess = input('Guess a word: ').lower()

while guess != word:
  print(word)
  if guess!= word:
    for letter in range(len(word)):
      letter = '_'
      print(letter)
    guess = input('Guess a word: ').lower()
  else:
    print('You win!')

if guess == word:
  print('You win!')