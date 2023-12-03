console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Stacy'));


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

console.log('2 + 5 =', addNumbers(2,5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber*secondNumber*thirdNumber;
}
console.log('2 * 3 * 5 =', multiplyThree(2,3,5));



// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

console.log('0 is positive? ',isPositive(0));
console.log('-10 is positive? ',isPositive(-10));
console.log('10 is positive? ',isPositive(10));


// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let numArray = [3,5,-7,2,4,-9,6];
function getLast(array) {
  return array[array.length-1];
}

console.log('Last item is',getLast(numArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {

   for (const item of array){
     if (item === value){
       return true;
     }
   }

   return false;
}


// Array for testing [3,5,-7,2,4,-9,6];
console.log('2 is in numArray',find(2,numArray));
console.log('100 is in numArray',find(100,numArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

  return string[0] === letter;
}

console.log('r is the first letter in the word recreation',isFirstLetter('r', 'recreation'));
console.log('R is the first letter in the word recreation',isFirstLetter('R', 'recreation'));
console.log('d is the first letter in the word recreation',isFirstLetter('d', 'recreation'));


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (const item of array){
    sum += item;
  }
  // TODO: return the sum
  return sum;
}

console.log('Sum of ' + numArray + ' is' ,sumAll(numArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let positiveNums = [];

  for (const item of array){
    if (item > 0){
      positiveNums.push(item);
    }
  }

  return positiveNums;

}

// numArray for testing [3,5,-7,2,4,-9,6];
console.log('Negative and positive numbers in an array', numArray);
console.log('Positive numbers only', allPositive(numArray));
console.log('Array did not change', numArray);
console.log('Empty array',allPositive([]));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!


// A function that takes in an array as anrgument and returns an array of the
// maximum and numbers in the input array
function minMax(array){
  max = array[0];
  min = array[0];

  for (let i=1;i<array.length; i++ ){

    if (array[i] < min){
      min = array[i];
    }
    if (array[i] > max){
      max = array[i]
    }
  }

  return [min, max];
}


// numArray for testing [3,5,-7,2,4,-9,6];
console.log(numArray, 'minimum and maximum numbers are: ', minMax(numArray));
console.log('[1.346, 1.6532, 1.8734, 1.8723] minimum and maximum numbers are: ', minMax([1.346, 1.6532, 1.8734, 1.8723]));
console.log('[13, 72, 98, 43, 24, 65, 31] minimum and maximum numbers are: ', minMax([13, 72, 98, 43, 24, 65, 31]));
console.log('[-54, -23, -54, -21] minimum and maximum numbers are: ', minMax([-54, -23, -54, -21]));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
