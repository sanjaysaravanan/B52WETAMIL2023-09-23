// declaration
var x;

var y;


// initialization
x = 10;

y = 99;

console.log('Sanjay');

// respresents a block of codes ( Block Scope )
{
  console.log('Sanjay');
}

// [] --> used for array datatype


// () ---> function execution or definition


// Function Definition
function displayInfo(message) {
  console.log('Executing the Function Display Information');

  console.log('Session Going for B52WETAMIL on 2023-09-23 14:00:00');

  console.log('Done, Executing the Function Display Information');

  console.log('Message: ', message);

  return 'Hi Hello';
}

const valueFrmFunc = displayInfo('Hi Hello this is My first message'); // function call/invoke/execution

console.log(valueFrmFunc);


// Print the n numbers starting from 1

const n = 10;

for (let i = 1; i <= n; i++) {
  console.log(i);
}

// print n numbers in reverse order starting from n

// Input: 100

// Output:
// 100
// 99
// 98
// .
// .
// .
// 2
// 1

const x = 99;
for (let i = x; i >= 1; i--) {

  console.log(i);

}


// Write a code to get an integer N and print the even values from 1 till N in a separate line.

const N = 99;

// Output:
// 2
// 4
// 6
// 8
// .
// .
// .
// 98
// 100

for (let i = 2; i <= N; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 2; i <= N; i = i + 2) {
  console.log(i);
}


// Write a code to get an integer N and print the sum of  values from 1 to N.

// Input: 8

// Output: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36

var n = 8;
var result = 0;

for (var i = 1; i <= n; i++) {
  result = result + i;
}

console.log(result);


//  Write a code to get the input in the given format and print the output in the given format ( Comma Separated String)


// Input: B52WETAMIL

// Output: B,5,2,W,E,T,A,M,I,L


const inputString = 'B52WETAMIL';

var result = '';

// iteration
for (var i = 0; i < inputString.length; i++) {

  // check for last index
  if (i + 1 === inputString.length) { // 9 + 1 --> 10
    result = result + inputString[i];
  } else {
    result = result + inputString[i] + ',';
  }
}

console.log(result);

// Write a code to get the input in the given format and print the output in the given format ( print in the same format)


// Input:
// sanjay is good developer
// sam lives in bengaluru
// sanjay role in bengaluru

// Output:
// sanjay is good developer
// sam lives in bengaluru
// sanjay role in bengaluru

// array iteration

const userInput = [
  'sanjay is good developer',
  'sam lives in bengaluru',
  'sanjay role in bengaluru'
];

for (var i = 0; i < userInput.length; i++) {
  console.log(userInput[i]);
}


const userInput = ['sanjay', 'sam', 'danny'];

var result = '';

for (var i = 0; i < userInput.length; i++) {

  if (i + 1 === userInput.length) { // 9 + 1 --> 10
    result = result + userInput[i];
  } else {
    result = result + userInput[i] + ' ';
  }
}

console.log(result);











