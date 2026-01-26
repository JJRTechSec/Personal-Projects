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
  cout << x + y + z << endl;

  x = y = z = 50;
  cout << x << ", " << y << ", " << z << "\n";

  // Reassigning variables
  int number = 15;
  number = 10; //myNum is now 10 instead of 15
  cout << number << endl;

  // Dsplaying variables
  int myAge = 27;
  cout << "I am " << myAge << " years old.\n";

  string name = "John";
  int age = 35;
  double height = 6.1;
  cout << name << " is " << age << " years old and " << height << " feet tall." << endl;

  

  return 0; // required to end the main function
}