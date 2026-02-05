import random

wordList = ['helps', 'maker', 'pizza', 'plaza', 'sport', 'loser', 'posed', 'sheep']
word = random.choice(wordList).upper()
guess = ''

while guess != word:
  guess = input("Guess a word: ").upper()
  wordSplit = list(word)
  guessSplit = list(guess)
  index = 0

  if word == guess:
    print("You win!")
  elif range(len(word)) != range(len(guess)):
    print("Type a word containing 5 letters")
  else:
    print("Try again")

  for letter in wordSplit:
    for character in guessSplit:
      if guessSplit[index] == wordSplit[index]:
        letter = guessSplit[index]
      elif guessSplit[index] in wordSplit:
        letter = guessSplit[index].lower()
      else:
        letter = '_'
    print(letter, end='')
    index += 1
  print()