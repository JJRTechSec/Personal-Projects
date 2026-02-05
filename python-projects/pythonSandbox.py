word = 'python'
guess = ''

while guess != word:
  guess = input("Guess a word: ").lower()
  wordSplit = list(word)
  guessSplit = list(guess)
  index = 0

  if word == guess:
    print("You win!")
  elif len(word) != len(guess):
    print("Type a word containing 6 letters")
  else:
    print("Try again")

  for letter in wordSplit:
    for character in guessSplit:
      if guessSplit[index] == wordSplit[index]:
        letter = guessSplit[index]
      else:
        letter = '_'
    print(letter, end='')
    index += 1
  print()