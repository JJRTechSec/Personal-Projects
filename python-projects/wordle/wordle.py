import random

wordList = ['helps', 'maker', 'pizza', 'plaza', 'sport', 'loser', 'posed', 'sheep']
word = random.choice(wordList).upper()
guess = ''
alphabet = ['abcdefghijklmnopqrstuvwxyz']

while True:
  guess = input("Guess a word: ").upper()

  if word == guess:
    print("You win!")
    break
  elif len(guess) != len(word):
    print("Type a word containing 5 letters")
  else:
    print("Try again")

  for letter in range(word):
    newAlphabet = list(alphabet)
    for character in guessSplit:
      if guessSplit[index] == wordSplit[index]:
        letter = guessSplit[index]
      elif guessSplit[index] in wordSplit:
        letter = guessSplit[index].lower()
      else:
        letter = '_'
      
      if letter in newAlphabet:
        alphabet.pop(alphabet.index(letter))
      else:
        continue
    print(letter, end='')
    index += 1
  print(alphabet)
  print()