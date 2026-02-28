/*
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

function getLastValue(array) {
  let lastValue = '';
  for (let i = 0; i < array.length; i++) {
    lastValue = array[i];
  };
  console.log(lastValue);
};

getLastValue(nums);
getLastValue([1, 20, 22, 24, 5]);
getLastValue(['hi', 'hello', 'good']);

function arraySwap(array) {
  const lastIndex = array.length - 1;
  const lastValue = array[lastIndex];
  const firstValue = array[0];
  array[0] = lastValue;
  array[lastIndex] = firstValue;
  return array;
};

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));
*/

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
};

for (let i = 5; i >= 0; i--) {
  console.log(i);
};

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  let newArray = array;
  newArray = newArray.push(array[i] += 1);
  console.log(newArray);
}