#include <iostream>
using namespace std;

int main() {
  int myNum = 15;
  cout << myNum; //cout is an OBJECT
  int result = myNum * 3;
  cout << "\n" << result << endl;
  cout << "Can also use 'endl' to create a new line" << endl; // LOWERCASE L, not 1

  // Variable data types
  // Can update variables throughout the program
  int wholeNumber = 123;
  double decimalNumber = 12.34;
  char character = 'a'; // must be single quotes
  string sentence = "This is a string"; // must be double quotes
  bool trueOrFalse = true; // true or false, returns 0 or 1

  cout << wholeNumber << ", " << decimalNumber << ", " << character << ", " << sentence << ", " << trueOrFalse << endl;

  // Multiple variables
  int x = 5, y = 6, z = 50;
  cout << x + y + z;
  return 0; // required to end the main function
}